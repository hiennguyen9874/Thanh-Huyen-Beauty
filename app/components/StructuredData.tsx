import Script from 'next/script';

import { siteConfig } from '@/config/site';

export default function StructuredData() {
  const { business, contact, seo, structuredData, social } = siteConfig;

  const structuredDataObj = {
    '@context': 'https://schema.org',
    '@type': 'BeautySalon',
    name: business.name,
    image: structuredData.image,
    '@id': seo.siteUrl,
    url: seo.siteUrl,
    telephone: contact.phone[0],
    address: {
      '@type': 'PostalAddress',
      ...structuredData.postalAddress,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...structuredData.geo,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: structuredData.openingHours.dayOfWeek,
        opens: structuredData.openingHours.opens,
        closes: structuredData.openingHours.closes,
      },
    ],
    priceRange: structuredData.priceRange,
    servesCuisine: structuredData.serviceType,
    sameAs: [social.facebook, social.instagram].filter(Boolean),
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataObj) }}
    />
  );
}
