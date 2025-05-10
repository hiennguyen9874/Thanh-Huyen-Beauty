import Script from 'next/script';

export default function FaqStructuredData() {
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Thanh Huyền Beauty cung cấp những dịch vụ gì?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Thanh Huyền Beauty cung cấp các dịch vụ chăm sóc da chuyên nghiệp bao gồm: trị mụn, dưỡng trắng da, chống lão hóa, tẩy tế bào chết, massage mặt, và nhiều dịch vụ spa cao cấp khác.',
        },
      },
      {
        '@type': 'Question',
        name: 'Địa chỉ của Thanh Huyền Beauty ở đâu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Thanh Huyền Beauty tọa lạc tại 123 Đường Lê Lợi, Hà Nội, Việt Nam. Vui lòng liên hệ số điện thoại +84 123456789 để được tư vấn và đặt lịch.',
        },
      },
      {
        '@type': 'Question',
        name: 'Thời gian làm việc của Thanh Huyền Beauty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Thanh Huyền Beauty mở cửa từ 9h sáng đến 9h tối, từ thứ Hai đến Chủ Nhật. Chúng tôi phục vụ khách hàng cả ngày lễ và cuối tuần.',
        },
      },
      {
        '@type': 'Question',
        name: 'Làm thế nào để đặt lịch tại Thanh Huyền Beauty?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bạn có thể đặt lịch tại Thanh Huyền Beauty thông qua website chính thức, gọi điện thoại trực tiếp hoặc nhắn tin qua các kênh mạng xã hội của chúng tôi.',
        },
      },
      {
        '@type': 'Question',
        name: 'Các sản phẩm tại Thanh Huyền Beauty có chứng nhận an toàn không?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tất cả sản phẩm sử dụng tại Thanh Huyền Beauty đều có chứng nhận an toàn từ Bộ Y tế và các tổ chức quốc tế. Chúng tôi ưu tiên sử dụng các thành phần tự nhiên, lành tính và phù hợp với làn da người Việt.',
        },
      },
    ],
  };

  return (
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
    />
  );
}
