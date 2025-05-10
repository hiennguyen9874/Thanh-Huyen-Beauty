'use client';

import { ReactNode, useRef } from 'react';

import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const ParallaxEffect = ({
  children,
  offset = 50,
  direction = 'up',
  className = '',
}: ParallaxProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const transformUp = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const transformDown = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const transformLeft = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const transformRight = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  let x: MotionValue<number> | 0 = 0;
  let y: MotionValue<number> | 0 = 0;

  switch (direction) {
    case 'up':
      y = transformUp;
      break;
    case 'down':
      y = transformDown;
      break;
    case 'left':
      x = transformLeft;
      break;
    case 'right':
      x = transformRight;
      break;
    default:
      y = transformUp;
  }

  return (
    <motion.div ref={ref} style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
};

export default ParallaxEffect;
