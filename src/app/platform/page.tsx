import Image from 'next/image';
import Link from 'next/link';
import { 
  CurrencyDollarIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  HeartIcon,
  RocketLaunchIcon,
  ScaleIcon,
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

interface PlatformIssue {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: any;
  relatedArticle?: {
    slug: string;
    title: string;
  };
  category: string;
}

const issues: PlatformIssue[] = [
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
    category: 'Economy'
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
    category: 'Economy'
  },
  {
    id: 'growth',
    title: 'Economic Growth',
    description: "Texas's future lies in embracing both our traditional strengths and new opportunities. I'll work to create an environment where businesses can thrive and create good-paying jobs for Texas families.",
    points: [
      'Attracting high-tech industries to Texas through innovation incentives',
      'Supporting small business growth with reduced regulations',
      'Modernizing infrastructure for the digital age',
      'Developing workforce programs that address skills gaps',
      'Championing energy independence through all domestic sources'
    ],
    icon: ChartBarIcon,
    category: 'Economy'
  },
  {
    id: 'military',
    title: 'Military Service',
    description: "From the battlefield to cybersecurity, I've spent my career protecting Americans. I'll bring this experience to ensure our communities are safe and secure.",
    points: [
      'Supporting law enforcement with modern resources and training',
      'Strengthening border security through technology and barriers',
      'Combating cyber threats to critical infrastructure',
      'Advocating for veterans in law enforcement careers',
      'Protecting communities from transnational criminal organizations'
    ],
    icon: ShieldCheckIcon,
    category: 'Security'
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
    relatedArticle: {
      slug: "censorship-by-algorithm",
      title: "Censorship by Algorithm: The Quiet War on American Speech"
    },
    category: 'Technology'
  },
  {
    id: 'education',
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
    relatedArticle: {
      slug: "daughter-college-rejection",
      title: "She Didn't Get In—And That's When I Realized the System Isn't Broken. It's Working Exactly as Designed."
    },
    category: 'Education'
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
    relatedArticle: {
      slug: "judicial-overreach",
      title: "Vetoed by the Robe: How Judicial Overreach Is Undermining the Will of the People"
    },
    category: 'Rights'
  },
  {
    id: 'healthcare',
    title: 'Healthcare Reform',
    description: "Healthcare should be accessible, affordable, and patient-centered. I'll work to implement market-driven solutions that put you in control of your healthcare decisions.",
    points: [
      'Expanding telehealth access and innovation',
      'Increasing price transparency in medical services',
      'Supporting health savings accounts and direct primary care',
      'Protecting those with pre-existing conditions',
      'Reducing prescription drug costs through competition'
    ],
    icon: HeartIcon,
    category: 'Healthcare'
  },
  {
    id: 'veterans',
    title: 'Veterans Affairs',
    description: "As a veteran who served in both the Army and Navy JAG Corps, I understand firsthand the challenges our veterans face. I'll fight to ensure they receive the care and support they've earned.",
    points: [
      'Modernizing VA healthcare delivery systems',
      'Expanding mental health services and suicide prevention',
      'Improving transition support for service members',
      "Protecting veterans' education benefits",
      'Ensuring timely processing of disability claims'
    ],
    icon: ShieldCheckIcon,
    relatedArticle: {
      slug: "delay-is-damage",
      title: "The Delay Is the Damage: How Government Weaponizes the Wait"
    },
    category: 'Security'
  },
  {
    id: 'government',
    title: 'Government Reform',
    description: "Washington is broken. I'll bring my operational expertise from the private sector to make government more efficient, transparent, and accountable to the people it serves.",
    points: [
      'Implementing performance metrics for federal agencies',
      'Streamlining bureaucratic processes to reduce waste',
      'Increasing transparency in government operations',
      'Ending the revolving door between government and lobbying',
      'Advocating for term limits to reduce career politicians'
    ],
    icon: ExclamationTriangleIcon,
    relatedArticle: {
      slug: "chainsaw-bureaucracy",
      title: "Chainsaw the Bureaucracy: Why Red Tape Protects the Powerful, Not the People"
    },
    category: 'Government'
  },
  {
    id: 'leadership',
    title: 'Leadership Accountability',
    description: "Congress doesn't need more politicians. It needs leaders who understand how to manage complex operations and deliver results.",
    points: [
      'Bringing operational excellence to congressional offices',
      'Holding federal agencies accountable with metrics-based oversight',
      'Leading by example with transparent constituent communications',
      'Focusing on outcomes rather than partisan politics',
      'Working across the aisle to solve real problems'
    ],
    icon: ArrowPathIcon,
    relatedArticle: {
      slug: "leadership-deficit",
      title: "The Leadership Deficit: Why Congress Operates Like a Broken Warehouse Floor"
    },
    category: 'Leadership'
  }
];

// Group issues by category
const categories = issues.reduce((acc, issue) => {
  if (!acc[issue.category]) {
    acc[issue.category] = [];
  }
  acc[issue.category].push(issue);
  return acc;
}, {} as Record<string, PlatformIssue[]>);

export default function PlatformPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <div className="h-full w-full overflow-hidden">
            <img
              src="/images/personal/merica.jpg"
              alt="American flag"
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
          <div className="mt-10">
            <Link href="/articles" className="inline-flex items-center rounded-md bg-red-700 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-800">
              Read My Articles
              <ArrowTopRightOnSquareIcon className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Issues by Category */}
      {Object.entries(categories).map(([category, categoryIssues]) => (
        <div key={category} className="mx-auto max-w-7xl px-6 lg:px-8 py-16 first:pt-0">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-red-700">{category}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {category === 'Economy' ? 'Economic Prosperity' : 
               category === 'Security' ? 'Safety & Security' :
               category === 'Rights' ? 'Constitutional Rights' :
               category === 'Technology' ? 'Innovation & Technology' :
               category === 'Government' ? 'Government Reform' :
               category === 'Healthcare' ? 'Healthcare Reform' :
               category === 'Education' ? 'Education Excellence' :
               category === 'Leadership' ? 'Leadership Accountability' : category}
            </p>
          </div>
          
          <div className="mx-auto mt-10 grid max-w-2xl gap-x-8 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {categoryIssues.map((issue) => (
              <div
                key={issue.id}
                id={issue.id}
                className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-x-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                      <issue.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{issue.title}</h3>
                  </div>
                  
                  <p className="text-base leading-6 text-gray-600 mb-6">{issue.description}</p>
                  
                  <ul className="mb-6 space-y-2">
                    {issue.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-x-2">
                        <span className="text-red-700 font-bold mt-1">•</span>
                        <span className="text-sm text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {issue.relatedArticle && (
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <Link
                        href={`/articles/${issue.relatedArticle.slug}`}
                        className="inline-flex items-center text-sm font-semibold text-red-700 hover:text-red-800"
                      >
                        <DocumentTextIcon className="h-4 w-4 mr-1" />
                        Read: {issue.relatedArticle.title}
                        <ArrowTopRightOnSquareIcon className="ml-1 h-3 w-3" aria-hidden="true" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

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
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                  <ScaleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Constitutional Fidelity
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  I believe our Constitution is not a living document but an enduring covenant that must be protected and preserved in its original meaning and intent.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                  <CurrencyDollarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Limited Government
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  The best government is that which governs least. I believe in reducing the size, scope, and reach of the federal government in our daily lives.
                </p>
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                  <ShieldCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                Strong National Defense
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  As a veteran, I believe America must maintain the strongest, most lethal fighting force in the world to protect our interests and deter our adversaries.
                </p>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src="/images/platform-cta.jpg"
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