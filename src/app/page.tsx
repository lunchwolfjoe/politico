import Image from 'next/image';
import Link from 'next/link';
import { imagePaths } from '@/lib/image-paths';
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
    image: imagePaths.professional.gtmokhadr
  },
  {
    name: 'Corporate Leadership',
    description: 'Advanced from Walmart trainee to executive at Amazon, leading global teams and driving innovation in America\'s largest corporations.',
    icon: BuildingOffice2Icon,
    link: '/about#corporate',
    image: imagePaths.professional.publicSpeakingWalmart
  },
  {
    name: 'Tech Innovator',
    description: 'Founding member of Amazon\'s IDEA team and current Sr. Product Manager for Global Compensation Analytics, bringing cutting-edge expertise to government.',
    icon: LightBulbIcon,
    link: '/platform#innovation',
    image: imagePaths.professional.leadershipTeam
  },
  {
    name: 'Constitutional Conservative',
    description: 'Committed to protecting our fundamental rights and liberties with the same oath I took to defend the Constitution in uniform.',
    icon: ScaleIcon,
    link: '/platform#values',
    image: imagePaths.personal.navy
  },
  {
    name: 'Economic Strategist',
    description: 'Experience managing multimillion-dollar budgets and global analytics teams, ready to bring fiscal discipline to Washington.',
    icon: ChartBarIcon,
    link: '/platform#economy',
    image: imagePaths.professional.storeManager
  },
  {
    name: 'Texas Values',
    description: 'Deep roots in Texas, from serving in the state\'s government to raising a family with the values that make Texas exceptional.',
    icon: UserGroupIcon,
    link: '/about#community',
    image: imagePaths.personal.cowboyHat
  }
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <div className="h-full w-full overflow-hidden">
            <img
              src="/images/personal/merica.jpg"
              alt="Candidate portrait"
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
              N. Lee Plumb
              <span className="block text-3xl mt-2 sm:text-4xl">Leadership Forged in Service</span>
              <span className="block text-2xl mt-2 sm:text-3xl text-red-300">Innovation Built on Experience</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              From the battlefields of Iraq to the boardrooms of America's largest companies, 
              I've led with integrity, innovation, and a commitment to excellence.
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
              <div className="flex flex-col rounded-lg shadow-md overflow-hidden">
                <div className="relative h-80 w-full">
                  <div className="absolute inset-0">
                    <img
                      src="/images/personal/iraq.jpg"
                      alt="Military Service"
                      className="h-full w-full object-cover object-center"
                      style={{ maxHeight: "100%" }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 p-4 w-full">
                    <div className="flex items-center mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700 mr-2">
                        <ShieldCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-white">On the Front Lines</h3>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5">
                  <p className="text-base leading-7 text-gray-600">
                    Serving in <em>both</em> Army & Navy JAG Corps, deploying to Iraq, handling high-stakes legal matters at GTMO.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col rounded-lg shadow-md overflow-hidden">
                <div className="relative h-80 w-full">
                  <div className="absolute inset-0">
                    <img
                      src={imagePaths.professional.leadershipTeam}
                      alt="Business Experience"
                      className="h-full w-full object-cover object-center"
                      style={{ maxHeight: "100%" }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 p-4 w-full">
                    <div className="flex items-center mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700 mr-2">
                        <BuildingOffice2Icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-white">In the Heart of Business</h3>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5">
                  <p className="text-base leading-7 text-gray-600">
                    Rising through ranks at Walmart, leading launches & AI initiatives at Amazon.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col rounded-lg shadow-md overflow-hidden">
                <div className="relative h-80 w-full">
                  <div className="absolute inset-0">
                    <img
                      src="/images/personal/youngerfamilyphoto.jpg"
                      alt="American Values"
                      className="h-full w-full object-cover object-center"
                      style={{ maxHeight: "100%" }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute bottom-0 p-4 w-full">
                    <div className="flex items-center mb-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-700 mr-2">
                        <UserGroupIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold text-white">From the Ground Up</h3>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-5">
                  <p className="text-base leading-7 text-gray-600">
                    Building a career through merit and hard work, understanding the pressures faced by families and businesses.
                  </p>
                </div>
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
            After serving our nation in uniform, in government, and leading teams at America's most innovative companies, 
            I'm ready to bring battle-tested leadership to Congress.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            My career at Amazon and Walmart honed my leadership skills and taught me to thrive in fast-paced, 
            results-driven environments. My experience isn't just about past success; it's about understanding the logistics, 
            technology, and economic realities that shape the job market <span className="font-bold">now</span> and 
            how we can create <span className="font-bold">future</span> opportunities right here.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.slice(0, 3).map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
                    <div className="absolute inset-0">
                      <img
                        src={feature.image}
                        alt={feature.name}
                        className="h-full w-full object-cover object-center"
                        style={{ 
                          maxHeight: "100%", 
                          objectPosition: feature.name === "Military & Legal Experience" ? "center 30%" : 
                                          feature.name === "Corporate Leadership" ? "center 20%" :
                                          feature.name === "Tech Innovator" ? "center 15%" : "center"
                        }}
                      />
                    </div>
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-br-lg bg-red-700">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
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
                  <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
                    <div className="absolute inset-0">
                      <img
                        src={feature.image}
                        alt={feature.name}
                        className="h-full w-full object-cover object-center"
                        style={{ 
                          maxHeight: "100%", 
                          objectPosition: feature.name === "Constitutional Conservative" ? "center 25%" : 
                                          feature.name === "Economic Strategist" ? "center 20%" :
                                          feature.name === "Texas Values" ? "center 30%" : "center"
                        }}
                      />
                    </div>
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-br-lg bg-red-700">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
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
          <div className="absolute inset-0">
            <img
              src="/images/platform-cta.jpg"
              alt="Campaign rally"
              className="h-full w-full object-cover object-center opacity-25"
              style={{ maxHeight: "100%" }}
            />
          </div>
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