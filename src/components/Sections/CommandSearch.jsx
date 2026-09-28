import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
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
    <Card
      className="ask-panel profile-search card--static"
      aria-label="Profile search"
      hasShadow
    >
      <div className="ask-topline">
        <Search size={16} aria-hidden="true" className="search-icon" />
        <span className="search-panel-title">Profile search</span>
      </div>
      <label className="ask-input">
        <span className="sr-only">Search profile answers</span>
        <input
          type="search"
          name="profile-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Roles, stack, proof signals…"
          autoComplete="off"
        />
      </label>
      <div className="answer-stack" aria-live="polite">
        {results.length ? (
          results.map((item) => (
            <article key={item.q} className="answer-card">
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))
        ) : (
          <article className="answer-card">
            <h3>No direct match yet</h3>
            <p>
              Use the case studies and experience timeline below for the deeper
              engineering proof.
            </p>
          </article>
        )}
      </div>
    </Card>
  );
}
