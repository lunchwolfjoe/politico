import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

// This would typically come from a CMS or database
const newsContent = {
  'campaign-launch': {
    title: "JAG Corps Veteran Announces Congressional Run with Tech-Driven Platform",
    date: "April 1, 2024",
    category: "Press Release",
    description: "Former Army and Navy JAG Corps veteran and Amazon tech executive launches congressional campaign focused on bringing military discipline and Silicon Valley innovation to Washington.",
    content: `
      <p>Today, we are proud to announce the launch of our congressional campaign, bringing together military leadership, legal expertise, and technological innovation to serve the people of Texas.</p>
      
      <h2>A Unique Background</h2>
      <p>Our candidate brings a distinctive combination of experiences that uniquely qualifies them for Congress:</p>
      <ul>
        <li>Military Service: Served in both Army and Navy JAG Corps with deployments to Iraq and Guantanamo Bay</li>
        <li>Legal Expertise: Applied legal knowledge in high-stakes environments, from wartime operations to state government</li>
        <li>Corporate Leadership: Advanced from Walmart trainee to Amazon executive, bringing business efficiency to government</li>
        <li>Tech Innovation: Founding member of Amazon's IDEA team, leading digital transformation initiatives</li>
      </ul>

      <h2>Our Vision</h2>
      <p>We believe in a future where government operates with the efficiency of America's most innovative companies while maintaining the discipline and honor of our military. Our campaign will focus on:</p>
      <ul>
        <li>Modernizing government services through digital transformation</li>
        <li>Strengthening national security and supporting our veterans</li>
        <li>Promoting economic growth and innovation</li>
        <li>Protecting constitutional rights and freedoms</li>
      </ul>

      <h2>Join Our Movement</h2>
      <p>This campaign represents a new approach to public service, combining the best of military discipline, legal expertise, and technological innovation. We invite all Texans who share our vision for a stronger, more efficient government to join our movement.</p>
    `,
    image: "/images/digital-platform.jpg"
  },
  'battlefield-to-boardroom': {
    title: "From Battlefield to Boardroom: A Conversation with Our Candidate",
    date: "March 25, 2024",
    category: "Media Coverage",
    description: "National media spotlight on our candidate's journey from Iraq and Guantanamo Bay deployments to leadership roles at Walmart and Amazon, showcasing his unique qualifications for Congress.",
    content: `
      <p>In an exclusive interview, our candidate shares their remarkable journey from military service to corporate leadership, and now to public service.</p>

      <h2>Military Service</h2>
      <p>"My time in the JAG Corps taught me the importance of discipline, integrity, and mission-focused leadership," the candidate reflects. "Whether serving in Iraq or at Guantanamo Bay, I learned to make critical decisions under pressure while upholding the highest standards of legal and ethical conduct."</p>

      <h2>Corporate Experience</h2>
      <p>The transition from military service to corporate leadership was natural, says the candidate. "At Walmart and Amazon, I found that many of the principles I learned in the military - clear communication, strategic planning, and team leadership - were directly applicable to business success."</p>

      <h2>Vision for Congress</h2>
      <p>"I'm running for Congress because I believe we need leaders who understand both the importance of military strength and the power of technological innovation. My experience in both worlds gives me a unique perspective on how we can make government more efficient and effective."</p>
    `,
    image: "/images/veteran-leadership.jpg"
  },
  // Add more news items here...
};

export default function NewsArticle({ params }: { params: { slug: string } }) {
  const article = newsContent[params.slug as keyof typeof newsContent];

  if (!article) {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Article Not Found</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The article you're looking for doesn't exist. Please check the URL and try again.
            </p>
            <div className="mt-10">
              <Link
                href="/news"
                className="text-base font-semibold leading-6 text-red-700"
              >
                Return to News <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title}
            className="h-full w-full object-cover brightness-75"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/50 mix-blend-multiply" />
        </div>
        <div className="relative py-24 px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-x-4 text-xs mb-8">
              <time dateTime="2024-03-25" className="text-gray-100">
                {article.date}
              </time>
              <span className="relative z-10 rounded-full bg-red-700 px-3 py-1.5 font-medium text-white">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {article.title}
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              {article.description}
            </p>
            <div className="mt-8">
              <Link
                href="/news"
                className="inline-flex items-center text-base font-semibold text-white hover:text-gray-200"
              >
                <ArrowLeftIcon className="h-5 w-5 mr-2" />
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24 sm:py-32">
        <div 
          className="prose prose-lg prose-red mx-auto"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </div>
  );
} 