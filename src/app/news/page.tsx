import type { Metadata } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ScrollAnimation from '@/components/ScrollAnimation';

export const metadata: Metadata = {
  title: 'News',
  description: 'News and updates from G&A Foundation about behavioral health services in the Bluegrass region.',
};

interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

function getPosts(): PostMeta[] {
  const dir = path.join(process.cwd(), 'content', 'news');
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const { data } = matter(raw);
    return {
      slug: file.replace('.mdx', ''),
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
    };
  });
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export default function NewsPage() {
  const posts = getPosts();

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center hero-gradient" style={{ minHeight: '40vh' }}>
        <div className="absolute inset-0 bg-brand-dark/30" />
        <div className="relative z-10 text-center text-white px-4 py-32">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">News and Updates</h1>
          <p className="text-lg sm:text-xl text-white/90">
            The latest from G&amp;A Foundation
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-4xl">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center">No posts yet. Check back soon!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {posts.map((post) => (
                <ScrollAnimation key={post.slug}>
                  <Link href={`/news/${post.slug}`} className="block group">
                    <article className="bg-brand-light rounded-2xl p-8 border border-gray-100 h-full hover:shadow-md transition-shadow">
                      <time className="text-sm text-gray-500 font-medium">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <h2 className="text-xl font-bold text-brand-dark mt-2 mb-3 group-hover:text-brand-blue transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                      <span className="text-brand-blue font-semibold text-sm">Read More &rarr;</span>
                    </article>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
