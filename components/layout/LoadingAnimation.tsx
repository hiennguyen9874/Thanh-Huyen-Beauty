'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

interface LoadingAnimationProps {
  duration?: number;
}

const LoadingAnimation = ({ duration = 2000 }: LoadingAnimationProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className="relative h-40 w-40">
            {/* Flower petals animation */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  originX: '1',
                  originY: '1',
                  rotate: i * 45,
                  x: -40,
                  y: -40,
                }}
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
              >
                <div
                  className="h-6 w-6 rounded-full"
                  style={{
                    background: 'var(--primary, #f8c8dc)',
                    opacity: 0.7,
                  }}
                />
              </motion.div>
            ))}

            {/* Center flower */}
            <motion.div
              className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{ background: 'var(--primary-dark, #e8a4c4)' }}
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
              }}
            />

            {/* Text animation */}
            <motion.div
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-lg font-medium"
              style={{ color: 'var(--text, #5a4a42)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Thanh Huyền Beauty
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingAnimation;
