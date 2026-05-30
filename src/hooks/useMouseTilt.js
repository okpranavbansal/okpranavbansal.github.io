import { useState, useCallback } from 'react';

/**
 * useMouseTilt – returns a ref callback + tilt styles for 3D card perspective effect.
 * Attach the returned `onMouseMove` / `onMouseLeave` to the element.
 */
export function useMouseTilt(maxDeg = 10) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -maxDeg, y: dx * maxDeg });
    setIsHovered(true);
  }, [maxDeg]);

  const onMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  const style = {
    transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.5s ease-out',
  };

  return { onMouseMove, onMouseLeave, style };
}
