import { useState } from 'react';
import { Card } from '../UI/Card.jsx';
import { ArrowRight } from 'lucide-react';
import { migrationsData } from '../../data/siteContent.js';

export function MigrationsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMigration = migrationsData[activeIndex];

  return (
    <Card className="migrations-showcase" aria-label="Migrations Showcase" hasShadow>
      <div className="migrations-header">
        <span className="status-dot pulsing" />
        <span>High-Impact Migrations & Cutovers</span>
      </div>
      
      <div className="migrations-layout">
        <div className="migrations-list">
          {migrationsData.map((mig, idx) => (
            <button 
              key={mig.id}
              className={`migration-btn ${activeIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <mig.icon aria-hidden="true" size={18} />
              <div className="migration-btn-text">
                <strong>{mig.title}</strong>
                <span>{mig.subtitle}</span>
              </div>
            </button>
          ))}
        </div>
        
        <div className="migration-detail-pane">
          <div className="migration-flow">
            <div className="flow-node old">
              <span>{activeMigration.from}</span>
            </div>
            <ArrowRight className="flow-arrow" />
            <div className="flow-node new">
              <span>{activeMigration.to}</span>
            </div>
          </div>
          
          <div className="migration-metrics">
            {activeMigration.metrics.map(metric => (
              <div key={metric.label} className="metric-box">
                <h4>{metric.value}</h4>
                <p>{metric.label}</p>
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
