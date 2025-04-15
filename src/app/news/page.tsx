import Image from 'next/image';
import Link from 'next/link';
import { imagePaths } from '@/lib/image-paths';
import { 
  NewspaperIcon, 
  MegaphoneIcon, 
  CalendarIcon,
  ShieldCheckIcon,
  BuildingOffice2Icon,
  DocumentTextIcon,
  VideoCameraIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const newsItems = [
  {
    title: "JAG Corps Veteran Announces Congressional Run with Tech-Driven Platform",
    date: "April 1, 2024",
    category: "Press Release",
    description: "Former Army and Navy JAG Corps veteran and Amazon tech executive launches congressional campaign focused on bringing military discipline and Silicon Valley innovation to Washington.",
    icon: MegaphoneIcon,
    link: "/news/campaign-launch",
    image: imagePaths.general.digitalPlatform
  },
  {
    title: "From Battlefield to Boardroom: A Conversation with Our Candidate",
    date: "March 25, 2024",
    category: "Media Coverage",
    description: "National media spotlight on our candidate's journey from Iraq and Guantanamo Bay deployments to leadership roles at Walmart and Amazon, showcasing his unique qualifications for Congress.",
    icon: NewspaperIcon,
    link: "/news/battlefield-to-boardroom",
    image: imagePaths.professional.veteranLeadership
  },
  {
    title: "Upcoming Town Hall: Tech Solutions for Government Efficiency",
    date: "April 10, 2024",
    category: "Event",
    description: "Join us for a special town hall where our candidate will discuss how his experience at Amazon's IDEA team can help bring private sector efficiency to government operations.",
    icon: CalendarIcon,
    link: "/news/tech-solutions-town-hall",
    image: imagePaths.volunteer.townHall
  },
  {
    title: "Veterans Coalition Endorses Candidate's America First Agenda",
    date: "March 20, 2024",
    category: "Endorsement",
    description: "Major veterans organization announces support, citing the candidate's distinguished military service in both Army and Navy JAG Corps and his continued advocacy for veteran affairs.",
    icon: ShieldCheckIcon,
    link: "/news/veterans-coalition-endorsement",
    image: imagePaths.professional.veteranLeadership
  },
  {
    title: "Business Leaders Rally Behind Campaign's Economic Vision",
    date: "March 15, 2024",
    category: "Endorsement",
    description: "Prominent business leaders praise the candidate's corporate experience at Walmart and Amazon, endorsing his plan to bring fiscal discipline and innovation to government.",
    icon: BuildingOffice2Icon,
    link: "/news/business-leaders-endorsement",
    image: imagePaths.professional.techEndorsement
  },
  {
    title: "Digital Defense: New Policy Paper on Cybersecurity Strategy",
    date: "March 10, 2024",
    category: "Policy",
    description: "Campaign releases comprehensive policy paper on national cybersecurity, drawing on candidate's unique background in both military security operations and tech leadership.",
    icon: DocumentTextIcon,
    link: "/news/cybersecurity-policy",
    image: imagePaths.platform.cybersecurity
  },
  {
    title: "Watch: Fox News Interview on Military Leadership in Politics",
    date: "March 5, 2024",
    category: "Media",
    description: "Candidate discusses how military service provides crucial leadership training for public office, highlighting experiences from Iraq deployment and JAG Corps service.",
    icon: VideoCameraIcon,
    link: "/news/fox-interview",
    image: imagePaths.professional.veteranLeadership
  },
  {
    title: "Tech Innovation Summit: Building a Stronger America",
    date: "April 15, 2024",
    category: "Event",
    description: "Join industry leaders and our candidate to discuss how technological innovation can help solve America's most pressing challenges while creating new opportunities.",
    icon: CalendarIcon,
    link: "/news/tech-innovation-summit",
    image: imagePaths.general.communityTech
  },
];

const featuredNews = newsItems[0];
const recentNews = newsItems.slice(1, 4);
const allNews = newsItems;

export default function NewsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={imagePaths.news.hero}
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
              Stay informed about our campaign, policy positions, endorsements, and upcoming events.
            </p>
          </div>
        </div>
      </div>

      {/* Featured News */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-red-700">Latest News</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Campaign Launch
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
              <time dateTime="2023-03-16" className="text-gray-500">
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
                Key Campaign Highlights
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-600">
                Our campaign brings a unique perspective to the race, combining military service, legal expertise, corporate leadership, and technological innovation.
              </p>
              <ul className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-red-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Military Leadership.</strong> Served in both Army and Navy JAG Corps with deployments to Iraq and Guantanamo Bay.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <BuildingOffice2Icon className="mt-1 h-5 w-5 flex-none text-red-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Corporate Innovation.</strong> Advanced from Walmart trainee to Amazon executive, bringing business efficiency to government.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <DocumentTextIcon className="mt-1 h-5 w-5 flex-none text-red-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Legal Expertise.</strong> Applied legal expertise in high-stakes environments, from wartime operations to the Texas Department of Licensing and Regulation.
                  </span>
                </li>
              </ul>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="text-base font-semibold leading-6 text-red-700"
                >
                  Learn more about the candidate <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent News */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 bg-gray-50">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-red-700">Recent Coverage</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Latest Updates
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
          {recentNews.map((item) => (
            <article key={item.title} className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                    width={800}
                    height={450}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="absolute left-0 top-0 flex items-center rounded-tl-2xl rounded-br-2xl bg-red-700 py-1.5 px-3">
                  <item.icon className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2023-03-16" className="text-gray-500">
                    {item.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-800">
                    {item.category}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{item.description}</p>
                </div>
                <div className="mt-4">
                  <Link
                    href={item.link}
                    className="text-sm font-semibold leading-6 text-red-700"
                  >
                    Read more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* All News */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-red-700">News Archive</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            All Updates
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
            {allNews.map((item) => (
              <div key={item.title} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                    <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="truncate">{item.title}</span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <div className="flex items-center gap-x-4 text-xs mb-2">
                    <time dateTime="2023-03-16" className="text-gray-500">
                      {item.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-800">
                      {item.category}
                    </span>
                  </div>
                  <p className="flex-auto line-clamp-2">{item.description}</p>
                  <p className="mt-4">
                    <Link
                      href={item.link}
                      className="text-sm font-semibold leading-6 text-red-700"
                    >
                      Read more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 bg-blue-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Join our email list to receive the latest campaign news, event invitations, and updates on our fight to restore American excellence.
          </p>
          <form className="mt-10 flex max-w-md mx-auto gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/30 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 placeholder:text-gray-300"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Press Contact */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-700">Media Inquiries</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Press Contact
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              For media inquiries, interview requests, or press credentials, please contact our communications team.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-8">
              <div className="flex items-center">
                <MegaphoneIcon className="h-6 w-6 text-red-700 mr-2" aria-hidden="true" />
                <span className="text-gray-900">press@campaign.com</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-red-700 mr-2" aria-hidden="true" />
                <span className="text-gray-900">(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 