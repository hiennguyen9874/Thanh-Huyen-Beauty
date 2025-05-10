'use client';

import Image from 'next/image';
import Link from 'next/link';

import { faCheck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ParallaxEffect from '../layout/ParallaxEffect';
import ScrollAnimation from '../layout/ScrollAnimation';

const About = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation variant="fadeUp">
          <div className="mb-16 text-center">
            <h2 className="section-title mb-4 inline-block font-serif text-3xl font-bold">
              Về Thanh Huyền Beauty
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600">
              Chúng tôi mang đến những dịch vụ chăm sóc da cao cấp với tiêu chuẩn chất lượng quốc tế
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex flex-col items-center gap-12 md:flex-row">
          <ParallaxEffect direction="right" offset={20} className="md:w-1/2">
            <ScrollAnimation variant="fadeRight">
              <Image
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                alt="Spa interior"
                className="h-auto w-full rounded-xl shadow-lg"
                width={600}
                height={800}
              />
            </ScrollAnimation>
          </ParallaxEffect>
          <ParallaxEffect direction="left" offset={20} className="md:w-1/2">
            <ScrollAnimation variant="fadeLeft" delay={0.1}>
              <h3
                className="mb-4 font-serif text-2xl font-semibold"
                style={{ color: 'var(--text-primary)' }}
              >
                Tiêu chí của chúng tôi
              </h3>
              <p className="mb-6 text-gray-600">
                Thanh Huyền Beauty tự hào là địa chỉ chăm sóc da uy tín tại Thủ Đức, với phương châm
                &ldquo;Vẻ đẹp tự nhiên - Tôn vinh nét riêng&rdquo;. Chúng tôi cam kết mang đến cho
                khách hàng những trải nghiệm thư giãn tuyệt vời cùng hiệu quả chăm sóc da tối ưu.
              </p>
            </ScrollAnimation>
            <ScrollAnimation variant="fadeLeft" delay={0.2}>
              <ul className="mb-8 space-y-4">
                <li className="flex items-start">
                  <div
                    className="mr-4 flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'var(--secondary)' }}
                  >
                    <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--text-primary)' }} />
                  </div>
                  <span className="flex-1 text-gray-600">
                    Sử dụng mỹ phẩm cao cấp, có nguồn gốc rõ ràng
                  </span>
                </li>
                <li className="flex items-start">
                  <div
                    className="mr-4 flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'var(--secondary)' }}
                  >
                    <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--text-primary)' }} />
                  </div>
                  <span className="flex-1 text-gray-600">
                    Quy trình chuẩn y khoa, an toàn tuyệt đối
                  </span>
                </li>
                <li className="flex items-start">
                  <div
                    className="mr-4 flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'var(--secondary)' }}
                  >
                    <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--text-primary)' }} />
                  </div>
                  <span className="flex-1 text-gray-600">
                    Đội ngũ chuyên viên được đào tạo bài bản
                  </span>
                </li>
                <li className="flex items-start">
                  <div
                    className="mr-4 flex h-8 w-8 items-center justify-center rounded-full"
                    style={{ backgroundColor: 'var(--secondary)' }}
                  >
                    <FontAwesomeIcon icon={faCheck} style={{ color: 'var(--text-primary)' }} />
                  </div>
                  <span className="flex-1 text-gray-600">
                    Không gian sang trọng, thiết bị hiện đại
                  </span>
                </li>
              </ul>
            </ScrollAnimation>
            <ScrollAnimation variant="fadeUp" delay={0.3}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#services"
                  className="btn-secondary rounded-full px-6 py-2 font-medium transition duration-300"
                  style={{ color: 'var(--text-primary)', borderColor: 'var(--text-primary)' }}
                >
                  Xem dịch vụ
                </Link>
                <Link
                  href="#contact"
                  className="btn-tertiary rounded-full px-6 py-2 font-medium transition duration-300"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" /> Địa chỉ
                </Link>
              </div>
            </ScrollAnimation>
          </ParallaxEffect>
        </div>
      </div>
    </section>
  );
};

export default About;
