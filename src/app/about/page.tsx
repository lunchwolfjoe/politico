import Image from 'next/image';
import { imagePaths } from '@/lib/image-paths';
import { 
  ShieldCheckIcon, 
  BuildingOffice2Icon, 
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import { FaShieldAlt, FaHandshake, FaRegLightbulb } from 'react-icons/fa';

const experiences = [
  {
    id: 'military',
    title: 'Military Service',
    description: 'Dual-branch JAG Corps veteran with deployments to Iraq and Guantanamo Bay',
    icon: ShieldCheckIcon,
    image: imagePaths.professional.gtmokhadr,
    details: [
      'Served in both Army and Navy JAG Corps with distinction',
      'Deployed to Iraq during combat operations',
      'Served at Guantanamo Bay detention facility',
      'Recipient of multiple campaign medals and individual awards',
      'Applied military law expertise in high-pressure environments',
      'Honorably discharged after dedicated service to nation'
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate Leadership',
    description: 'Rapid advancement from Walmart trainee to Amazon executive with proven results',
    icon: BuildingOffice2Icon,
    image: imagePaths.professional.publicSpeakingWalmart,
    details: [
      'Advanced from Walmart manager trainee to store manager in record time',
      'Selected for prestigious Walmart Global Leadership Academy',
      'Led multiple successful Amazon fulfillment center launches',
      'Founding member of Amazon\'s revolutionary IDEA team',
      'Currently Senior Product Manager for Global Compensation Analytics',
      'Transformed technical insights into strategic business advantages'
    ],
  },
  {
    id: 'community',
    title: 'Public Service',
    description: 'Commitment to Texas through government service and community leadership',
    icon: UserGroupIcon,
    image: imagePaths.personal.volunteering,
    details: [
      'Served in Texas Department of Licensing and Regulation General Counsel\'s Office',
      'Applied legal expertise to protect Texas consumers and businesses',
      'Volunteer leader with multiple veterans\' service organizations',
      'Advocate for military families and wounded warriors',
      'Mentor to transitioning veterans entering civilian careers',
      'Champion for rural Texas economic development initiatives'
    ],
  },
];

const values = [
  {
    name: 'Integrity',
    description: 'The same unwavering commitment to truth and honor that guided my military service will define my approach to public office.',
    image: imagePaths.professional.veteranLeadership,
  },
  {
    name: 'Service',
    description: 'I believe public office is about service, not power. My entire career has been dedicated to serving others, whether in uniform, in business, or in the community.',
    image: imagePaths.personal.volunteering,
  },
  {
    name: 'Innovation',
    description: 'My experience at Amazon taught me how to challenge conventional thinking and find innovative solutions to complex problems.',
    image: imagePaths.general.digitalPlatform,
  },
  {
    name: 'Fiscal Responsibility',
    description: 'Leading large teams with multi-million dollar budgets has taught me the importance of financial discipline and accountability.',
    image: imagePaths.platform.fiscal,
  },
  {
    name: 'Constitutional Fidelity',
    description: 'I\'ve sworn an oath to defend the Constitution multiple times throughout my military career, and I\'ll continue to uphold those same principles in Congress.',
    image: imagePaths.personal.merica,
  },
  {
    name: 'American Exceptionalism',
    description: 'I believe in American greatness and our unique role as a force for freedom and prosperity in the world.',
    image: imagePaths.general.platformCta,
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/personal/thinkerheadshot.jpg"
            alt="Candidate profile"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-700/50 mix-blend-multiply" />
        </div>
        <div className="relative px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              N. Lee Plumb
            </h1>
            <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Leadership forged in service, innovation built on experience.
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              A pragmatic, results-oriented leader ready to bring real-world experience to Congress and fight for American jobs.
            </p>
          </div>
        </div>
      </div>

      {/* Personal Story Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-red-700">My Story</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Forged Through Challenge, Driven by Service
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <figure className="border-l border-red-700 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>
                  "My experiences—from the battlefields of Iraq to the courtrooms of the JAG Corps to the boardrooms of America's largest companies—have taught me that leadership is about service, integrity, and getting results."
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <div className="mt-1 h-12 w-12 flex-none rounded-full bg-gray-50 overflow-hidden">
                  <img
                    src="/images/personal/thinkerheadshot.jpg"
                    alt="N. Lee Plumb headshot"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">N. Lee Plumb</div>
                  <div className="text-gray-600">Republican for U.S. Congress</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="lg:col-span-7">
            <div className="text-base leading-7 text-gray-700 space-y-6">
              <p>
                My life started out rocky. Due to choices made by my young mother, I was adopted by the age of four. My late adoptive parents, born in 1930 and 1933, raised me with a strong foundation: belief in God, the importance of family, and the profound value of hard work. They instilled in me the understanding that opportunity often comes disguised as effort.
              </p>
              <p>
                The day I turned 18, my path became clear. My father presented four options: Army, Navy, Air Force, or the Marine Corps. I chose the Army and left for service shortly after high school graduation. My commitment to our nation didn't end there; after my Army service, I dedicated six more years to the Navy JAG Corps. These years in uniform, including deployments to Iraq and service at Guantanamo Bay, taught me discipline, resilience, and the true meaning of defending our Constitution.
              </p>
              <div className="mt-6 mb-6">
                <img
                  src="/images/personal/iraq.jpg"
                  alt="N. Lee Plumb during deployment to Iraq"
                  className="w-full rounded-lg shadow-md"
                />
                <p className="mt-2 text-sm text-gray-500 italic">
                  During my deployment to Iraq as part of my military service.
                </p>
              </div>
              <p>
                Returning from service, I sought to continue contributing. I joined the Texas Department of Licensing and Regulation, working within the General Counsel's office. However, the pace felt slow compared to the demands of the military. Yearning for a new challenge, I took a chance on myself and joined Walmart. My goal was straightforward: get my foot in the door and out-compete everyone through sheer determination and performance. It paid off. By my third anniversary, I was managing the third highest-volume and most profitable store in the entire chain.
              </p>
              <p>
                After seven successful years demonstrating leadership and achieving results at Walmart, Amazon recruited me to launch new fulfillment centers. This led to three record-breaking launches and a whirlwind journey of learning and innovation. Today, I lead AI Enablement for Amazon's Global Compensation team, transforming complex data into strategic advantages.
              </p>
              <p>
                My subsequent career at Amazon further honed my leadership skills. Launching new fulfillment centers demanded innovation, efficiency, and the ability to build and lead high-performing teams. Thriving in fast-paced, results-driven environments like Walmart and Amazon required constant adaptation and innovative problem-solving – precisely the skills needed to navigate today's complex economy and modernize government. My experience isn't just about past success; it's about understanding the logistics, technology, and economic realities that shape the job market <strong>now</strong> and how we can create <strong>future</strong> opportunities right here.
              </p>
              
              <div className="mt-6 mb-6">
                <img
                  src="/images/professional/tech-endorsement.jpg"
                  alt="N. Lee Plumb during time at Walmart"
                  className="w-full rounded-lg shadow-md"
                />
                <p className="mt-2 text-sm text-gray-500 italic">
                  Leading high-volume retail operations taught me fiscal discipline and operational efficiency.
                </p>
              </div>
              
              <p>
                I believe my journey exemplifies the American spirit. I didn't have a safety net, no family wealth to fall back on. Instead, I seized opportunities, worked relentlessly, and built a career through merit and perseverance. I haven't just lived through the global doldrums; I've lived the American Dream. Now, I'm running for Congress to ensure that pathway—the one built on hard work, service, and innovation—remains open and accessible for my children, and for generations to come. I'm not an ideologue, nor am I idealess; I am a pragmatic problem-solver ready to fight for American jobs and American greatness.
              </p>
            </div>
            <div className="mt-10 flex flex-col space-y-4">
              <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden sm:aspect-[3/2]">
                <img
                  src="/images/personal/withdaughters.jpg"
                  alt="Candidate with family"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <img
                    src="/images/personal/cowboyhatwithashley.jpg"
                    alt="N. Lee Plumb with Ashley"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden">
                  <img
                    src="/images/personal/world series.jpg"
                    alt="N. Lee Plumb at World Series"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Grid */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-700">Professional Background</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experience That Delivers Results
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              My diverse background combines military service, legal expertise, and executive leadership in America's most innovative companies.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {/* Military Service Card */}
              <div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-72 w-full">
                  <div className="absolute inset-0">
                    <img
                      src="/images/professional/veteran-leadership.jpg"
                      alt="Military Service"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-700">
                        <ShieldCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="ml-3 text-lg font-bold text-white">Military Service</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Dual-branch JAG Corps veteran with deployments to Iraq and Guantanamo Bay
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex gap-x-3 items-start">
                      <TrophyIcon className="h-5 w-5 flex-shrink-0 text-red-700 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-gray-600">Served in both Army and Navy JAG Corps with distinction</span>
                    </li>
                    <li className="flex gap-x-3 items-start">
                      <TrophyIcon className="h-5 w-5 flex-shrink-0 text-red-700 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-gray-600">Deployed to Iraq during combat operations</span>
                    </li>
                    <li className="flex gap-x-3 items-start">
                      <TrophyIcon className="h-5 w-5 flex-shrink-0 text-red-700 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-gray-600">Served at Guantanamo Bay detention facility</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a
                      href="#military"
                      className="text-sm font-semibold leading-6 text-red-700"
                    >
                      View all achievements →
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Corporate Leadership Card */}
              <div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-72 w-full">
                  <div className="absolute inset-0">
                    <img
                      src="/images/professional/walmartpic.jpg"
                      alt="Corporate Leadership"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-700">
                        <BuildingOffice2Icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="ml-3 text-lg font-bold text-white">Corporate Leadership</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Rapid advancement from Walmart trainee to Amazon executive with proven results
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex gap-x-3 items-start">
                      <TrophyIcon className="h-5 w-5 flex-shrink-0 text-red-700 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-gray-600">Advanced from Walmart manager trainee to store manager in record time</span>
                    </li>
                    <li className="flex gap-x-3 items-start">
                      <TrophyIcon className="h-5 w-5 flex-shrink-0 text-red-700 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-gray-600">Selected for prestigious Walmart Global Leadership Academy</span>
                    </li>
                    <li className="flex gap-x-3 items-start">
                      <TrophyIcon className="h-5 w-5 flex-shrink-0 text-red-700 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-gray-600">Led multiple successful Amazon fulfillment center launches</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a
                      href="#corporate"
                      className="text-sm font-semibold leading-6 text-red-700"
                    >
                      View all achievements →
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Public Service Card */}
              <div className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-72 w-full">
                  <div className="absolute inset-0">
                    <img
                      src="/images/personal/volunteering.jpg"
                      alt="Public Service"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <div className="flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-700">
                        <UserGroupIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="ml-3 text-lg font-bold text-white">Public Service</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6">
                    Commitment to Texas through government service and community leadership
                  </p>
                  
                  <ul className="space-y-3">
                    <li className="flex gap-x-3 items-start">
                      <TrophyIcon className="h-5 w-5 flex-shrink-0 text-red-700 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-gray-600">Served in Texas Department of Licensing and Regulation General Counsel's Office</span>
                    </li>
                    <li className="flex gap-x-3 items-start">
                      <TrophyIcon className="h-5 w-5 flex-shrink-0 text-red-700 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-gray-600">Applied legal expertise to protect Texas consumers and businesses</span>
                    </li>
                    <li className="flex gap-x-3 items-start">
                      <TrophyIcon className="h-5 w-5 flex-shrink-0 text-red-700 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-gray-600">Volunteer leader with multiple veterans' service organizations</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <a
                      href="#community"
                      className="text-sm font-semibold leading-6 text-red-700"
                    >
                      View all achievements →
                    </a>
                  </div>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-base font-semibold leading-7 text-red-700">Values</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Guiding Principles
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              These core values guide my approach to leadership and public service.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-red-700">
                    <FaShieldAlt className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Integrity
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    I believe in keeping promises, practicing ethical leadership, and doing what's right even when it's difficult. True integrity means being honest and accountable, not just when it's convenient.
                  </p>
                  <div className="mt-6 aspect-[3/2] w-full rounded-lg overflow-hidden">
                    <img
                      src="/images/personal/withdaughters.jpg"
                      alt="Integrity in family life"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-red-700">
                    <FaHandshake className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Service
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    From military service to community involvement, I've dedicated my life to serving others. I believe leadership is fundamentally about service—putting the needs of those you represent above your own.
                  </p>
                  <div className="mt-6 aspect-[3/2] w-full rounded-lg overflow-hidden">
                    <img
                      src="/images/personal/volunteering.jpg"
                      alt="Community service"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-red-700">
                    <FaRegLightbulb className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  Innovation
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    My career has been built on finding innovative solutions to complex problems. I believe we need to bring modern, forward-thinking approaches to government while preserving our core values.
                  </p>
                  <div className="mt-6 aspect-[3/2] w-full rounded-lg overflow-hidden">
                    <img
                      src="/images/professional/tech-advisory.jpg"
                      alt="Innovation leadership"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative isolate bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              N. Lee Plumb: Ready to Lead on Day One
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              With leadership forged in service and innovation built on experience, I'm prepared to tackle the complex challenges facing America and fight for our future.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/platform"
                className="rounded-md bg-red-700 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Explore My Platform
              </a>
              <a
                href="/volunteer"
                className="rounded-md border border-white bg-transparent px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-white/10"
              >
                Join Our Campaign
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 