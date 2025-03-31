import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon, ShieldCheckIcon, BuildingOffice2Icon, RocketLaunchIcon } from '@heroicons/react/24/solid';

const contributionLevels = [
  {
    name: 'Grassroots Supporter',
    amount: '$25',
    description: 'Support our America First campaign with a grassroots contribution.',
    benefits: [
      'Campaign updates via email',
      'Digital campaign materials',
      'Recognition on our website',
    ],
    icon: ShieldCheckIcon,
  },
  {
    name: 'Digital Patriot',
    amount: '$50',
    description: 'Help us reach more voters through digital channels and social media.',
    benefits: [
      'All Grassroots Supporter benefits',
      'Exclusive digital content',
      'Priority email updates',
    ],
    icon: RocketLaunchIcon,
  },
  {
    name: 'Freedom Fighter',
    amount: '$100',
    description: 'Make a significant impact on our fight to restore American greatness.',
    benefits: [
      'All Digital Patriot benefits',
      'Personal thank you note from the candidate',
      'Invitation to virtual events with the candidate',
    ],
    icon: ShieldCheckIcon,
  },
  {
    name: 'Liberty Leader',
    amount: '$250',
    description: 'Show your strong commitment to conservative values and American innovation.',
    benefits: [
      'All Freedom Fighter benefits',
      'VIP access to campaign events',
      'Personal meeting with the candidate',
    ],
    icon: BuildingOffice2Icon,
  },
  {
    name: 'Constitution Guardian',
    amount: '$500',
    description: 'Make a major contribution to our campaign to defend the Constitution.',
    benefits: [
      'All Liberty Leader benefits',
      'Private dinner with the candidate',
      'Campaign strategy briefing with senior staff',
    ],
    icon: ShieldCheckIcon,
  },
  {
    name: 'Founding Member',
    amount: '$1000',
    description: "Join our campaign's leadership circle and help shape America's future.",
    benefits: [
      'All Constitution Guardian benefits',
      'Advisory board membership',
      'Exclusive campaign merchandise package',
    ],
    icon: BuildingOffice2Icon,
  },
];

const impactStatements = [
  {
    title: 'Veteran-Led Campaign',
    description: 'As a JAG Corps veteran with deployments to Iraq and GTMO, I understand what it means to serve our country with honor and integrity. Your donation supports a campaign led by someone who has put on the uniform to defend America.',
    image: '/images/veteran-leadership.jpg',
  },
  {
    title: 'Tech Innovation in Politics',
    description: 'My experience at Amazon and as a global tech leader will bring Silicon Valley efficiency to Washington. Your contribution helps us leverage cutting-edge technology to run a modern, effective campaign.',
    image: '/images/digital-platform.jpg',
  },
  {
    title: 'America First Vision',
    description: 'Every donation, large or small, fuels our mission to restore American greatness through conservative leadership, fiscal responsibility, and constitutional fidelity. Join our movement today.',
    image: '/images/platform-cta.jpg',
  },
];

export default function DonatePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/platform-cta.jpg"
            alt="American flag"
            className="h-full w-full object-cover brightness-75"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-800/90 to-blue-900/70 mix-blend-multiply" />
        </div>
        <div className="relative px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Invest in America's Future
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              Your contribution fuels our mission to bring battle-tested leadership, legal expertise, and tech innovation to Congress.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="#contribution-levels"
                className="rounded-md bg-white px-5 py-3 text-base font-semibold text-red-700 shadow-sm hover:bg-gray-100"
              >
                View Contribution Levels
              </a>
              <a
                href="#donate-form"
                className="rounded-md bg-red-700 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Donate Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-700">Why Your Support Matters</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fund the Fight for American Excellence
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your contribution directly supports our mission to restore American greatness through conservative leadership, military discipline, and technological innovation.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {impactStatements.map((statement) => (
              <div key={statement.title} className="flex flex-col rounded-2xl shadow-sm overflow-hidden">
                <div className="flex-1 pb-6">
                  <div className="relative h-48 w-full">
                    <Image
                      src={statement.image}
                      alt={statement.title}
                      className="h-full w-full object-cover"
                      width={800}
                      height={450}
                    />
                  </div>
                  <div className="px-6 mt-6">
                    <h3 className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                      {statement.title}
                    </h3>
                    <p className="mt-2 text-base leading-7 text-gray-600">
                      {statement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contribution Levels */}
      <div id="contribution-levels" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-700">Contribution Levels</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Join Our Conservative Movement
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose a contribution level that works for you. Every donation helps us advance our America First agenda and bring military discipline and tech innovation to Washington.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-3">
          {contributionLevels.map((level) => (
            <div key={level.name} className="flex flex-col rounded-xl bg-white shadow-sm ring-1 ring-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-900 flex items-center">
                <level.icon className="h-6 w-6 text-red-700 mr-2" aria-hidden="true" />
                {level.name}
              </h3>
              <p className="mt-1 text-3xl font-bold tracking-tight text-red-700">
                {level.amount}
              </p>
              <p className="mt-4 text-base text-gray-700">{level.description}</p>
              
              <div className="mt-6 border-t border-gray-100 pt-6 flex-1">
                <h4 className="text-sm font-semibold text-gray-900">Includes:</h4>
                <ul className="mt-6 space-y-3">
                  {level.benefits.map((benefit) => (
                    <li key={benefit} className="flex">
                      <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-red-700" aria-hidden="true" />
                      <span className="ml-3 text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a
                href="#donate-form"
                className="mt-8 block w-full rounded-md bg-red-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Donate {level.amount}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Form */}
      <div id="donate-form" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Make Your Contribution
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your support helps us restore American greatness. All donations are secure and comply with Federal Election Commission regulations.
          </p>
          <div className="mt-10 rounded-lg bg-white shadow-lg ring-1 ring-gray-200 p-8">
            <p className="text-center text-gray-500 mb-8">
              Donation form will be integrated here. Due to FEC regulations, we will collect:
            </p>
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="amount" className="block text-sm font-semibold leading-6 text-gray-900">
                  Contribution Amount
                </label>
                <div className="mt-2.5 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                    $
                  </span>
                  <input
                    type="text"
                    name="amount"
                    id="amount"
                    className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-700 sm:text-sm sm:leading-6"
                    placeholder="25"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-red-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Complete Donation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance Information */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-700">Compliance Information</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Important Donor Information
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <p className="text-sm text-gray-700 leading-6">
              Contributions to this campaign are not tax deductible. Federal law requires us to use our best efforts to collect and report the name, mailing address, occupation and name of employer of individuals whose contributions exceed $200 in an election cycle.
            </p>
            <p className="mt-4 text-sm text-gray-700 leading-6">
              By submitting this form, I confirm that the following statements are true and accurate:
            </p>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li className="flex gap-x-3">
                <CheckCircleIcon className="h-5 w-5 flex-none text-red-700" />
                <span>I am a U.S. citizen or lawfully admitted permanent resident.</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="h-5 w-5 flex-none text-red-700" />
                <span>This contribution is made from my own funds, and not those of another.</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="h-5 w-5 flex-none text-red-700" />
                <span>This contribution is not made from the funds of a corporation or labor organization.</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="h-5 w-5 flex-none text-red-700" />
                <span>I am not a federal contractor.</span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon className="h-5 w-5 flex-none text-red-700" />
                <span>I am making this contribution with my own personal credit card and not with a corporate or business card.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 