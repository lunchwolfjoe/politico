import Image from 'next/image';
import { 
  ShieldCheckIcon, 
  BuildingOffice2Icon, 
  UserGroupIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';

const experiences = [
  {
    id: 'military',
    title: 'Military Service',
    description: 'Dual-branch JAG Corps veteran with deployments to Iraq and Guantanamo Bay',
    icon: ShieldCheckIcon,
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
  },
  {
    name: 'Service',
    description: 'I believe public office is about service, not power. My entire career has been dedicated to serving others, whether in uniform, in business, or in the community.',
  },
  {
    name: 'Innovation',
    description: 'My experience at Amazon taught me how to challenge conventional thinking and find innovative solutions to complex problems.',
  },
  {
    name: 'Fiscal Responsibility',
    description: 'Leading large teams with multi-million dollar budgets has taught me the importance of financial discipline and accountability.',
  },
  {
    name: 'Constitutional Fidelity',
    description: 'I\'ve sworn an oath to defend the Constitution multiple times throughout my military career, and I\'ll continue to uphold those same principles in Congress.',
  },
  {
    name: 'American Exceptionalism',
    description: 'I believe in American greatness and our unique role as a force for freedom and prosperity in the world.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-profile.jpg"
            alt="Candidate profile"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-red-700/50 mix-blend-multiply" />
        </div>
        <div className="relative px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              N. Lee Plumb
            </h1>
            <p className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
              Service. Leadership. Innovation.
            </p>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              A battle-tested leader with experience in the military, government, and America's most innovative companies.
            </p>
          </div>
        </div>
      </div>

      {/* Personal Story Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base font-semibold leading-7 text-red-700">My Story</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From Military Service to Tech Leadership
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
                <Image
                  src="/images/about-profile.jpg"
                  alt="N. Lee Plumb headshot"
                  className="mt-1 h-12 w-12 flex-none rounded-full bg-gray-50"
                  width={48}
                  height={48}
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">N. Lee Plumb</div>
                  <div className="text-gray-600">Republican for U.S. Congress</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="lg:col-span-7">
            <div className="text-base leading-7 text-gray-700">
              <p className="mb-6">
                My journey began in service to our nation in uniform. As a member of both the Army and Navy JAG Corps, I deployed to Iraq during combat operations and served at Guantanamo Bay, where I learned firsthand the importance of defending our Constitution and the rule of law. During my military service, I was honored to receive multiple campaign medals and individual awards recognizing my commitment to excellence and duty.
              </p>
              <p className="mb-6">
                After my military service, I brought my legal expertise to the Texas Department of Licensing and Regulation, working in the General Counsel's office to protect Texas consumers and businesses. This experience deepened my understanding of how government can both help and hinder the success of our communities.
              </p>
              <p className="mb-6">
                Seeking to broaden my leadership experience, I joined Walmart as a manager trainee. Through hard work and dedication to results, I rapidly advanced to store manager and was ultimately selected for the prestigious Global Leadership Academy, an honor reserved for the company's top-performing executives.
              </p>
              <p className="mb-6">
                After eight successful years at Walmart, I was recruited to Amazon, where I led multiple fulfillment center launches before being selected as a founding member of Amazon's groundbreaking IDEA team. Today, as Senior Product Manager for Global Compensation Analytics, I lead teams that transform complex data into strategic business advantages.
              </p>
              <p>
                Now, I'm ready to bring my unique combination of military discipline, legal expertise, and corporate leadership to Congress. I believe America deserves leaders who understand both the challenges of the battlefield and the innovations of the boardroom—leaders who can bridge tradition and technology to create a stronger future for all Americans.
              </p>
            </div>
            <div className="mt-10 flex">
              <Image
                src="/images/family.jpg"
                alt="Candidate with family"
                className="aspect-[16/9] w-full rounded-2xl object-cover sm:aspect-[3/2]"
                width={1200}
                height={800}
              />
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
              {experiences.map((experience) => (
                <div key={experience.id} id={experience.id} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    <div className="h-10 w-10 flex-none rounded-lg bg-red-700 flex items-center justify-center">
                      <experience.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {experience.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{experience.description}</p>
                    {experience.id === 'military' && (
                      <div className="mt-6 mb-6">
                        <Image
                          src="/images/gtmokhadr.jpg"
                          alt="Courtroom sketch of N. Lee Plumb while serving at Guantanamo Bay"
                          className="w-full rounded-lg shadow-md"
                          width={600}
                          height={400}
                        />
                        <p className="mt-2 text-sm text-gray-500 italic">
                          Courtroom sketch of N. Lee Plumb during his service at Guantanamo Bay detention facility.
                        </p>
                      </div>
                    )}
                    <ul className="mt-8 space-y-3">
                      {experience.details.map((detail, index) => (
                        <li key={index} className="flex gap-x-3">
                          <TrophyIcon className="h-6 w-5 flex-none text-red-700" aria-hidden="true" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-700">Core Values</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Principles That Guide My Approach
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            These foundational values have guided me throughout my military service, business leadership, and will define my approach to public service.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-700">
                    <AcademicCapIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {value.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{value.description}</dd>
              </div>
            ))}
          </dl>
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
              With a unique background spanning military, legal, government, and corporate leadership, I'm prepared to meet the complex challenges facing America today.
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