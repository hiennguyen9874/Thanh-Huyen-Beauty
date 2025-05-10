'use client';

import ScrollAnimation from '../layout/ScrollAnimation';
import TestimonialCarousel from '../layout/TestimonialCarousel';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: 'https://randomuser.me/api/portraits/women/32.jpg',
      name: 'Chị Ngọc Anh',
      role: 'Khách hàng thường xuyên',
      rating: 5,
      content:
        'Tôi đã trị mụn ở nhiều nơi nhưng không hiệu quả. Sau 2 tháng tại Thanh Huyền Beauty, da mặt tôi đã sạch mụn hoàn toàn. Chuyên viên rất tận tâm, spa sạch sẽ và thơm tho.',
    },
    {
      id: 2,
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: 'Chị Minh Châu',
      role: 'Doanh nhân',
      rating: 5,
      content:
        'Liệu trình chống lão hóa tại đây thực sự hiệu quả. Sau 4 buổi, các nếp nhăn đã giảm rõ rệt, da căng mịn hơn hẳn. Mình sẽ tiếp tục đồng hành cùng Thanh Huyền Beauty.',
    },
    {
      id: 3,
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      name: 'Chị Thu Hà',
      role: 'Giáo viên',
      rating: 4.5,
      content:
        'Da mình thuộc loại nhạy cảm nên rất kén chọn spa. Thanh Huyền Beauty đã giúp mình cải thiện tình trạng đỏ và kích ứng da. Cảm ơn đội ngũ chuyên viên rất nhiều!',
    },
    {
      id: 4,
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      name: 'Chị Thùy Linh',
      role: 'Nhân viên văn phòng',
      rating: 5,
      content:
        'Dịch vụ massage thư giãn tại đây quá tuyệt vời! Mình thấy thực sự được chăm sóc và lắng nghe. Không gian yên tĩnh, sạch sẽ và chuyên viên rất chuyên nghiệp.',
    },
    {
      id: 5,
      image: 'https://randomuser.me/api/portraits/women/54.jpg',
      name: 'Chị Thanh Thảo',
      role: 'Tiếp viên hàng không',
      rating: 4.5,
      content:
        'Mình đã làm liệu trình trắng da tại Thanh Huyền và rất hài lòng với kết quả. Da sáng đều màu và không bị kích ứng như ở những nơi khác mình từng thử.',
    },
  ];

  return (
    <section id="testimonials" className="py-20" style={{ backgroundColor: 'var(--tertiary)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation variant="fadeUp">
          <div className="mb-16 text-center">
            <h2 className="section-title mb-4 inline-block font-serif text-3xl font-bold">
              Cảm Nhận Của Khách Hàng
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              Những chia sẻ chân thực từ khách hàng đã trải nghiệm dịch vụ tại Thanh Huyền Beauty
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation variant="fadeUp" delay={0.2}>
          <div className="mx-auto max-w-4xl">
            <TestimonialCarousel testimonials={testimonials} autoplay={true} interval={6000} />
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Testimonials;
