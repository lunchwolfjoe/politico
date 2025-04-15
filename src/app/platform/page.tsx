import Image from 'next/image';
import Link from 'next/link';
import { imagePaths } from '@/lib/image-paths';
import { 
  CurrencyDollarIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  HeartIcon,
  RocketLaunchIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';

// Force complete rebuild - updated on May 10, 2024
console.log('Platform page loaded - rebuilt on May 10, 2024');

const issues = [
  {
    id: 'economy',
    title: 'Fiscal Responsibility',
    description: "As someone who's managed both military operations and business budgets at Walmart and Amazon, I understand that every dollar counts. I will bring a tech executive's efficiency and a veteran's discipline to ensure your tax dollars are spent wisely.",
    points: [
      'Zero-based budgeting approach to federal spending',
      'Cutting wasteful government programs through data-driven analysis',
      'Transparent financial reporting using modern technology',
      'Reducing regulatory burdens on small businesses',
      'Supporting a balanced budget amendment'
    ],
    icon: CurrencyDollarIcon,
    image: imagePaths.platform.fiscal,
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Development',
    description: "Modern infrastructure is the backbone of American prosperity. I'll work to ensure our roads, bridges, and digital networks are world-class while maintaining fiscal responsibility.",
    points: [
      'Modernizing transportation infrastructure with smart technology',
      'Expanding broadband access to rural communities',
      'Strengthening energy infrastructure for reliability',
      'Supporting public-private partnerships for efficiency',
      'Prioritizing critical infrastructure security'
    ],
    icon: BuildingOfficeIcon,
    image: imagePaths.platform.infrastructure,
  },
  {
    id: 'economic-growth',
    title: 'American Jobs & Economic Growth',
    description: "The foundation of American prosperity is the ability for citizens to provide for themselves through good-paying jobs. My top priority is ensuring our government fosters an environment where American jobs flourish, which requires comprehensive reform across labor, education, and immigration sectors to stop outsourcing and prioritize our workforce.",
    points: [
      'Implementing policies to stop outsourcing and bring jobs back to America',
      'Reforming labor regulations to support American workers and businesses',
      'Aligning education and vocational training with in-demand job skills (See Education)',
      'Reforming immigration policies to prioritize the American workforce',
      'Reducing regulatory burdens that stifle small business growth and job creation',
      'Championing energy independence to lower costs and create domestic jobs'
    ],
    icon: ChartBarIcon,
    image: imagePaths.platform.economy,
  },
  {
    title: 'Public Safety',
    description: "From the battlefield to cybersecurity, I've spent my career protecting Americans. I'll bring this experience to ensure our communities are safe and secure.",
    points: [
      'Supporting law enforcement with modern resources and training',
      'Strengthening border security through technology and barriers',
      'Combating cyber threats to critical infrastructure',
      'Advocating for veterans in law enforcement careers',
      'Protecting communities from transnational criminal organizations'
    ],
    icon: ShieldCheckIcon,
    image: imagePaths.platform.safety,
  },
  {
    id: 'innovation',
    title: 'Technology & Innovation',
    description: "My experience at Amazon and as a product leader gives me unique insight into how we can leverage technology to solve government challenges and create opportunities for all Americans.",
    points: [
      'Modernizing government services through digital transformation',
      'Protecting data privacy while enabling innovation',
      'Expanding high-speed internet access to rural communities',
      'Supporting STEM education initiatives for tomorrow\'s workforce',
      'Reducing red tape for technology startups and entrepreneurs'
    ],
    icon: RocketLaunchIcon,
    image: imagePaths.platform.cybersecurity,
  },
  {
    title: 'Education',
    description: "Quality education is the foundation of American opportunity. I'll work to ensure all Texans have access to excellent schools that prepare them for success in the 21st century economy.",
    points: [
      'Empowering parents with school choice options',
      'Increasing vocational and technical training programs',
      'Supporting merit-based teacher compensation',
      'Advocating for local control of curriculum',
      'Expanding access to STEM and computer science education'
    ],
    icon: AcademicCapIcon,
    image: imagePaths.platform.education,
  },
  {
    id: 'values',
    title: 'Constitutional Rights',
    description: "As a JAG Corps veteran who took an oath to defend the Constitution multiple times, I will stand firm in protecting all of our constitutional rights from government overreach.",
    points: [
      'Defending Second Amendment rights for law-abiding citizens',
      'Protecting religious liberty and freedom of speech',
      'Appointing constitutionalist judges who interpret, not make, law',
      'Opposing government surveillance of American citizens',
      'Strengthening property rights against government takings'
    ],
    icon: ScaleIcon,
    image: imagePaths.professional.veteranLeadership,
  },
];

export default function PlatformPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={imagePaths.platform.hero}
            alt="Platform vision and American values"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-700/80 to-blue-900/80 mix-blend-multiply" />
        </div>
        <div className="relative px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              America First Platform
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              Combining military discipline, legal expertise, and business innovation to restore American excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Platform Introduction */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-700">My Vision</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Conservative Leadership for a Stronger America
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            My platform is built on the principles that have guided me throughout my military service, 
            legal career, and business leadership: fiscal responsibility, constitutional fidelity, 
            and innovative problem-solving. I believe in an America that is strong, prosperous, and free.
          </p>
        </div>
      </div>

      {/* Issues Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-red-700">Key Issues</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Policy Priorities
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            These key issues reflect my commitment to conservative principles and innovative solutions.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {issues.map((issue) => (
            <article key={issue.title} id={issue.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-gray-100">
                  <Image
                    src={issue.image}
                    alt={issue.title}
                    className="h-full w-full object-cover"
                    width={800}
                    height={450}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="absolute left-0 top-0 w-10 h-10 bg-red-700 flex items-center justify-center rounded-br-xl rounded-tl-xl">
                  <issue.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2023-03-16" className="text-gray-500">
                    Priority
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {issue.title}
                  </h3>
                  <p className="mt-5 text-base leading-6 text-gray-600">{issue.description}</p>
                </div>
                <div className="mt-6">
                  <ul className="space-y-3">
                    {issue.points.map((point, index) => (
                      <li key={index} className="flex gap-x-3">
                        <span className="text-red-700 font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Core Principles */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 mt-12 bg-gray-50">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-700">Guiding Principles</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            America First. Always.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            These fundamental principles guide every policy position and decision I make, ensuring consistency and fidelity to our shared conservative values.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-sm">
              <div className="relative h-48 w-full">
                <Image
                  src={imagePaths.personal.merica}
                  alt="Constitutional Fidelity"
                  className="h-full w-full object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900/70"></div>
                <div className="absolute bottom-0 left-0 p-4 flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                    <ScaleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="ml-3 text-lg font-semibold text-white">Constitutional Fidelity</span>
                </div>
              </div>
              <div className="flex-1 p-6 bg-white">
                <p className="text-base leading-7 text-gray-600">
                  I believe our Constitution is not a living document but an enduring covenant that must be protected and preserved in its original meaning and intent.
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-sm">
              <div className="relative h-48 w-full">
                <Image
                  src={imagePaths.platform.fiscal}
                  alt="Limited Government"
                  className="h-full w-full object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900/70"></div>
                <div className="absolute bottom-0 left-0 p-4 flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                    <CurrencyDollarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="ml-3 text-lg font-semibold text-white">Limited Government</span>
                </div>
              </div>
              <div className="flex-1 p-6 bg-white">
                <p className="text-base leading-7 text-gray-600">
                  The best government is that which governs least. I believe in reducing the size, scope, and reach of the federal government in our daily lives.
                </p>
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-sm">
              <div className="relative h-48 w-full">
                <Image
                  src={imagePaths.professional.veteranLeadership}
                  alt="Strong National Defense"
                  className="h-full w-full object-cover"
                  fill
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900/70"></div>
                <div className="absolute bottom-0 left-0 p-4 flex items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                    <ShieldCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="ml-3 text-lg font-semibold text-white">Strong National Defense</span>
                </div>
              </div>
              <div className="flex-1 p-6 bg-white">
                <p className="text-base leading-7 text-gray-600">
                  As a veteran, I believe America must maintain the strongest, most lethal fighting force in the world to protect our interests and deter our adversaries.
                </p>
              </div>
            </div>
          </dl>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src={imagePaths.general.platformCta}
            alt="American flag"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-red-700/70 mix-blend-multiply" />
        </div>
        <div className="relative py-24 px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join Our Conservative Movement
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              Together, we can restore American greatness, protect our Constitution, and secure a prosperous future for our children and grandchildren.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/volunteer"
                className="rounded-md bg-white px-5 py-3 text-base font-semibold text-red-700 shadow-sm hover:bg-gray-100"
              >
                Get Involved
              </Link>
              <Link
                href="/donate"
                className="rounded-md border border-white px-5 py-3 text-base font-semibold text-white hover:bg-white/10"
              >
                Support the Campaign
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 