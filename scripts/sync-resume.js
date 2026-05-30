import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MARKDOWN_PATH = path.resolve(__dirname, '../../../../../../wiki/analyses/pranav-sre-resume-2026.md');
const OUTPUT_DIR = path.resolve(__dirname, '../src/data');
const OUTPUT_PATH = path.join(OUTPUT_DIR, 'resumeData.json');

function parseMarkdown(mdContent) {
  const lines = mdContent.split(/\r?\n/);
  const data = {
    name: 'Pranav Bansal',
    title: 'Site Reliability Engineer',
    location: '',
    links: { linkedin: '', github: '' },
    education: [],
    skills: {},
    experience: [],
    projects: []
  };

  let currentSection = '';
  let currentCompany = null;
  let currentRole = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Header info parsing
    if (line.startsWith('# ')) {
      const match = line.match(/# (.*?)\s*—\s*(.*)/);
      if (match) {
        data.name = match[1].trim();
        data.title = match[2].trim().replace(/\s*\(.*\)/g, ''); // strip year if any
      }
      continue;
    }

    if (line.startsWith('**Location:**')) {
      data.location = line.replace('**Location:**', '').trim();
      continue;
    }

    if (line.startsWith('**Links:**')) {
      const linkedinMatch = line.match(/\[LinkedIn\]\((.*?)\)/);
      const githubMatch = line.match(/\[GitHub\]\((.*?)\)/);
      if (linkedinMatch) data.links.linkedin = linkedinMatch[1];
      if (githubMatch) data.links.github = githubMatch[1];
      continue;
    }

    // Section detection
    if (line.startsWith('## ')) {
      currentSection = line.replace('## ', '').trim();
      continue;
    }

    // Parse Education & Certifications
    if (currentSection === 'Education & Certifications') {
      if (line.startsWith('**')) {
        const parts = line.split('|').map(p => p.trim());
        const degreeSchool = parts[0].replace(/\*\*/g, '');
        const [degree, school] = degreeSchool.split(',').map(s => s.trim());
        data.education.push({
          degree: degree,
          school: school || '',
          period: parts[1] || '',
          details: parts[2] || '',
          certifications: []
        });
      } else if (data.education.length > 0) {
        const certs = line.split('|').map(c => c.trim()).filter(Boolean);
        data.education[data.education.length - 1].certifications = certs;
      }
      continue;
    }

    // Parse Technical Skills
    if (currentSection === 'Technical Skills') {
      if (line.startsWith('- **')) {
        const match = line.match(/-\s*\*\*(.*?):\*\*(.*)/);
        if (match) {
          const category = match[1].trim();
          const rawItems = [];
          let current = '';
          let depth = 0;
          const str = match[2];
          for (let char of str) {
            if (char === '(') depth++;
            else if (char === ')') depth--;
            if (char === ',' && depth === 0) {
              rawItems.push(current.trim());
              current = '';
            } else {
              current += char;
            }
          }
          if (current) rawItems.push(current.trim());
          
          const items = rawItems
            .flatMap(item => item.split('|').map(x => x.trim()))
            .filter(Boolean);
            
          data.skills[category] = items;
        }
      }
      continue;
    }

    // Parse Professional Experience
    if (currentSection === 'Professional Experience') {
      if (line.startsWith('### ')) {
        const companyPeriod = line.replace('### ', '').trim();
        const parts = companyPeriod.split('|').map(p => p.trim());
        const company = parts[0];
        const period = parts[1] ? parts[1].replace(/_/g, '') : '';
        currentCompany = {
          company,
          period,
          context: '',
          roles: []
        };
        data.experience.push(currentCompany);
        currentRole = null;
      } else if (currentCompany) {
        if (line.startsWith('_') && line.endsWith('_')) {
          currentCompany.context = line.replace(/_/g, '').trim();
        } else if (line.startsWith('**') && (line.includes('promoted') || line.includes('Engineer') || line.includes('Intern'))) {
          // It's a role title
          currentRole = {
            title: line.replace(/\*\*/g, '').trim(),
            bullets: []
          };
          currentCompany.roles.push(currentRole);
        } else if (line.startsWith('- ')) {
          const bulletContent = line.replace(/^-\s*/, '').trim();
          // If no roles defined yet, create a default one
          if (!currentRole) {
            currentRole = {
              title: currentCompany.company.includes('Roundcircle') ? 'DevOps / SRE Engineer' : 'Engineer',
              bullets: []
            };
            currentCompany.roles.push(currentRole);
          }
          currentRole.bullets.push(bulletContent);
        }
      }
      continue;
    }

    // Parse Projects & Achievements
    if (currentSection === 'Projects & Achievements') {
      if (line.startsWith('- **')) {
        const match = line.match(/-\s*\*\*(.*?):\*\*(.*)/);
        if (match) {
          data.projects.push({
            title: match[1].trim(),
            description: match[2].trim()
          });
        }
      }
      continue;
    }
  }

  return data;
}

try {
  console.log(`Reading resume markdown from: ${MARKDOWN_PATH}`);
  if (!fs.existsSync(MARKDOWN_PATH)) {
    console.error(`Error: Markdown resume file not found at ${MARKDOWN_PATH}`);
    process.exit(1);
  }
  
  const content = fs.readFileSync(MARKDOWN_PATH, 'utf-8');
  const parsedData = parseMarkdown(content);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(parsedData, null, 2), 'utf-8');
  console.log(`Successfully synced resume data to ${OUTPUT_PATH}`);
} catch (error) {
  console.error('Failed to sync resume:', error);
  process.exit(1);
}
