import { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  business: {
    name: 'Thanh Huyền Beauty',
    slogan: 'Spa Chăm Sóc Da Chuyên Nghiệp',
    description:
      'Nơi chăm sóc da chuyên nghiệp với công nghệ hiện đại và đội ngũ chuyên viên giàu kinh nghiệm.',
    foundedYear: 2024,
    logo: {
      light: '/images/logo-light.png',
      dark: '/images/logo-dark.png',
    },
  },
  contact: {
    phone: ['+84 123 456 789'], // Replace with actual phone number
    email: 'contact@thanh-huyen-beauty.com', // Replace with actual email
    address: 'Địa chỉ của Thanh Huyền Beauty Spa', // Replace with actual address
    workingHours: '9:00 - 21:00 (Thứ 2 - Chủ Nhật)',
  },
  social: {
    facebook: 'https://facebook.com/thanhhuyenbeauty',
    instagram: 'https://instagram.com/thanhhuyenbeauty',
    tiktok: 'https://tiktok.com/@thanhhuyenbeauty',
    youtube: 'https://youtube.com/@thanhhuyenbeauty',
    zalo: 'https://zalo.me/thanhhuyenbeauty',
  },
  seo: {
    defaultTitle: 'Thanh Huyền Beauty - Spa Chăm Sóc Da Chuyên Nghiệp',
    titleTemplate: '%s | Thanh Huyền Beauty',
    defaultDescription:
      'Thanh Huyền Beauty Spa - Nơi chăm sóc da chuyên nghiệp với công nghệ hiện đại và đội ngũ chuyên viên giàu kinh nghiệm.',
    siteUrl: 'https://thanh-huyen-beauty.com',
    ogImage: 'https://thanh-huyen-beauty.com/og-image.jpg',
  },
  structuredData: {
    priceRange: '$$',
    serviceType: 'Beauty Treatments',
    geo: {
      latitude: 21.0278,
      longitude: 105.8342,
    },
    postalAddress: {
      streetAddress: '123 Đường Lê Lợi',
      addressLocality: 'Hà Nội',
      postalCode: '100000',
      addressCountry: 'VN',
    },
    openingHours: {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '09:00',
      closes: '21:00',
    },
    image: 'https://thanh-huyen-beauty.com/og-image.jpg',
    faqs: [
      {
        question: 'Thanh Huyền Beauty cung cấp những dịch vụ gì?',
        answer:
          'Thanh Huyền Beauty cung cấp các dịch vụ chăm sóc da chuyên nghiệp bao gồm: trị mụn, dưỡng trắng da, chống lão hóa, tẩy tế bào chết, massage mặt, và nhiều dịch vụ spa cao cấp khác.',
      },
      {
        question: 'Địa chỉ của Thanh Huyền Beauty ở đâu?',
        answer:
          'Thanh Huyền Beauty tọa lạc tại 123 Đường Lê Lợi, Hà Nội, Việt Nam. Vui lòng liên hệ số điện thoại +84 123456789 để được tư vấn và đặt lịch.',
      },
      {
        question: 'Thời gian làm việc của Thanh Huyền Beauty?',
        answer:
          'Thanh Huyền Beauty mở cửa từ 9h sáng đến 9h tối, từ thứ Hai đến Chủ Nhật. Chúng tôi phục vụ khách hàng cả ngày lễ và cuối tuần.',
      },
      {
        question: 'Làm thế nào để đặt lịch tại Thanh Huyền Beauty?',
        answer:
          'Bạn có thể đặt lịch tại Thanh Huyền Beauty thông qua website chính thức, gọi điện thoại trực tiếp hoặc nhắn tin qua các kênh mạng xã hội của chúng tôi.',
      },
      {
        question: 'Các sản phẩm tại Thanh Huyền Beauty có chứng nhận an toàn không?',
        answer:
          'Tất cả sản phẩm sử dụng tại Thanh Huyền Beauty đều có chứng nhận an toàn từ Bộ Y tế và các tổ chức quốc tế. Chúng tôi ưu tiên sử dụng các thành phần tự nhiên, lành tính và phù hợp với làn da người Việt.',
      },
    ],
  },
};
