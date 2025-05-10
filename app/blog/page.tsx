import Image from 'next/image';
import Link from 'next/link';

import { faCalendar, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { blogPosts } from '@/config/blog';

export default function BlogPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1
          className="mb-12 text-center font-serif text-4xl font-bold"
          style={{ color: 'var(--text-primary-dark)' }}
        >
          Blog Làm Đẹp
        </h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              </Link>

              <div className="p-6">
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={faFolder} className="mr-2" />
                    {post.category}
                  </span>
                  <span className="flex items-center">
                    <FontAwesomeIcon icon={faCalendar} className="mr-2" />
                    {post.date}
                  </span>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2
                    className="mb-3 font-serif text-xl font-semibold transition-colors hover:text-primary"
                    style={{ color: 'var(--text-primary-dark)' }}
                  >
                    {post.title}
                  </h2>
                </Link>

                <p className="mb-4 text-gray-600">{post.excerpt}</p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-sm font-medium transition-colors hover:text-primary"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Đọc tiếp →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
