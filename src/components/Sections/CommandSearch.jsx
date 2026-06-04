import { useState, useMemo } from 'react';
import { Command, Search } from 'lucide-react';
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
    <Card className="ask-panel" aria-label="Ask about Pranav" hasShadow>
      <div className="ask-topline">
        <Command aria-hidden="true" />
        <span>Ask about reliability, cloud, or AI platform work</span>
      </div>
      <label className="ask-input">
        <Search aria-hidden="true" />
        <span className="sr-only">Search portfolio answers</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try: migration, GitOps, stack, roles..."
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
