'use client';

import { useCallback, useEffect, useState } from 'react';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';

interface ScrollToTopProps {
  showHeight?: number;
  color?: string;
  backgroundColor?: string;
  size?: number;
  borderRadius?: number;
  right?: number;
  bottom?: number;
  zIndex?: number;
}

const ScrollToTop = ({
  showHeight = 400,
  color = 'var(--text-primary)',
  backgroundColor = 'var(--primary-dark)',
  size = 45,
  borderRadius = 50,
  right = 20,
  bottom = 20,
  zIndex = 40,
}: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (window.pageYOffset > showHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [showHeight]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [toggleVisibility]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed shadow-lg"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          style={{
            backgroundColor,
            color,
            width: size,
            height: size,
            borderRadius,
            right,
            bottom,
            zIndex,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          aria-label="Scroll to top"
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
