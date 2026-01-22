# Portfolio Website

This is the Portfolio Website of [Pranav Bansal](https://github.com/okpranavbansal).

## Installation & Running

### Prerequisites

- **Ruby**: Ensure Ruby is installed on your system.
  - Mac: `brew install ruby` (if using Homebrew)
  - Other OS: See [Ruby Installation Guide](https://www.ruby-lang.org/en/documentation/installation/)

### Steps

1. **Install Dependencies**
   Navigate to the project directory and run:

   ```bash
   bundle install
   ```

2. **Run Locally**
   Start the local development server:

   ```bash
   bundle exec jekyll serve
   ```

   The site will be available at `http://localhost:4000`.

3. **Build options**
   - For production build: `bundle exec jekyll build`

<details>

<summary>Click here to know more</summary>

## Development Decisions

These decisions were made based on project requirements.

- `_posts` are not used.
- A custom collection `projects` has been used.
- `_projects` and `projects` both serve distinct purposes. Merging them is not recommended, as this structure allows for cleaner URLs, better organization, and simpler management.
- The Bootstrap Readable CSS is around `125KB`, which is large. While tools like PurgeCSS could help, GitHub Pages doesn’t support it directly. For now, the goal is to keep things simple and deploy via GitHub Pages. (A Gatsby site might be a better long-term option.)
- To save space, Bootstrap Readable has been commented out.
- Any custom overrides to Bootstrap should go in `custom.css`.
- Some unused files are intentionally retained for potential future use.
- `Disqus comments` are supported, but a manual “Load Comments” button is used since comments are rare.

## Common Operations

**Changing common settings**

- Edit `_config.yml` and rerun `jekyll serve` to see the changes.
- You’ll need to create a Disqus admin board for your site to enable comments.

**Adding a new Project**

- Create a markdown file in `_projects` with your project name.
- Check existing files to see supported front matter.
- For static assets, create a folder in `projects/` with the same project name, and reference those files directly in your markdown.
- Set `comments: true` in front matter to enable comments.
- Use the `priority` field to reorder projects (smaller number = higher priority).

**Debug**

- Add `{% debug %}` anywhere in the site.
- Use Octopress debugger to explore variables in the command line.

**Theme**

- This site uses a minimal Jekyll theme [cards](https://github.com/sharu725/cards).
- Further design changes have been made to suit my portfolio requirements.

</details>

## License

- Feel free to use the theme.
- Content copyright © 2026 **Pranav Bansal**.
