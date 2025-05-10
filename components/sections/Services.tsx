'use client';

import Image from 'next/image';
import Link from 'next/link';

import { faArrowRight, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

const ServiceCard = ({ title, description, price, imageUrl }: ServiceCardProps) => {
  return (
    <div className="service-card overflow-hidden rounded-xl bg-white shadow-md transition duration-300">
      <div
        className="flex h-48 items-center justify-center"
        style={{
          background: 'linear-gradient(to right, var(--tertiary), var(--secondary))',
        }}
      >
        <Image
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
          width={400}
          height={300}
        />
      </div>
      <div className="p-6">
        <h3
          className="mb-2 font-serif text-xl font-semibold"
          style={{ color: 'var(--text-primary-dark)' }}
        >
          {title}
        </h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>
            {price}
          </span>
          <Link
            href="#booking"
            className="flex items-center text-sm font-medium hover:text-opacity-80 transition"
            style={{ color: 'var(--text-secondary)' }}
          >
            Đặt lịch <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Trị Mụn Chuyên Sâu',
      description:
        'Liệu trình đặc biệt giúp loại bỏ mụn tận gốc, giảm viêm sưng và ngăn ngừa mụn tái phát.',
      price: 'Từ 500.000đ',
      imageUrl:
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=730&q=80',
    },
    {
      title: 'Tái Tạo Da Sinh Học',
      description:
        'Phục hồi làn da hư tổn, kích thích tái tạo tế bào mới cho làn da căng mịn, trắng sáng.',
      price: 'Từ 800.000đ',
      imageUrl:
        'https://images.unsplash.com/photo-1556228579-6d9c2c8c6949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      title: 'Chống Lão Hóa Premium',
      description:
        'Giảm nếp nhăn, cải thiện độ đàn hồi, làm chậm quá trình lão hóa với công nghệ RF hiện đại.',
      price: 'Từ 1.200.000đ',
      imageUrl:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed7d3fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    },
    {
      title: 'Dưỡng Trắng Hoàn Hảo',
      description:
        'Làm sáng da từ sâu bên trong, đều màu da, giảm thâm nám với tinh chất thiên nhiên quý giá.',
      price: 'Từ 700.000đ',
      imageUrl:
        'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
    {
      title: 'Chăm Sóc Da Nhạy Cảm',
      description:
        'Dịu nhẹ, phục hồi hàng rào bảo vệ da, giảm kích ứng, đỏ da cho làn da nhạy cảm nhất.',
      price: 'Từ 600.000đ',
      imageUrl:
        'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    },
    {
      title: 'Cân Bằng Da Dầu',
      description:
        'Kiểm soát dầu nhờn, thu nhỏ lỗ chân lông, ngăn ngừa mụn cho làn da dầu khỏe mạnh.',
      price: 'Từ 550.000đ',
      imageUrl:
        'https://images.unsplash.com/photo-1599351430140-c70f0250bd70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    },
  ];

  return (
    <section id="services" className="py-20" style={{ backgroundColor: 'var(--tertiary)' }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4 inline-block font-serif text-3xl font-bold">
            Dịch Vụ Chăm Sóc Da
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            Các liệu trình chăm sóc da chuyên sâu được thiết kế riêng cho từng loại da và vấn đề cụ
            thể
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              price={service.price}
              imageUrl={service.imageUrl}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="#pricing"
            className="btn-primary inline-flex items-center rounded-full px-8 py-3 font-medium transition duration-300"
          >
            <FontAwesomeIcon icon={faTags} className="mr-2" /> Xem bảng giá đầy đủ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
