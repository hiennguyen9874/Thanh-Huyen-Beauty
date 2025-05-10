'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { faArrowRight, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  delay?: number;
}

const BlogCard = ({ image, category, date, title, excerpt, delay = 0 }: BlogCardProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const slug = title.toLowerCase().replace(/\s+/g, '-');
  return (
    <div
      className={`blog-card overflow-hidden rounded-xl bg-white shadow-md
      transition-all duration-300 hover:shadow-lg hover:-translate-y-2
      transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 hover:scale-110"
          width={400}
          height={300}
        />
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center text-sm text-gray-500">
          <span>{category}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
        <h3
          className="mb-3 font-serif text-xl font-semibold"
          style={{ color: 'var(--text-primary-dark)' }}
        >
          {title}
        </h3>
        <p className="mb-4 text-gray-600">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="flex items-center text-sm font-medium transition-all duration-300 hover:translate-x-1"
          style={{ color: 'var(--text-primary)' }}
        >
          Đọc tiếp <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

const Blog = () => {
  const blogPosts = [
    {
      image:
        'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=730&q=80',
      category: 'Chăm sóc da',
      date: '15/06/2023',
      title: '5 Sai Lầm Khi Trị Mụn Tại Nhà',
      excerpt:
        'Những thói quen tưởng chừng vô hại nhưng lại khiến tình trạng mụn trở nên tồi tệ hơn.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1570172619644-dfd03ed7d3fd?q=80&w=1170&auto=format&fit=crop',
      category: 'Chống lão hóa',
      date: '02/06/2023',
      title: 'Bí Quyết Trẻ Hóa Da Sau Tuổi 30',
      excerpt: 'Các bước chăm sóc da cơ bản nhưng hiệu quả để làm chậm quá trình lão hóa.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      category: 'Dưỡng trắng',
      date: '20/05/2023',
      title: 'Cách Dưỡng Trắng Da An Toàn Mùa Hè',
      excerpt:
        'Bật mí các nguyên liệu thiên nhiên giúp dưỡng trắng da hiệu quả mà không gây kích ứng.',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4 inline-block font-serif text-3xl font-bold">
            Kiến Thức Làm Đẹp
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            Chia sẻ kiến thức chăm sóc da từ các chuyên gia của Thanh Huyền Beauty
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              category={post.category}
              date={post.date}
              title={post.title}
              excerpt={post.excerpt}
              delay={100 * (index + 1)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="btn-primary inline-flex items-center rounded-full px-8 py-3 font-medium transition duration-300 hover:scale-105"
          >
            <FontAwesomeIcon icon={faBookOpen} className="mr-2" /> Xem tất cả bài viết
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
