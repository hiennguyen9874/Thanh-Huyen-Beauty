'use client';

import { useState } from 'react';

import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';

interface Photo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface PhotoGalleryProps {
  photos: Photo[];
  className?: string;
}

const PhotoGallery = ({ photos, className = '' }: PhotoGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  const openLightbox = (photo: Photo) => {
    setSelectedImage(photo);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = ''; // Restore scrolling
  };

  // Calculate spans for masonry layout (based on image aspect ratio)
  const getSpans = (photo: Photo) => {
    const aspectRatio = photo.width / photo.height;
    if (aspectRatio > 1.2) return 'col-span-2'; // Wide images
    if (aspectRatio < 0.8) return 'row-span-2'; // Tall images
    return ''; // Square-ish images
  };

  return (
    <div className={className}>
      {/* Masonry Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className={`overflow-hidden rounded-lg shadow-md ${getSpans(photo)}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
              duration: 0.5,
              delay: (index * 0.1) % 0.5, // Stagger but reset after every 5 images
            }}
            whileHover={{ scale: 1.03 }}
            onClick={() => openLightbox(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="h-full w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-h-[90vh] max-w-[90vw]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={selectedImage.width}
                height={selectedImage.height}
                className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
              />
              <button
                className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold text-gray-800 shadow-md"
                onClick={closeLightbox}
                aria-label="Close lightbox"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
