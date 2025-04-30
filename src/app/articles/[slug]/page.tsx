import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { getArticleBySlug, articles, formatArticleContent } from '@/lib/articles';

// Calculate reading time for an article
const calculateReadingTime = (content: string): number => {
  // Average reading speed (words per minute)
  const wordsPerMinute = 225;
  // Count the number of words in the content (roughly)
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  // Calculate reading time in minutes
  return Math.ceil(wordCount / wordsPerMinute);
};

const articleStyles = {
  firstParagraph: 'text-xl font-medium text-gray-900 mb-8 leading-relaxed',
  emphasis: 'font-semibold text-gray-900',
  heading: 'text-2xl font-bold text-gray-900 mt-10 mb-6',
  subheading: 'text-xl font-bold text-gray-900 mt-8 mb-4',
  paragraph: 'mb-6 text-gray-700 leading-relaxed',
  list: 'mb-8 mt-4 space-y-2',
  listItem: 'flex items-start',
  listBullet: 'text-red-700 font-bold mr-2',
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
      description: 'The requested article could not be found.',
    };
  }
  
  return {
    title: `${article.title} | N. Lee Plumb for Congress`,
    description: article.description,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }
  
  // Format the article content with our helper function
  const formattedContent = formatArticleContent(article.content);
  
  // Calculate reading time
  const readingTime = calculateReadingTime(article.content);
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <img
              src={article.imagePath}
              alt={article.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900/90" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center">
                <article.icon className="h-6 w-6 text-red-500" />
                <p className="ml-2 text-sm font-medium text-red-400">{article.category}</p>
              </div>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {article.title}
              </h3>
              <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                {article.excerpt}
              </p>
            </div>
          </div>
        </div>
        <div className="relative py-24 px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-x-4 text-xs mb-8">
              <time dateTime={article.date} className="text-gray-100">
                {article.date}
              </time>
              <span className="relative z-10 rounded-full bg-red-700 px-3 py-1.5 font-medium text-white">
                {article.category}
              </span>
              <span className="relative z-10 text-gray-100">
                {readingTime} min read
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {article.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              {article.description}
            </p>
            <div className="mt-8">
              <Link
                href="/articles"
                className="inline-flex items-center text-base font-semibold text-white hover:text-gray-200"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back to Articles
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-16">
        <div 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: formattedContent }}
        />
        
        {/* Author Card */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <div className="flex items-center">
            <div className="h-16 w-16 rounded-full overflow-hidden">
              <Image 
                src="/images/professional/candidate.jpg"
                alt="N. Lee Plumb"
                width={64}
                height={64}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="ml-6">
              <p className="text-sm font-medium text-gray-900">Written by</p>
              <h3 className="text-xl font-bold text-gray-900">N. Lee Plumb</h3>
              <p className="text-base text-gray-500">Candidate for Congress</p>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">More Articles</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2">
            {articles
              .filter(a => a.id !== article.id)
              .slice(0, 2)
              .map((relatedArticle) => (
                <div key={relatedArticle.id} className="group relative">
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={relatedArticle.imagePath}
                      alt={relatedArticle.title}
                      className="h-full w-full object-cover group-hover:opacity-75"
                      width={500}
                      height={280}
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    <Link href={`/articles/${relatedArticle.slug}`}>
                      <span className="absolute inset-0" />
                      {relatedArticle.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 line-clamp-2">{relatedArticle.excerpt}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 