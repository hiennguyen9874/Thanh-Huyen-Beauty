'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faLeaf, faMagic, faSpa, faWater } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PricingTierProps {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  isPrimary?: boolean;
  delay?: number;
}

const PricingTier = ({
  title,
  subtitle,
  price,
  features,
  isPopular = false,
  isPrimary = false,
  delay = 0,
}: PricingTierProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`${isPrimary ? 'shadow-md' : 'shadow-sm'}
      rounded-xl p-8
      relative overflow-hidden transition-all duration-300
      hover:shadow-lg hover:-translate-y-2
      transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      style={{
        backgroundColor: isPrimary ? 'var(--secondary)' : 'var(--tertiary)',
        transitionDelay: `${delay}ms`,
      }}
    >
      {isPopular && (
        <div
          className="absolute top-0 right-0 rounded-bl-lg px-4 py-1 text-xs font-bold text-white"
          style={{ backgroundColor: 'var(--text-primary)' }}
        >
          PHỔ BIẾN
        </div>
      )}
      <div className="mb-6 text-center">
        <h3
          className="mb-2 font-serif text-xl font-semibold"
          style={{ color: 'var(--text-primary-dark)' }}
        >
          {title}
        </h3>
        <p className="mb-4 text-gray-600">{subtitle}</p>
        <div className="text-3xl font-bold" style={{ color: 'var(--text-secondary)' }}>
          {price}
        </div>
      </div>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <FontAwesomeIcon
              icon={faCheck}
              className="mt-1 mr-3"
              style={{
                color: isPrimary ? 'var(--primary-dark)' : 'var(--primary-dark)',
              }}
            />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-center">
        <Link
          href="#booking"
          className={`inline-block px-6 py-2 rounded-full font-medium transition duration-300 hover:scale-105 ${
            isPrimary ? 'btn-primary' : 'btn-secondary'
          }`}
          style={{ backgroundColor: isPrimary ? 'var(--primary)' : 'white' }}
        >
          Đặt lịch ngay
        </Link>
      </div>
    </div>
  );
};

interface SpecialServiceProps {
  icon: IconDefinition;
  title: string;
  price: string;
  index?: number;
}

const SpecialService = ({ icon, title, price, index = 0 }: SpecialServiceProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setIsVisible(true);
      },
      700 + index * 100,
    );

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`flex items-start transition-all duration-300 p-3 rounded-lg transform hover:bg-opacity-50 hover:shadow-sm ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
      style={{
        transitionDelay: `${100 * index}ms`,
      }}
    >
      <div
        className="mt-1 mr-4 flex h-10 w-10 items-center justify-center rounded-full"
        style={{ backgroundColor: 'var(--primary)' }}
      >
        <FontAwesomeIcon icon={icon} style={{ color: 'var(--text-primary)' }} />
      </div>
      <div>
        <h4 className="font-semibold text-gray-700">{title}</h4>
        <p className="text-sm text-gray-600">{price}</p>
      </div>
    </div>
  );
};

const Pricing = () => {
  const basicFeatures = [
    'Tẩy trang & làm sạch sâu',
    'Tẩy tế bào chết',
    'Xông hơi & hút mụn cơ bản',
    'Đắp mặt nạ dưỡng ẩm',
    'Massage mặt thư giãn',
  ];

  const premiumFeatures = [
    'Tất cả dịch vụ trong gói cơ bản',
    'Hút mụn chuyên sâu',
    'Lăn kim hoặc phi kim',
    'Điện di tinh chất cao cấp',
    'Chiếu ánh sáng sinh học',
    'Mặt nạ vàng 24K',
  ];

  const vipFeatures = [
    'Tất cả dịch vụ trong gói Premium',
    'Trị liệu bằng tế bào gốc',
    'Công nghệ RF trẻ hóa da',
    'Liệu trình cá nhân hóa',
    'Sản phẩm chăm sóc tại nhà',
    'Tư vấn dinh dưỡng da',
  ];

  const specialServices = [
    {
      icon: faSpa,
      title: 'Trị Nám Tận Gốc',
      price: 'Liệu trình 6-8 buổi: 8.000.000đ - 12.000.000đ',
    },
    {
      icon: faLeaf,
      title: 'Trị Sẹo Rỗ',
      price: 'Liệu trình 4-6 buổi: 6.000.000đ - 9.000.000đ',
    },
    {
      icon: faWater,
      title: 'Căng Bóng Da',
      price: 'Liệu trình 3 buổi: 4.500.000đ - 6.000.000đ',
    },
    {
      icon: faMagic,
      title: 'Trẻ Hóa Da',
      price: 'Liệu trình 5 buổi: 7.500.000đ - 10.000.000đ',
    },
  ];

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4 inline-block font-serif text-3xl font-bold">
            Bảng Giá Dịch Vụ
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            Giá dịch vụ có thể thay đổi tùy theo tình trạng da và nhu cầu cá nhân của khách hàng
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <PricingTier
            title="Gói Cơ Bản"
            subtitle="Phù hợp với chăm sóc da định kỳ"
            price="500.000đ - 800.000đ"
            features={basicFeatures}
            delay={100}
          />

          <PricingTier
            title="Gói Premium"
            subtitle="Chăm sóc da chuyên sâu"
            price="1.200.000đ - 1.800.000đ"
            features={premiumFeatures}
            isPopular={true}
            isPrimary={true}
            delay={300}
          />

          <PricingTier
            title="Gói VIP"
            subtitle="Trải nghiệm cao cấp nhất"
            price="2.500.000đ - 4.000.000đ"
            features={vipFeatures}
            delay={500}
          />
        </div>

        <div
          className="mt-12 transform rounded-xl p-8 shadow-sm transition-all duration-300 hover:shadow-md"
          style={{ backgroundColor: 'var(--tertiary)' }}
        >
          <h3
            className="mb-6 text-center font-serif text-xl font-semibold"
            style={{ color: 'var(--text-primary-dark)' }}
          >
            Dịch Vụ Đặc Biệt
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {specialServices.map((service, index) => (
              <SpecialService
                key={index}
                icon={service.icon}
                title={service.title}
                price={service.price}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
