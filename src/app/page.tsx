import Image from 'next/image';
import Link from 'next/link';
import { 
  ShieldCheckIcon, 
  LightBulbIcon, 
  UserGroupIcon,
  ScaleIcon,
  BuildingOffice2Icon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import CampaignLogo from '@/components/ui/CampaignLogo';

const features = [
  {
    name: 'Military & Legal Experience',
    description: 'JAG Corps veteran who served both Army and Navy with deployments to Iraq and GTMO, bringing battlefield-tested leadership to Congress.',
    icon: ShieldCheckIcon,
    link: '/about#military',
  },
  {
    name: 'Corporate Leadership',
    description: 'Advanced from Walmart trainee to executive at Amazon, leading global teams and driving innovation in America\'s largest corporations.',
    icon: BuildingOffice2Icon,
    link: '/about#corporate',
  },
  {
    name: 'Tech Innovator',
    description: 'Founding member of Amazon\'s IDEA team and current Sr. Product Manager for Global Compensation Analytics, bringing cutting-edge expertise to government.',
    icon: LightBulbIcon,
    link: '/platform#innovation',
  },
  {
    name: 'Constitutional Conservative',
    description: 'Committed to protecting our fundamental rights and liberties with the same oath I took to defend the Constitution in uniform.',
    icon: ScaleIcon,
    link: '/platform#values',
  },
  {
    name: 'Economic Strategist',
    description: 'Experience managing multimillion-dollar budgets and global analytics teams, ready to bring fiscal discipline to Washington.',
    icon: ChartBarIcon,
    link: '/platform#economy',
  },
  {
    name: 'Texas Values',
    description: 'Deep roots in Texas, from serving in the state\'s government to raising a family with the values that make Texas exceptional.',
    icon: UserGroupIcon,
    link: '/about#community',
  }
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/candidate.jpg"
            alt="Candidate speaking at podium"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-blue-800/70 mix-blend-multiply" />
        </div>

        {/* Hero content */}
        <div className="relative py-32 px-6 sm:py-40 lg:py-56 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              N. Lee Plumb
              <span className="block text-3xl mt-2 sm:text-4xl">Leadership Forged in Service</span>
              <span className="block text-2xl mt-2 sm:text-3xl text-red-300">Innovation Built on Experience</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              From the battlefields of Iraq to the boardrooms of America\'s largest companies, 
              I\'ve led with integrity, innovation, and a commitment to excellence.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/platform"
                className="rounded-md bg-red-700 px-5 py-3 text-lg font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
              >
                My Platform
              </Link>
              <Link
                href="/about"
                className="text-lg font-semibold leading-6 text-white hover:text-gray-200"
              >
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Clear Choice Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-900">The Clear Choice</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Experience We Need. The Leadership We Deserve.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              In this election, the choice isn't just between names on a ballot; it's between different kinds of leadership. Our district faces complex challenges – from a changing economy and global threats to ensuring our government actually works for <em>us</em>. Tackling these requires more than political talking points; it demands <strong>proven, diverse, real-world experience.</strong>
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
              {/* Experience Pillars */}
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-700 mx-auto">
                    <ShieldCheckIcon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  On the Front Lines
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  Serving in <em>both</em> Army & Navy JAG Corps, deploying to Iraq, handling high-stakes legal matters at GTMO.
                </dd>
              </div>
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-700 mx-auto">
                    <BuildingOffice2Icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  In the Heart of Business
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                   Rising through ranks at Walmart, leading launches & AI initiatives at Amazon.
                </dd>
              </div>
              <div className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-700 mx-auto">
                    <UserGroupIcon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  From the Ground Up
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  Building a career through merit and hard work, understanding the pressures faced by families and businesses.
                </dd>
              </div>
            </dl>
          </div>
           <div className="mt-16 text-center text-lg leading-8 text-gray-700">
             <p>This isn't just a resume; it's <strong>unmatched preparation</strong>. It's the strategic thinking of a military officer, the operational know-how of a corporate executive, and the innovative mindset of a tech leader – all grounded in conservative principles.</p>
             <p className="mt-4 font-semibold text-gray-900">The clear choice is for leadership that understands the mission, knows how to execute, and is ready to deliver results from Day One.</p>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-8 max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-red-700">Why I'm Running</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Experience That Matters
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            After serving our nation in uniform, in government, and leading teams at America\'s most innovative companies, 
            I\'m ready to bring battle-tested leadership to Congress.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.slice(0, 3).map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link href={feature.link} className="text-sm font-semibold leading-6 text-red-700">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.slice(3).map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link href={feature.link} className="text-sm font-semibold leading-6 text-red-700">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative isolate mt-32 px-6 py-32 sm:mt-40 sm:py-40 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-red-700 opacity-20" />
          <Image
            src="/images/platform-cta.jpg"
            alt="Campaign rally"
            className="h-full w-full object-cover opacity-25"
            width={1920}
            height={1080}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <CampaignLogo size={80} />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join N. Lee Plumb's Mission to Restore American Excellence
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            From military battlefields to corporate boardrooms, I've led with integrity and results. 
            Now, I'm ready to fight for Texas values and American innovation in Congress.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/volunteer"
              className="rounded-md bg-red-700 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
            >
              Join the Campaign
            </Link>
            <Link
              href="/donate"
              className="rounded-md bg-blue-900 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 