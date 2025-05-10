'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { faArrowRight, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { blogPosts } from '@/config/blog';

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

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  return (
    <div
      className={`blog-card overflow-hidden rounded-xl bg-white shadow-md
      transition-all duration-300 hover:shadow-lg hover:-translate-y-2
      transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Link href={`/blog/${slug}`}>
        <div className="h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 hover:scale-110"
            width={400}
            height={300}
          />
        </div>
      </Link>
      <div className="flex h-full flex-col p-6">
        <div className="mb-3 flex items-center text-sm text-gray-500">
          <span>{category}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
        <Link href={`/blog/${slug}`}>
          <h3
            className="mb-3 font-serif text-xl font-semibold transition-colors hover:text-primary"
            style={{ color: 'var(--text-primary-dark)' }}
          >
            {title}
          </h3>
        </Link>
        <p className="mb-4 text-gray-600">{excerpt}</p>
        <div className="mt-auto">
          <Link
            href={`/blog/${slug}`}
            className="flex items-center text-sm font-medium transition-all duration-300 hover:translate-x-1"
            style={{ color: 'var(--text-primary)' }}
          >
            Đọc tiếp <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
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
