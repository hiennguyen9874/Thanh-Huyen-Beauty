'use client';

import PhotoGallery from '../layout/PhotoGallery';
import ScrollAnimation from '../layout/ScrollAnimation';

const Gallery = () => {
  // Sample gallery photos - replace with your actual spa photos
  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Spa treatment room',
      width: 800,
      height: 600,
    },
    {
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Facial treatment',
      width: 800,
      height: 1200,
    },
    {
      src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Spa products',
      width: 800,
      height: 534,
    },
    {
      src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Massage therapy',
      width: 800,
      height: 600,
    },
    {
      src: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Relaxation area',
      width: 800,
      height: 1067,
    },
    {
      src: 'https://images.unsplash.com/photo-1552693673-1bf958298935?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Spa interior',
      width: 800,
      height: 534,
    },
    {
      src: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Luxury treatment',
      width: 800,
      height: 600,
    },
    {
      src: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      alt: 'Facial supplies',
      width: 800,
      height: 1200,
    },
  ];

  return (
    <section id="gallery" className="py-20" style={{ backgroundColor: 'var(--tertiary)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation variant="fadeUp">
          <div className="mb-16 text-center">
            <h2 className="section-title mb-4 inline-block font-serif text-3xl font-bold">
              Hình Ảnh Về Chúng Tôi
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              Khám phá không gian và dịch vụ tại Thanh Huyền Beauty Spa
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation variant="fadeUp" delay={0.2}>
          <PhotoGallery photos={photos} />
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Gallery;
