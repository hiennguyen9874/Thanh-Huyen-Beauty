'use client';

import { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';

import { faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';

interface TestimonialItem {
  id: string | number;
  name: string;
  role?: string;
  image?: string;
  content: string;
  rating?: number;
}

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
  autoplay?: boolean;
  interval?: number;
  className?: string;
}

const TestimonialCarousel = ({
  testimonials,
  autoplay = true,
  interval = 5000,
  className = '',
}: TestimonialCarouselProps) => {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  // Handle next/prev actions
  const handleNext = useCallback(() => {
    setActiveIndex(([current, _]) => [current === testimonials.length - 1 ? 0 : current + 1, 1]);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex(([current, _]) => [current === 0 ? testimonials.length - 1 : current - 1, -1]);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    const newDirection = index > activeIndex ? 1 : -1;
    setActiveIndex([index, newDirection]);
  };

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(timer);
  }, [autoplay, interval, isPaused, handleNext]);

  // Animation variants
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  };

  // Star Rating Component
  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      ))}
    </div>
  );

  const activeTestimonial = testimonials[activeIndex];

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden rounded-xl bg-white shadow-xl">
        <div className="relative min-h-[300px] w-full">
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 w-full"
            >
              <div className="flex h-full flex-col p-6 md:p-8">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="mb-4 h-8 w-8"
                  style={{ color: 'var(--text-primary)' }}
                />

                <p className="mb-6 text-gray-600">{activeTestimonial.content}</p>

                <div className="mt-auto flex items-center">
                  {activeTestimonial.image && (
                    <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={activeTestimonial.image}
                        alt={activeTestimonial.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  <div>
                    <div
                      className="font-serif text-lg font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {activeTestimonial.name}
                    </div>
                    {activeTestimonial.role && (
                      <div className="text-sm text-gray-500">{activeTestimonial.role}</div>
                    )}
                    {activeTestimonial.rating && <StarRating rating={activeTestimonial.rating} />}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 justify-between px-4">
        <motion.button
          onClick={handlePrev}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Previous testimonial"
        >
          <FontAwesomeIcon icon={faChevronLeft} style={{ color: 'var(--text-primary)' }} />
        </motion.button>

        <motion.button
          onClick={handleNext}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Next testimonial"
        >
          <FontAwesomeIcon icon={faChevronRight} style={{ color: 'var(--text-primary)' }} />
        </motion.button>
      </div>

      {/* Dots indicator */}
      <div className="mt-4 flex justify-center">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`mx-1 h-2 rounded-full transition-all ${
              index === activeIndex ? 'w-4' : 'w-2'
            }`}
            style={{
              backgroundColor: index === activeIndex ? 'var(--primary-dark)' : 'var(--primary)',
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
