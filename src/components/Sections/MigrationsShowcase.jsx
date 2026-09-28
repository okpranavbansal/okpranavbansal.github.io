import { useState } from 'react';
import { Card } from '../UI/Card.jsx';
import { ArrowRight } from 'lucide-react';
import { migrationsData } from '../../data/siteContent.js';

export function MigrationsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMigration = migrationsData[activeIndex];

  return (
    <Card
      className="migrations-showcase card--static"
      aria-label="Migrations showcase"
      hasShadow
    >
      <div className="migrations-header">
        <span className="status-dot pulsing" />
        <span>High-Impact Migrations & Cutovers</span>
      </div>

      <div className="migrations-layout">
        <div className="migrations-list" role="tablist" aria-label="Migration stories">
          {migrationsData.map((mig, idx) => (
            <button
              key={mig.id}
              type="button"
              role="tab"
              id={`migration-tab-${mig.id}`}
              aria-selected={activeIndex === idx}
              aria-controls={activeIndex === idx ? `migration-panel-${mig.id}` : undefined}
              tabIndex={activeIndex === idx ? 0 : -1}
              className={`migration-btn ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              onKeyDown={(event) => {
                if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key)) return;
                event.preventDefault();
                const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
                const next = (idx + direction + migrationsData.length) % migrationsData.length;
                setActiveIndex(next);
                document.getElementById(`migration-tab-${migrationsData[next].id}`)?.focus();
              }}
            >
              <mig.icon aria-hidden="true" size={18} />
              <div className="migration-btn-text">
                <strong>{mig.title}</strong>
                <span>{mig.subtitle}</span>
              </div>
            </button>
          ))}
        </div>

        <div
          className="migration-detail-pane"
          id={`migration-panel-${activeMigration.id}`}
          role="tabpanel"
          aria-labelledby={`migration-tab-${activeMigration.id}`}
        >
          <div className="migration-flow">
            <div className="flow-node old">
              <span>{activeMigration.from}</span>
            </div>
            <ArrowRight className="flow-arrow" aria-hidden="true" />
            <div className="flow-node new">
              <span>{activeMigration.to}</span>
            </div>
          </div>

          <div className="migration-metrics">
            {activeMigration.metrics.map((metric) => (
              <div key={metric.label} className="metric-box">
                <p className="metric-value">{metric.value}</p>
                <p className="metric-label">{metric.label}</p>
              </div>
            ))}
          </div>

          <p className="migration-description">
            {activeMigration.description}
          </p>
        </div>
      </div>
    </Card>
  );
}
