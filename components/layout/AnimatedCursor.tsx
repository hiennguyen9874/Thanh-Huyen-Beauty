'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

interface AnimatedCursorProps {
  color?: string;
  outerAlpha?: number;
  innerSize?: number;
  outerSize?: number;
  outerScale?: number;
  innerScale?: number;
}

const AnimatedCursor = ({
  color = 'var(--primary-dark)',
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 30,
  outerScale = 5,
  innerScale = 0.7,
}: AnimatedCursorProps) => {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const endX = useRef(0);
  const endY = useRef(0);

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    setCoords({ x: clientX, y: clientY });
    endX.current = clientX;
    endY.current = clientY;
  };

  const animateOuterCursor = useCallback(() => {
    if (!cursorOuterRef.current) return;

    const x = Math.round(endX.current);
    const y = Math.round(endY.current);

    cursorOuterRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    requestRef.current = requestAnimationFrame(animateOuterCursor);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    requestRef.current = requestAnimationFrame(animateOuterCursor);

    // Show cursor when mouse moves
    const mouseEnterWindow = () => setIsVisible(true);
    const mouseLeaveWindow = () => setIsVisible(false);

    document.body.addEventListener('mouseenter', mouseEnterWindow);
    document.body.addEventListener('mouseleave', mouseLeaveWindow);

    // Handle cursor interaction with clickable elements
    const handleLinkHover = () => setIsActive(true);
    const handleLinkLeave = () => setIsActive(false);

    const handleButtonHover = () => setIsActiveClickable(true);
    const handleButtonLeave = () => setIsActiveClickable(false);

    const addLinkEvents = () => {
      document.querySelectorAll('a, button, input, textarea, select, .clickable').forEach((el) => {
        el.addEventListener('mouseenter', handleLinkHover);
        el.addEventListener('mouseleave', handleLinkLeave);
      });

      document
        .querySelectorAll('button, .button, input[type="button"], input[type="submit"]')
        .forEach((el) => {
          el.addEventListener('mouseenter', handleButtonHover);
          el.addEventListener('mouseleave', handleButtonLeave);
        });
    };

    // Call once and add mutation observer to handle dynamically added elements
    addLinkEvents();

    const mutationObserver = new MutationObserver(addLinkEvents);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }

      document.body.removeEventListener('mouseenter', mouseEnterWindow);
      document.body.removeEventListener('mouseleave', mouseLeaveWindow);

      document.querySelectorAll('a, button, input, textarea, select, .clickable').forEach((el) => {
        el.removeEventListener('mouseenter', handleLinkHover);
        el.removeEventListener('mouseleave', handleLinkLeave);
      });

      document
        .querySelectorAll('button, .button, input[type="button"], input[type="submit"]')
        .forEach((el) => {
          el.removeEventListener('mouseenter', handleButtonHover);
          el.removeEventListener('mouseleave', handleButtonLeave);
        });

      mutationObserver.disconnect();
    };
  }, [animateOuterCursor]);

  return (
    <div style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease' }}>
      <motion.div
        ref={cursorInnerRef}
        className="fixed top-0 left-0 pointer-events-none z-[999]"
        style={{
          x: coords.x - innerSize / 2,
          y: coords.y - innerSize / 2,
          width: innerSize,
          height: innerSize,
          borderRadius: '50%',
          backgroundColor: color,
          transform: isActive ? `scale(${innerScale})` : 'scale(1)',
          transition: 'transform 0.2s ease-out',
        }}
      />
      <motion.div
        ref={cursorOuterRef}
        className="fixed top-0 left-0 pointer-events-none z-[998]"
        style={{
          width: outerSize,
          height: outerSize,
          borderRadius: '50%',
          border: `1px solid ${color}`,
          backgroundColor: `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${outerAlpha})`,
          marginLeft: -outerSize / 2,
          marginTop: -outerSize / 2,
          transform: isActiveClickable ? `scale(${outerScale})` : 'scale(1)',
          transition: 'transform 0.3s ease-out',
        }}
      />
    </div>
  );
};

export default AnimatedCursor;
