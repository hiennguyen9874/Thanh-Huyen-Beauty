export type SocialMediaLinks = {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  zalo?: string;
};

export type ContactInfo = {
  phone: string[];
  email: string;
  address: string;
  workingHours: string;
};

export type BusinessInfo = {
  name: string;
  slogan: string;
  description: string;
  foundedYear: number;
  logo: {
    light: string;
    dark?: string;
  };
};

export type GeoCoordinates = {
  latitude: number;
  longitude: number;
};

export type PostalAddress = {
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: string;
};

export type OpeningHours = {
  dayOfWeek: string[];
  opens: string;
  closes: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type StructuredDataInfo = {
  priceRange: string;
  serviceType: string;
  geo: GeoCoordinates;
  postalAddress: PostalAddress;
  openingHours: OpeningHours;
  image: string;
  faqs: FaqItem[];
};

export type SiteConfig = {
  business: BusinessInfo;
  contact: ContactInfo;
  social: SocialMediaLinks;
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    siteUrl: string;
    ogImage: string;
    twitterHandle?: string;
  };
  structuredData: StructuredDataInfo;
};
