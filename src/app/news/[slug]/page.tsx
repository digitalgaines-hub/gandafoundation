import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

const contentDir = path.join(process.cwd(), 'content', 'news');

export async function generateStaticParams() {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => ({ slug: f.replace('.mdx', '') }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return {};
  const { data } = matter(fs.readFileSync(filePath, 'utf-8'));
  return {
    title: data.title,
    description: data.excerpt,
  };
}

export default async function NewsPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center hero-gradient" style={{ minHeight: '30vh' }}>
        <div className="absolute inset-0 bg-brand-dark/30" />
        <div className="relative z-10 text-center text-white px-4 py-32">
          <time className="text-sm text-white/80 font-medium">
            {new Date(data.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">{data.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="mx-auto max-w-[720px]">
          <article className="prose prose-lg prose-gray max-w-none prose-headings:text-brand-dark prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline">
            <MDXRemote source={content} />
          </article>
          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/news" className="text-brand-blue font-semibold hover:underline">
              &larr; Back to News
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
