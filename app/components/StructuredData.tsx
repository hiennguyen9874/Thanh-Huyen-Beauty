import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: 'Thanh Huyền Beauty',
    image: 'https://thanh-huyen-beauty.com/og-image.jpg',
    '@id': 'https://thanh-huyen-beauty.com',
    url: 'https://thanh-huyen-beauty.com',
    telephone: '+84 123456789',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Đường Lê Lợi',
      addressLocality: 'Hà Nội',
      postalCode: '100000',
      addressCountry: 'VN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.0278,
      longitude: 105.8342,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    priceRange: '$$',
    servesCuisine: 'Beauty Treatments',
    sameAs: [
      'https://www.facebook.com/thanhhuyen.beauty',
      'https://www.instagram.com/thanhhuyen.beauty',
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
