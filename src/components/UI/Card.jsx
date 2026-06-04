import './Card.css';

export function Card({
  children,
  className = '',
  hasShadow = false,
  as: Component = 'article',
  ...props
}) {
  return (
    <Component
      className={`card ${hasShadow ? 'card--shadow' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
