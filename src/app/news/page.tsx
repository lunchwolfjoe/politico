import Image from 'next/image';
import Link from 'next/link';
import { imagePaths } from '@/lib/image-paths';
import { 
  MegaphoneIcon,
  PhoneIcon,
  DocumentTextIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const newsItems = [
  {
    title: "JAG Corps Veteran Announces Congressional Run with Tech-Driven Platform",
    date: "April 25, 2025",
    category: "Press Release",
    description: "Former Army and Navy JAG Corps veteran and Amazon tech executive launches congressional campaign focused on bringing military discipline and Silicon Valley innovation to Washington.",
    icon: MegaphoneIcon,
    link: "/news/campaign-launch",
    image: imagePaths.general.digitalPlatform
  },
  {
    title: "Fiscal Responsibility Through Veterans Leadership",
    date: "May 10, 2025",
    category: "Policy Paper",
    description: "New policy paper outlines how military leadership principles can transform government spending and bring fiscal discipline to Washington. Learn how veterans' experience creates accountability.",
    icon: DocumentTextIcon,
    link: "/news/fiscal-policy",
    image: imagePaths.platform.fiscal
  },
  {
    title: "Veterans For Responsible Government Coalition Announces Support",
    date: "May 15, 2025",
    category: "Endorsement",
    description: "A coalition of veterans organizations endorses campaign platform focused on fiscal discipline and responsible governance learned through military service.",
    icon: UserGroupIcon,
    link: "/news/veterans-coalition",
    image: imagePaths.professional.veteranLeadership
  }
];

const featuredNews = newsItems[0];
const recentNews = newsItems.slice(1);
const allNews = newsItems;

export default function NewsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/personal/merica.jpg"
            alt="Campaign press conference"
            className="h-full w-full object-cover brightness-75"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-red-900/50 mix-blend-multiply" />
        </div>
        <div className="relative py-24 px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Campaign News
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              Stay informed about our campaign, policy positions, and upcoming events.
            </p>
          </div>
        </div>
      </div>

      {/* Featured News */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-red-700">Latest News</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the Campaign Trail
          </p>
          <p className="mt-3 text-lg text-gray-600">
            Campaign updates, policy announcements, and endorsements from our campaign.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:col-span-7">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-gray-100">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                className="h-full w-full object-cover"
                width={1200}
                height={675}
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="mt-8 flex items-center gap-x-4 text-xs">
              <time dateTime="2025-04-25" className="text-gray-500">
                {featuredNews.date}
              </time>
              <span className="relative z-10 rounded-full bg-red-700 px-3 py-1.5 font-medium text-white">
                {featuredNews.category}
              </span>
            </div>
            <h3 className="mt-3 text-2xl font-bold leading-8 tracking-tight text-gray-900">
              {featuredNews.title}
            </h3>
            <p className="mt-5 text-base leading-7 text-gray-600">
              {featuredNews.description}
            </p>
            <div className="mt-8">
              <Link
                href={featuredNews.link}
                className="text-base font-semibold leading-6 text-red-700"
              >
                Read full story <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                Press Contact
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                For media inquiries, please contact our press team:
              </p>
              <ul className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <PhoneIcon className="mt-1 h-5 w-5 flex-none text-red-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Phone:</strong> (832) 422-7109
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="mt-1 h-5 w-5 flex-none text-red-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Email:</strong> info@nleeplumb.com
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg className="mt-1 h-5 w-5 flex-none text-red-700" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Address:</strong> 21175 State Hwy 249, Ste. 272, Houston, TX 77070-1655
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Recent News Items */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent Updates</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Stay informed with our latest policy papers and endorsements
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {recentNews.map((item) => (
              <article key={item.title} className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-32 sm:pt-64 lg:pt-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 -z-10 h-full w-full object-cover"
                  width={500}
                  height={300}
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <time dateTime={item.date} className="mr-8">
                    {item.date}
                  </time>
                  <div className="-ml-4 flex items-center gap-x-4">
                    <span className="inline-flex items-center rounded-full bg-red-700 px-3 py-1 text-sm font-medium text-white">
                      {item.category}
                    </span>
                  </div>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                  <Link href={item.link}>
                    <span className="absolute inset-0" />
                    {item.title}
                  </Link>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 