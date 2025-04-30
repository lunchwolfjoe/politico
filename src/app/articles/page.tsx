import Image from 'next/image';
import Link from 'next/link';
import { articles } from '@/lib/articles';
import { formatDate } from '@/lib/utils';
import { ClockIcon } from '@heroicons/react/24/outline';

// Calculate reading time for an article
const calculateReadingTime = (content: string): number => {
  const wordsPerMinute = 225;
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

export const metadata = {
  title: 'Articles | N. Lee Plumb for Congress',
  description: 'Read opinion pieces and policy discussions from N. Lee Plumb, candidate for Congress.',
}

export default function ArticlesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <div className="h-full w-full overflow-hidden">
            <img
              src="/images/personal/merica.jpg"
              alt="Policy articles"
              className="h-full w-full object-cover"
              style={{ 
                maxHeight: "100%", 
                objectPosition: "center 10%"
              }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-800/70 mix-blend-multiply" />
        </div>

        {/* Hero content */}
        <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Policy Articles
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              In-depth discussions on the issues that matter to America and our district.
            </p>
          </div>
        </div>
      </div>

      {/* Articles List */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-red-700">Latest Articles</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Thoughtful analysis and policy proposals from N. Lee Plumb.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 overflow-hidden">
                  <img
                    src={article.imagePath}
                    alt={article.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900/90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-x-2">
                      <article.icon className="h-5 w-5 text-red-500" />
                      <span className="text-sm font-medium text-red-400">{article.category}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-white line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={article.date} className="text-gray-500">
                    {article.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                    {article.category}
                  </span>
                </div>
                <div className="group relative">
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {article.excerpt}
                  </p>
                </div>
                <div className="mt-4">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="text-sm font-semibold leading-6 text-red-700"
                  >
                    Read article <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
} 