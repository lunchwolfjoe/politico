import Image from 'next/image';
import Link from 'next/link';
import { imagePaths } from '@/lib/image-paths';
import { 
  MegaphoneIcon, 
  PhoneIcon, 
  CalendarIcon,
  UserGroupIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  ScaleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import VolunteerForm from '@/components/forms/VolunteerForm';

const volunteerOpportunities = [
  {
    title: 'Digital Campaign Ambassador',
    description: 'Help us spread our message through social media and digital channels.',
    icon: MegaphoneIcon,
    requirements: [
      'Social media experience',
      'Strong communication skills',
      'Creative content creation',
    ],
    image: imagePaths.volunteer.digital,
    responsibilities: [
      'Create and share campaign content on social platforms',
      'Monitor engagement and respond to inquiries',
      'Identify trending topics relevant to the campaign',
      'Help expand our digital reach to new audiences'
    ]
  },
  {
    title: 'Phone Banking',
    description: 'Connect with voters and share our vision for America.',
    icon: PhoneIcon,
    requirements: [
      'Excellent communication skills',
      'Comfort with phone conversations',
      'Ability to follow scripts and record data',
    ],
    image: imagePaths.volunteer.phoneBanking,
    responsibilities: [
      'Call potential voters to discuss campaign priorities',
      'Record voter feedback and preferences',
      'Answer questions about the candidate\'s positions',
      'Help identify supporters for get-out-the-vote efforts'
    ]
  },
  {
    title: 'Event Organization',
    description: 'Help plan and execute campaign events across Texas.',
    icon: CalendarIcon,
    requirements: [
      'Event planning experience',
      'Strong organizational skills',
      'Team leadership ability',
    ],
    image: imagePaths.volunteer.eventPlanning,
    responsibilities: [
      'Assist with venue selection and logistics',
      'Coordinate with vendors and campaign staff',
      'Manage volunteer teams at events',
      'Ensure smooth execution of campaign rallies and meetings'
    ]
  },
  {
    title: 'Veteran Outreach',
    description: 'Connect with fellow veterans and share our vision for America.',
    icon: ShieldCheckIcon,
    requirements: [
      'Military service background',
      'Understanding of veteran issues',
      'Strong networking skills',
    ],
    image: imagePaths.volunteer.veteranOutreach,
    responsibilities: [
      'Represent the campaign at veteran-focused events',
      'Build relationships with veteran service organizations',
      'Advocate for veteran support within the campaign',
      'Help develop policy positions on veteran affairs'
    ]
  },
  {
    title: 'Tech Advisory Team',
    description: 'Contribute your technology expertise to modernize our campaign infrastructure.',
    icon: CommandLineIcon,
    requirements: [
      'Experience in technology industry',
      'Understanding of digital campaign tools',
      'Strategic thinking',
    ],
    image: imagePaths.professional.techAdvisory,
    responsibilities: [
      'Advise on technology platforms and digital strategy',
      'Assist with data analysis and voter targeting',
      'Develop innovative solutions for campaign challenges',
      'Help implement cybersecurity best practices'
    ]
  },
  {
    title: 'Legal Advocacy Team',
    description: 'Support our campaign with legal expertise and compliance guidance.',
    icon: ScaleIcon,
    requirements: [
      'Legal background or training',
      'Understanding of election law',
      'Attention to detail',
    ],
    image: imagePaths.professional.veteranLeadership,
    responsibilities: [
      'Monitor polling station compliance on election day',
      'Assist with campaign finance compliance',
      'Review campaign materials for legal accuracy',
      'Support voter protection initiatives'
    ]
  },
  {
    title: 'Policy Research Team',
    description: 'Help develop and refine policy positions on key issues.',
    icon: DocumentTextIcon,
    requirements: [
      'Research experience',
      'Strong writing skills',
      'Subject matter expertise in key areas',
    ],
    image: imagePaths.general.communityTech,
    responsibilities: [
      'Conduct research on policy issues and legislation',
      'Draft position papers and talking points',
      'Monitor opponent policy positions',
      'Support development of campaign platform materials'
    ]
  },
  {
    title: 'Community Organizing',
    description: 'Build grassroots support in your local community through direct engagement.',
    icon: UserGroupIcon,
    requirements: [
      'Strong interpersonal skills',
      'Knowledge of local community',
      'Organizational ability',
    ],
    image: imagePaths.volunteer.townHall,
    responsibilities: [
      'Organize neighborhood meetings and house parties',
      'Recruit additional volunteers from your community',
      'Distribute campaign literature and yard signs',
      'Identify local issues important to voters'
    ]
  },
];

const testimonials = [
  {
    content: "Volunteering for this campaign has been incredibly rewarding. As a veteran myself, I appreciate working with a candidate who truly understands military service and veteran needs.",
    author: {
      name: "James R.",
      role: "Veteran Outreach Volunteer",
      imageUrl: imagePaths.volunteer.impact
    }
  },
  {
    content: "Using my tech skills to help modernize a political campaign has been a unique experience. The candidate's background in technology means he actually understands and values our contributions.",
    author: {
      name: "Sarah T.",
      role: "Tech Advisory Team Member",
      imageUrl: imagePaths.professional.techAdvisory
    }
  },
  {
    content: "As a community organizer, I've worked on several campaigns, but this one stands out. There's a genuine commitment to conservative values and practical solutions for our community's challenges.",
    author: {
      name: "Michael D.",
      role: "Community Organizing Volunteer",
      imageUrl: imagePaths.volunteer.impact
    }
  }
];

export default function VolunteerPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <div className="h-full w-full overflow-hidden">
            <img
              src="/images/personal/merica.jpg"
              alt="Get involved"
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
              Get Involved
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              Join our campaign and help make a difference in our community.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Statement */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-700">Why Volunteer</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Make A Real Difference
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              When you volunteer with our campaign, you're not just helping a candidate win an election—you're fighting for the future of America. Our volunteers are the backbone of this movement, bringing diverse skills and experiences to advance our conservative vision.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div className="rounded-xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <ShieldCheckIcon className="h-6 w-6 text-red-700 mr-2" />
                Veteran-Led Campaign
              </h3>
              <p className="mt-4">
                Our candidate's military experience means we understand service, sacrifice, and the importance of mission success. Veterans are especially encouraged to join our team.
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <CommandLineIcon className="h-6 w-6 text-red-700 mr-2" />
                Tech-Forward Approach
              </h3>
              <p className="mt-4">
                We're applying Silicon Valley innovation to conservative campaigning. Tech professionals will find meaningful ways to contribute their expertise.
              </p>
            </div>
            <div className="rounded-xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <ScaleIcon className="h-6 w-6 text-red-700 mr-2" />
                Constitutional Values
              </h3>
              <p className="mt-4">
                Every volunteer effort supports our mission to defend the Constitution and restore American greatness through limited government and individual liberty.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Volunteer Opportunities */}
      <div id="opportunities" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-700">Volunteer Opportunities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find Your Role in the Movement
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We have various opportunities for volunteers to contribute their skills and time. Find the role that best matches your experience and interests.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {volunteerOpportunities.map((opportunity) => (
              <div key={opportunity.title} className="flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={opportunity.image}
                    alt={opportunity.title}
                    className="h-full w-full object-cover"
                    width={800}
                    height={450}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 to-gray-900/0 flex items-end">
                    <div className="p-4 flex items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-700 flex-shrink-0">
                        <opportunity.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      <h3 className="ml-3 text-xl font-semibold text-white">
                        {opportunity.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex flex-1 flex-col">
                  <p className="text-base text-gray-700 mb-4">{opportunity.description}</p>
                  
                  <div className="mt-2">
                    <h4 className="text-sm font-semibold text-gray-900">Requirements:</h4>
                    <ul className="mt-2 space-y-1">
                      {opportunity.requirements.map((requirement) => (
                        <li key={requirement} className="flex gap-x-2 text-sm text-gray-600">
                          <span className="text-red-700 font-bold">•</span>
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900">Responsibilities:</h4>
                    <ul className="mt-2 space-y-1">
                      {opportunity.responsibilities.map((responsibility) => (
                        <li key={responsibility} className="flex gap-x-2 text-sm text-gray-600">
                          <span className="text-red-700 font-bold">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <a
                      href="#sign-up"
                      className="text-sm font-semibold leading-6 text-red-700"
                    >
                      Apply for this role <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-red-700">Volunteer Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hear From Our Team
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.author.name} className="flex flex-col justify-between bg-white rounded-2xl shadow-sm ring-1 ring-gray-200 p-8">
                <blockquote className="text-gray-700">
                  <p className="text-lg font-semibold italic">"{testimonial.content}"</p>
                </blockquote>
                <div className="mt-6 flex items-center gap-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-50 overflow-hidden">
                    <Image
                      src={testimonial.author.imageUrl}
                      alt={testimonial.author.name}
                      className="h-full w-full object-cover"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.author.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sign Up Section */}
      <div id="sign-up" className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-red-700">Join Our Team</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to Make A Difference?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Fill out the form below and we'll match you with volunteer opportunities that best fit your skills, interests, and availability. Every contribution of time and talent makes our movement stronger.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-xl bg-white p-8 shadow-lg ring-1 ring-gray-200 sm:mt-20 lg:mt-24">
          <VolunteerForm />
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative">
        <div className="absolute inset-0">
          <Image
            src={imagePaths.volunteer.impact}
            alt="Volunteers making a difference"
            className="h-full w-full object-cover brightness-50"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-red-900/70" />
        </div>
        <div className="relative py-24 px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The Time For Action Is Now
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
              America's future hangs in the balance. Whether you can give an hour a week or dedicate yourself full-time, your contribution makes a difference in this critical fight for our nation's future.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#sign-up"
                className="rounded-md bg-red-700 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Volunteer Today
              </a>
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