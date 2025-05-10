import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { faArrowLeft, faCalendar, faFolder } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { blogPosts } from '@/config/blog';

type Params = Promise<{ slug: string }>;

export default async function BlogPost({ params }: { params: Params }) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center text-sm font-medium transition-colors hover:text-primary"
          style={{ color: 'var(--text-primary)' }}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Quay lại Blog
        </Link>

        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
          <div className="h-[400px] relative">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>

          <div className="p-8">
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

            <h1
              className="mb-6 font-serif text-3xl font-bold"
              style={{ color: 'var(--text-primary-dark)' }}
            >
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none">
              {post.content?.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
