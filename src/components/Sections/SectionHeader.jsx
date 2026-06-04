
export function SectionHeader({ eyebrow, title, text, icon: Icon }) {
  return (
    <div className="section-header">
      <div className="section-kicker">
        {Icon && <Icon aria-hidden="true" />}
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
