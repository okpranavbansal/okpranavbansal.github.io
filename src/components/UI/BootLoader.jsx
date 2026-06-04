import { loaderSteps } from '../../data/siteContent.js';
import './BootLoader.css';

export function BootLoader() {
  return (
    <div
      className="boot-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="boot-card">
        <div className="boot-mark">PB</div>
        <div className="boot-copy">
          <span>Initializing portfolio</span>
          <strong>SRE / AI platform profile</strong>
        </div>
        <div className="boot-grid" aria-hidden="true">
          {Array.from({ length: 16 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
        <div className="boot-steps">
          {loaderSteps.map((step, index) => (
            <span key={step} style={{ "--step": index }}>
              {step}
            </span>
          ))}
        </div>
        <div className="boot-progress" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}
