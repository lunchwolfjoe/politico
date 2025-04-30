import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheckIcon, BuildingOffice2Icon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function WhyImRunningPage() {
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
              Why I'm Running
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-100">
              Real-world experience, conservative principles, and a commitment to fighting for our district's future.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
          <h2 className="text-base font-semibold leading-7 text-red-700">My Motivation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why I'm Running</p>

          <p className="mt-6">
            Our nation stands at a crossroads. We face complex challenges – from securing our border and restoring our economy to defending our constitutional rights and ensuring fiscal sanity in Washington. Too often, we see career politicians offering the same tired rhetoric instead of practical solutions grounded in real-world experience. I believe our district, and our country, deserves better.
          </p>
          <p className="mt-4">
             I know the path to success looks different today, and frankly, it's gotten harder for many. The economic pressures facing younger generations – from student loan debt to the rising cost of housing – are real, and they demand leaders who understand and are ready to act. We need leaders who haven't just talked about problems, but have actually solved them – leaders whose commitment to service has been tested under fire and proven in the demanding world of American business. That's why I'm running for Congress.
          </p>

          <div className="mt-10 max-w-2xl">
             <h3 className="text-2xl font-bold tracking-tight text-gray-900">A Foundation Built on Service and Duty</h3>
            <p className="mt-6">
              My journey hasn't followed the typical path to Washington. It began with a choice presented by my father on my 18th birthday: Army, Navy, Air Force, or Marines. I chose the Army, embarking on a path of service that would define my early adult life. My commitment deepened as I later dedicated six years to the Navy JAG Corps.
            </p>
            <p className="mt-4">
              Serving our nation in uniform, including deployments to Iraq and duty at Guantanamo Bay, wasn't just a job; it was a profound responsibility. It instilled in me an unshakeable discipline, resilience in the face of adversity, and a deep, personal understanding of what it means to defend the Constitution – an oath I took multiple times and hold sacred. But it also highlighted a stark reality: today, the starting wage for many military enlistees, those willing to put their lives on the line for our country, is being outpaced by entry-level positions at companies like Amazon. This isn't just a statistic; it's a sign that we need to re-evaluate how we support those who serve and ensure our economy provides dignified opportunities for all hardworking Americans.
            </p>
             
            <div className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <ShieldCheckIcon className="mt-0.5 h-5 w-5 flex-none text-red-700" aria-hidden="true" />
              Service in Iraq taught me the real-world consequences of decisions made in Washington.
            </div>

            <p className="mt-8">
              This experience didn't just teach me about law and order; it taught me about managing complex operations under pressure, the critical need for clear strategy, and the importance of unwavering integrity when the stakes are high – lessons desperately needed in Congress today.
            </p>

            <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">From Military Precision to Business Results</h3>
            <p className="mt-6">
              Transitioning from military life, I sought new ways to contribute... I joined Walmart with a simple goal: to learn, compete, and deliver results through hard work. I didn't have connections or a fancy degree to rely on – just determination. It paid off. By my third anniversary, I was managing the third highest-volume and most profitable store in the entire chain.
            </p>
            
            <p className="mt-4">
              My subsequent career at Amazon further honed my leadership skills. Launching new fulfillment centers demanded innovation, efficiency, and the ability to build and lead high-performing teams. Thriving in fast-paced, results-driven environments like Walmart and Amazon required constant adaptation and innovative problem-solving – precisely the skills needed to navigate today's complex economy and modernize government. My experience isn't just about past success; it's about understanding the logistics, technology, and economic realities that shape the job market *now* and how we can create *future* opportunities right here.
            </p>

            <div className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <BuildingOffice2Icon className="mt-0.5 h-5 w-5 flex-none text-red-700" aria-hidden="true" />
              Leading high-volume retail operations taught me fiscal discipline and operational efficiency.
            </div>

            <p className="mt-8">
              My path, from a challenging start, through military service, and into the heart of American corporate giants, wasn't accidental. It was built on the promise that hard work creates opportunity. But I see that promise becoming harder to reach for too many young people today, burdened by student debt and facing a rapidly changing job market. We need urgent education reform that prepares our kids not just for college, but for well-paying careers in trades, technology, and essential industries right here in our district. We need to ensure that the opportunities I fought for are available – and expanding – for the next generation.
            </p>

            <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">A Pragmatic Problem-Solver, Not a Politician</h3>
            <p className="mt-6">
              My path wasn't paved with political connections or family wealth. It was built on seizing opportunities, relentless effort, and achieving success through merit. I've seen the American Dream firsthand, and I'm running because I refuse to stand by while that dream slips away for others due to outdated policies or economic barriers.
            </p>
            <p className="mt-4">
               I'm not a career politician or a rigid ideologue. Having built my career through the economic shifts of the last two decades, I understand both the timeless principles of hard work and the modern realities that demand fresh solutions. I am a pragmatic problem-solver, guided by conservative principles and informed by diverse, real-world experiences. I believe in:
            </p>
             <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-red-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Fiscal Responsibility:</strong> Demanding accountability for every tax dollar and ensuring efficient government spending.
                  </span>
                </li>
                 <li className="flex gap-x-3">
                  <BuildingOffice2Icon className="mt-1 h-5 w-5 flex-none text-red-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Economic Strength & Opportunity:</strong> Creating an environment where American jobs flourish, where hard work is rewarded fairly, and where our young people have clear, affordable pathways to success through reformed education and modern vocational training.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <UserGroupIcon className="mt-1 h-5 w-5 flex-none text-red-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Secure Borders & Safe Communities:</strong> Upholding the rule of law and protecting our citizens with effective border security and support for law enforcement.
                  </span>
                </li>
                 <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-red-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Constitutional Fidelity:</strong> Defending the rights and freedoms—including the Second Amendment and religious liberty—that make our nation exceptional.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheckIcon className="mt-1 h-5 w-5 flex-none text-red-700" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Strong National Defense & Support for Veterans:</strong> Ensuring our military remains the best in the world and addressing economic disparities, like the entry-wage gap, to truly honor their sacrifice.
                  </span>
                </li>
              </ul>

              <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">My Commitment to You</h3>
               <p className="mt-6">
                I'm running for Congress because I believe our district needs a representative who understands the challenges we face not just from policy papers, but from personal experience. I will bring a veteran's dedication, a business leader's focus on results, and the perspective of someone who worked their way up in today's economy to fight for our values, our jobs, our children's futures, and our way of life.
              </p>
              <p className="mt-4">
                 This campaign isn't just about me; it's about us. It's about restoring the promise of opportunity for every American willing to work for it, by addressing the real challenges they face now. It's about ensuring America remains strong, prosperous, and free for generations to come.
              </p>
              <p className="mt-8 font-semibold text-gray-900">Join me. Let's get to work.</p>
              <div className="mt-10 flex gap-x-6">
                <Link
                    href="/platform"
                    className="rounded-md bg-red-700 px-5 py-3 text-base font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Explore My Platform
                </Link>
                <Link
                    href="/volunteer"
                    className="rounded-md border border-red-700 px-5 py-3 text-base font-semibold text-red-700 shadow-sm hover:bg-red-50"
                  >
                    Join Our Campaign <span aria-hidden="true">→</span>
                </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
} 