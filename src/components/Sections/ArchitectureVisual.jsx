import { useState } from 'react';
import { Card } from '../UI/Card.jsx';
import { architectureNodes } from '../../data/siteContent.js';
import heroAsset from '../../assets/hero.png';

export function ArchitectureVisual() {
  const [activeNodeKey, setActiveNodeKey] = useState("gke");
  const activeNode =
    architectureNodes.find((node) => node.key === activeNodeKey) ||
    architectureNodes[0];

  return (
    <Card
      className="architecture-visual"
      aria-label="Platform architecture visual"
      hasShadow
    >
      <div className="visual-grid" aria-hidden="true" />
      <div className="visual-header">
        <span className="status-dot" />
        <span>platform-pranav.yaml</span>
      </div>
      <img src={heroAsset} alt="" className="hero-asset" fetchpriority="high" />
      <div className="topology">
        {architectureNodes.map((node) => (
          <button
            key={node.key}
            className={`topology-node ${node.key === activeNodeKey ? "primary" : ""}`}
            type="button"
            onClick={() => setActiveNodeKey(node.key)}
            aria-pressed={node.key === activeNodeKey}
            title={`Explain ${node.label}`}
          >
            <node.icon aria-hidden="true" />
            <span>{node.label}</span>
          </button>
        ))}
      </div>
      <div className="terminal-readout" aria-live="polite">
        <span>{activeNode.command}</span>
        <strong>{activeNode.outcome}</strong>
        <span>{activeNode.detail}</span>
      </div>
    </Card>
  );
}
