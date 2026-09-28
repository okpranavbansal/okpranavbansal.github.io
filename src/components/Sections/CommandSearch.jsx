import { useState, useMemo } from 'react';
import { Terminal, Sparkles } from 'lucide-react';
import { Card } from '../UI/Card.jsx';
import { faq } from '../../data/siteContent.js';

export function CommandSearch() {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return faq;
    return faq.filter((item) =>
      `${item.q} ${item.a}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <Card className="ask-panel agentic-terminal" aria-label="Ask about Pranav" hasShadow>
      <div className="ask-topline">
        <div className="terminal-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="terminal-title">
          <Terminal size={14} aria-hidden="true" />
          <span>pb-agent --query</span>
        </div>
      </div>
      <label className="ask-input">
        <Sparkles size={16} aria-hidden="true" className="agent-sparkle" />
        <span className="sr-only">Search portfolio answers</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ask the agent about platform, GitOps, or AI infra..."
        />
      </label>
      <div className="answer-stack">
        {results.length ? (
          results.map((item) => (
            <Card key={item.q} className="answer-card" as="article">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </Card>
          ))
        ) : (
          <Card className="answer-card" as="article">
            <h3>No direct match yet</h3>
            <p>
              Use the case studies and experience timeline below for the deeper
              engineering proof.
            </p>
          </Card>
        )}
      </div>
    </Card>
  );
}
