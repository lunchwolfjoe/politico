import { CalendarDaysIcon, DocumentTextIcon, ScaleIcon, ArrowPathIcon, ShieldExclamationIcon, UserGroupIcon, LockClosedIcon, ExclamationTriangleIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline';

export interface Article {
  id: string;
  title: string;
  date: string;
  category: string;
  description: string;
  icon: any;
  slug: string;
  excerpt: string;
  content: string;
  imagePath: string;
}

export const articles: Article[] = [
  {
    id: 'leadership-deficit',
    title: "The Leadership Deficit: Why Congress Operates Like a Broken Warehouse Floor",
    date: "April 22, 2025",
    category: "Leadership",
    description: "Congress doesn't need more pundits. It needs more operators.",
    icon: BuildingLibraryIcon,
    slug: "leadership-deficit",
    excerpt: "I spent my life turning around broken systems—on military deployments, in high-volume retail, and inside some of the most complex logistics operations on Earth. I've managed thousands, launched billion-dollar sites, and uncovered fraud, waste, and failure that others ignored.",
    content: `
      <p><em>Congress doesn't need more pundits. It needs more operators.</em></p>
      
      <p>I spent my life turning around broken systems—on military deployments, in high-volume retail, and inside some of the most complex logistics operations on Earth. I've managed thousands, launched billion-dollar sites, and uncovered fraud, waste, and failure that others ignored.</p>
      
      <p>Now, I'm running for Congress because the system that's supposed to serve the American people doesn't work—and I know how to fix it.</p>
      
      <p>This isn't ideology. It's operations. Washington is broken not because the people are bad, but because the structure rewards the wrong things. We've created a place where soundbites matter more than substance, party points matter more than performance, and outcomes don't even get measured.</p>
      
      <p>This is what I call the Leadership Deficit—and until we fix it, America's best efforts will keep getting choked at the top.</p>
      
      <h2>The Broken Ops Floor</h2>
      
      <p>Walk into Congress like it's a warehouse, and here's what you'd see:</p>
      
      <ul>
        <li>Meetings about meetings.</li>
        <li>No clear ownership of problems.</li>
        <li>Siloed teams fighting over scope.</li>
        <li>No shared goals, timelines, or performance metrics.</li>
        <li>Everyone's performing. No one's accountable.</li>
      </ul>
      
      <p>If this were Amazon or Walmart, that operation would be shut down. If it were the military, someone would be relieved of command. In Washington? They get re-elected.</p>
      
      <h2>What's Driving the Breakdown</h2>
      
      <h3>1. Culture: Performance Over Product</h3>
      
      <p>Members of Congress are rewarded for the appearance of action—not results. Viral moments, zingers in hearings, and ideological purity win airtime. But where are the deliverables? Who tracks real results?</p>
      
      <p>In my world, if you didn't hit the metric, you didn't get to keep the job. That's missing in Washington.</p>
      
      <h3>2. Incentives: Misaligned and Dangerous</h3>
      
      <p>Congress rewards:</p>
      
      <ul>
        <li>Cable news hits</li>
        <li>Fundraising totals</li>
        <li>Loyalty to party</li>
        <li>Social media engagement</li>
      </ul>
      
      <p>It does not reward bipartisan lawmaking, real-world impact, or constituent service. That's how you get dysfunction: the incentives are upside down.</p>
      
      <h3>3. Structure: Siloed and Stale</h3>
      
      <p>The committee system is an outdated org chart. Immigration policy, for example, is divided between Judiciary, Homeland Security, and Foreign Affairs—with no single accountable team. No one owns the full problem.</p>
      
      <p>It's a factory where the parts never align, but somehow the people in charge keep getting bonuses.</p>
      
      <h2>The Real-World Cost of Fake Leadership</h2>
      
      <ul>
        <li>Veterans still waiting for care.</li>
        <li>Broken border policies every 4 years.</li>
        <li>Working-class wages stagnating while stock buybacks explode.</li>
        <li>Tech policy written by lobbyists instead of engineers.</li>
        <li>A national debt growing without oversight.</li>
      </ul>
      
      <p>This isn't about party. It's about process. The American people are paying for a system that would be laughed out of any real company.</p>
      
      <h2>Here's How We Fix It</h2>
      
      <h3>1. Introduce Public Legislative Dashboards</h3>
      
      <p>Every member of Congress should be measured like a business unit:</p>
      
      <ul>
        <li>% of bills passed</li>
        <li>Bipartisan co-sponsorship rate</li>
        <li>Constituent service speed</li>
        <li>Budget discipline</li>
        <li>Oversight effectiveness</li>
      </ul>
      
      <p>Let voters see who's producing—and who's just performing.</p>
      
      <h3>2. Break the Committee Silos</h3>
      
      <p>Form cross-functional legislative task forces for America's biggest issues:</p>
      
      <ul>
        <li>Border Security Team: Judiciary + Homeland Security + Foreign Affairs + Budget</li>
        <li>Veterans Support Team: Armed Services + VA + Labor + Health</li>
      </ul>
      
      <p>Sprint the issue. Solve the problem. Don't just hold a hearing.</p>
      
      <h3>3. Tie Leadership Roles to Results</h3>
      
      <p>Committee chairs should earn their spot through outcomes, not seniority or backroom deals. Publish annual scorecards. Real impact = real power.</p>
      
      <h3>4. Send in the Operators</h3>
      
      <p>We need fewer career pundits and more people who've run teams, managed budgets, delivered results, and know what "owning the problem" really means.</p>
      
      <h2>Why Me. Why Now.</h2>
      
      <p>I'm not polished. I'm not politically groomed. But I know how to lead.</p>
      
      <p>I've fought corruption, managed chaos, and turned around broken teams in high-pressure, high-stakes environments. From the Army to the JAG Corps, from running $100M P&Ls to rebuilding failed logistics systems at Amazon, I've earned trust by doing the work.</p>
      
      <p>Now I'm bringing that mindset to Congress.</p>
      
      <p>Because I don't want my daughters growing up in a country run by influencers with committee assignments.</p>
      
      <p>I want them to grow up in a country where leadership means outcomes—and where Congress runs like it's accountable to us.</p>
      
      <p>This is how we rebuild trust in government.</p>
      
      <p>Not with slogans. With execution.</p>
      
      <p>Not with tweets. With delivery.</p>
      
      <p>Not with more noise. With actual results.</p>
      
      <p>I'm Nick Plumb. I'm running for Congress in Texas District 2. If you've ever looked at Washington and thought, "I could run that place better,"— you probably could. But I'm going to.</p>
      
      <p>Let's fix the ops floor. Let's lead again.</p>
    `,
    imagePath: "/images/professional/veteran-leadership.jpg"
  },
  {
    id: 'censorship-by-algorithm',
    title: "Censorship by Algorithm: The Quiet War on American Speech",
    date: "April 22, 2025",
    category: "Digital Rights",
    description: "How AI-powered content moderation is silently shaping public discourse.",
    icon: LockClosedIcon,
    slug: "censorship-by-algorithm",
    excerpt: "I didn't get silenced by the government. I got throttled by a machine.",
    content: `
      <p><em>I didn't get silenced by the government. I got throttled by a machine.</em></p>
      
      <p>I sat down to write a harmless campaign slogan. Nothing hateful. Nothing vulgar. Just a bold political message with my name on it.</p>
      
      <p>And I couldn't post it.</p>
      
      <p>The AI flagged it. Rejected it. Censored it.</p>
      
      <p>No appeal. No explanation. No human in sight.</p>
      
      <p>That moment hit me like a gut punch—not because I needed that one post to go viral, but because I realized something deeper:</p>
      
      <p>The future of speech isn't being censored by bureaucrats. It's being filtered by black-box algorithms. And we never signed up for it.</p>
      
      <h2>This Isn't "Big Tech Bias." It's Bigger.</h2>
      
      <p>You've probably heard politicians talk about censorship. Usually, it's framed as some Silicon Valley employee deciding what's "acceptable."</p>
      
      <p>But the real story is more dangerous—and more invisible.</p>
      
      <p>The content moderation systems of today are no longer run by humans. They're run by AI models trained on massive datasets, taught to "protect" us from misinformation, hate speech, or political toxicity.</p>
      
      <p>But here's the truth:</p>
      
      <ul>
        <li>These models don't understand context.</li>
        <li>They don't respect satire, dissent, or complexity.</li>
        <li>And they are making real-time decisions about what you're allowed to say.</li>
      </ul>
      
      <p>Not just on X, Facebook, or YouTube—but increasingly in email, search, advertising, and even payment platforms.</p>
      
      <h2>I'm Not Guessing. It Happened to Me.</h2>
      
      <p>While preparing messaging for my campaign, I tested phrases with my own name—Nick Plumb—in slogans like:</p>
      
      <ul>
        <li>"Plumb the Swamp"</li>
        <li>"Plumb for the People"</li>
        <li>"Nick the System"</li>
        <li>"Plumbline Politics"</li>
        <li>"Time to Pull the Plug"</li>
      </ul>
      
      <p>One by one, these phrases were rejected by automated filters. Not because they were offensive—but because AI models determined they might be unsafe.</p>
      
      <p>That's the future we're living in:</p>
      
      <ul>
        <li>No rules. Just probabilities.</li>
        <li>No judge. Just an AI hallucinating what might get someone mad.</li>
        <li>No accountability. Just a silent block.</li>
      </ul>
      
      <h2>This Is the New Censorship—and It's Already Here</h2>
      
      <p>Forget banning books.</p>
      
      <p>Forget "shadowbans."</p>
      
      <p>We're way past that now.</p>
      
      <p>Today, the average American is being trained by algorithms to avoid risk. To self-censor. To not question the system too loudly—for fear of being flagged, downgraded, or digitally erased.</p>
      
      <p>And most don't even realize it's happening.</p>
      
      <h2>The Algorithmic Iron Curtain</h2>
      
      <p>Here's what content filtering looks like in 2025:</p>
      
      <ul>
        <li>Flagged ads you can't run.</li>
        <li>Search results that quietly suppress dissent.</li>
        <li>Emails sent to spam not because of spam—but because of political language.</li>
        <li>Posts demoted without notification.</li>
        <li>Payment processors closing accounts for "risk" behavior.</li>
      </ul>
      
      <p>If you're running for office, starting a movement, or just telling the truth—you're already operating under AI speech probation.</p>
      
      <p>And if you think this only happens to extremists, think again.</p>
      
      <p>I was flagged for my name.</p>
      
      <h2>This Isn't a Conspiracy. It's a System Design.</h2>
      
      <p>These filters weren't built to protect you. They were built to protect platforms.</p>
      
      <ul>
        <li>From lawsuits.</li>
        <li>From advertisers.</li>
        <li>From government pressure.</li>
      </ul>
      
      <p>The result is a speech regime that's not regulated by law—but by corporate risk tolerance.</p>
      
      <p>That's more dangerous than censorship from above—because it's censorship from everywhere, by no one.</p>
      
      <h2>Where the Hell Is Congress?</h2>
      
      <p>While this silent takeover unfolds, Congress is holding hearings about "online safety" and pretending they understand AI.</p>
      
      <p>Spoiler: they don't.</p>
      
      <p>And while they grandstand, the tools that now shape our culture, elections, and discourse are entirely unregulated, non-transparent, and owned by corporations whose profit depends on avoiding controversy—not defending liberty.</p>
      
      <h2>What I'm Proposing: A Digital Free Speech Framework</h2>
      
      <p>We need to treat AI-powered content moderation like the civil rights issue it is.</p>
      
      <p>Here's what I'll fight for in Congress:</p>
      
      <h3>1. Transparency Requirements for Moderation Algorithms</h3>
      
      <p>If a platform uses automated filters, they must disclose:</p>
      
      <ul>
        <li>What categories are being flagged</li>
        <li>The rate of false positives</li>
        <li>How appeals are handled</li>
      </ul>
      
      <p>No more mystery. No more "oops."</p>
      
      <h3>2. A Right to Algorithmic Appeal</h3>
      
      <p>If your content is taken down or blocked, you should be notified and given the right to human review. Period.</p>
      
      <h3>3. Protections for Political Speech</h3>
      
      <p>Political messaging—especially from candidates—must be exempt from suppression based on vague AI risk flags.</p>
      
      <p>Let the voters decide, not a machine.</p>
      
      <h3>4. A Federal Digital Due Process Law</h3>
      
      <p>You wouldn't accept being put on a no-fly list without recourse. Why accept being silenced online without a hearing?</p>
      
      <h2>This Isn't About Me. It's About the Next Voice You Never Hear.</h2>
      
      <p>Maybe it's a parent sharing vaccine side effects.</p>
      
      <p>Maybe it's a whistleblower exposing abuse.</p>
      
      <p>Maybe it's a kid with a hard truth and no platform.</p>
      
      <p>If we don't draw a hard line now, we risk losing the internet as we knew it—a place of open discourse, friction, and truth.</p>
      
      <p>Not perfect, not polite—but free.</p>
      
      <p>And if we don't act fast, that freedom disappears behind a polite, sterile curtain… pulled by an AI no one elected.</p>
    `,
    imagePath: "/images/platform/cybersecurity.jpg"
  },
  {
    id: 'chainsaw-bureaucracy',
    title: "Chainsaw the Bureaucracy: Why Red Tape Protects the Powerful, Not the People",
    date: "April 22, 2025",
    category: "Government Reform",
    description: "How excessive regulation stifles innovation and hurts the most vulnerable.",
    icon: ExclamationTriangleIcon,
    slug: "chainsaw-bureaucracy",
    excerpt: "I've cleaned up operations floors so broken they were bleeding money. I've untangled process knots that choked thousand-person teams. And I've learned one unshakeable truth: Complexity always protects the powerful.",
    content: `
      <p>I've cleaned up operations floors so broken they were bleeding money. I've untangled process knots that choked thousand-person teams. And I've learned one unshakeable truth: Complexity always protects the powerful.</p>
      
      <p>Red tape doesn't exist for the little guy. It exists for the big guys who know how to navigate it.</p>
      
      <p>The compliance costs, the paperwork, the endless approvals—they're a boon to established players who can afford teams of lawyers, lobbyists, and administrators.</p>
      
      <p>And they're a death sentence for everyone else.</p>
      
      <h2>The Scale of the Problem</h2>
      
      <p>The federal bureaucracy is not a singular entity. It's a maze of:</p>
      
      <ul>
        <li>440+ federal agencies</li>
        <li>187,000+ pages of federal regulations</li>
        <li>$2 trillion in annual compliance costs</li>
        <li>Thousands of forms, each with their own procedures and timelines</li>
      </ul>
      
      <p>This isn't governance. It's a gauntlet designed to favor those with resources and punish those without them.</p>
      
      <h2>Big Regulations Help Big Corporations</h2>
      
      <p>When Amazon wanted to start drone deliveries, they navigated FAA regulations that would paralyze a smaller competitor. When major pharmaceutical companies wanted approvals, they hired former FDA officials. When giant tech firms faced privacy regulations, they built compliance teams that startups could never afford.</p>
      
      <p>I've seen this from the inside at Amazon. We didn't fear regulation—we hired for it. We built teams around it. We used complexity as a competitive advantage.</p>
      
      <p>The myth is that regulation tames business. The reality is that it entrenches incumbents.</p>
      
      <h2>The Real Victims</h2>
      
      <p>Who pays the price for this protection racket?</p>
      
      <ul>
        <li>Small business owners spending 20+ hours on tax compliance</li>
        <li>First-generation entrepreneurs who can't afford regulatory consultants</li>
        <li>Low-income Americans who lose $1,800+ annually to regulatory costs</li>
        <li>Medical patients waiting for life-saving treatments stuck in approval loops</li>
        <li>American workers who lose job opportunities to countries with sensible regulations</li>
      </ul>
      
      <p>The people who need government to work for them are precisely the ones crushed by its complexity.</p>
      
      <h2>The False Choice Narrative</h2>
      
      <p>We're told the choice is between regulation and chaos. Between bureaucracy and lawlessness.</p>
      
      <p>That's a lie.</p>
      
      <p>The real choice is between smart governance and dumb governance. Between systems designed around outcomes and systems designed around process.</p>
      
      <p>And right now, we're firmly in the "dumb" category.</p>
      
      <h2>How to Chainsaw the Bureaucracy</h2>
      
      <p>The fix isn't to eliminate government's role. It's to make government work like twenty-first century organizations do:</p>
      
      <h3>1. Automatic Sunset Provisions</h3>
      
      <p>Every regulation should have a 5-year expiration date. If it's still needed, renew it. If not, let it die. No more regulatory zombies.</p>
      
      <h3>2. One-in, Two-out</h3>
      
      <p>For every new regulation, eliminate two outdated ones. Force the trade-off to become visible.</p>
      
      <h3>3. Digital First Compliance</h3>
      
      <p>Create a single digital platform for all federal requirements. One login, one dashboard, one set of forms that talk to each other.</p>
      
      <h3>4. Plain Language Requirements</h3>
      
      <p>Every regulation should pass a readability test. If you need a law degree to understand your obligations, the regulation fails.</p>
      
      <h3>5. Compliance Cost Targets</h3>
      
      <p>Set annual targets for reducing compliance costs, just as we do for waste or pollution. Measure, report, improve.</p>
      
      <h2>This Isn't Partisan. It's Practical.</h2>
      
      <p>I'm not anti-government. I'm anti-dysfunction.</p>
      
      <p>I'm not against rules. I'm against rules that make no sense, cost too much, and hurt the people they're supposed to protect.</p>
      
      <p>And my experience in fixing broken operations taught me that complexity is never an accident. It's a choice—one that always needs to be challenged.</p>
      
      <h2>What I'll Do in Congress</h2>
      
      <p>I will fight for a Bureaucracy Reduction Act that implements these reforms across the federal government.</p>
      
      <p>I will demand that every agency head present a plan for reducing regulatory burden by 25% in their first year.</p>
      
      <p>And I will bring operational expertise to the committee oversight process, asking the same hard questions I asked at Amazon: "Who is this helping? What is the actual outcome? How do we know it's working?"</p>
      
      <p>Because the American people deserve a government that works for them—not one that works them over.</p>
      
      <p>It's time to chainsaw the bureaucracy.</p>
      
      <p>Not for ideology. For results.</p>
    `,
    imagePath: "/Substacks/chainsaw.webp"
  },
  {
    id: 'delay-is-damage',
    title: "The Delay Is the Damage: How Government Weaponizes the Wait",
    date: "April 22, 2025",
    category: "Government Reform",
    description: "When slowness becomes a policy tool against citizens.",
    icon: ArrowPathIcon,
    slug: "delay-is-damage",
    excerpt: "Incompetence isn't the biggest threat in government. It's the deliberate use of time as a weapon against citizens.",
    content: `
      <p>Incompetence isn't the biggest threat in government. It's the deliberate use of time as a weapon against citizens.</p>
      
      <p>When I ran massive logistics operations, we lived and died by cycle time. A delay wasn't just an inconvenience—it was a measurable cost. It impacted real people's lives.</p>
      
      <p>In government, delay has become something much more sinister: a strategy.</p>
      
      <h2>The Weaponization of Wait Times</h2>
      
      <p>Here's an ugly truth about American governance in 2025: Many government agencies aren't failing despite the delays. They're succeeding because of them.</p>
      
      <p>Delay is the point. Frustration is the goal. The wait is the weapon.</p>
      
      <p>Consider these realities:</p>
      
      <ul>
        <li>Veterans waiting 100+ days for disability claims</li>
        <li>Immigration cases backlogged for 4+ years</li>
        <li>FOIA requests that take 18+ months to process</li>
        <li>Small business permits stuck in multi-year review cycles</li>
        <li>Tax refunds held for mysterious "further review"</li>
      </ul>
      
      <p>These aren't just inefficiencies. They're features of systems designed to make citizens give up.</p>
      
      <h2>Why Delay Works as Policy</h2>
      
      <p>Government agencies have discovered a dark truth: If you make a process slow enough, many people will abandon their rights rather than endure the wait.</p>
      
      <p>It's simple math:</p>
      
      <ul>
        <li>Can't wait 2 years for a permit? Don't start your business.</li>
        <li>Can't afford to fight a wrongful tax levy? Just pay it.</li>
        <li>Can't navigate the disability appeals process? Accept the denial.</li>
      </ul>
      
      <p>Delay becomes de facto denial—without the legal liability of an actual "no."</p>
      
      <h2>The Cruel Math of Government Time</h2>
      
      <p>For bureaucracies, time costs nothing. Their funding continues whether they process your case or not.</p>
      
      <p>But for citizens, time is everything:</p>
      
      <ul>
        <li>A veteran waiting for healthcare while cancer spreads</li>
        <li>A small business owner watching savings dwindle during permit delays</li>
        <li>An immigrant family separated while visas stall</li>
        <li>A wrongfully accused taxpayer losing their home during an audit</li>
      </ul>
      
      <p>This asymmetry of time value isn't an accident. It's leverage.</p>
      
      <h2>The Broken Cycle</h2>
      
      <p>Here's how the cycle perpetuates:</p>
      
      <ol>
        <li>Agency creates complex process with undefined timeline</li>
        <li>Backlog develops, wait times explode</li>
        <li>Agency requests more funding to address backlog</li>
        <li>Congress provides more resources</li>
        <li>Wait times remain the same or increase</li>
        <li>Repeat</li>
      </ol>
      
      <p>The perverse incentive is clear: The worse your performance, the more resources you receive. The longer the lines, the bigger your budget.</p>
      
      <h2>Real Solutions from Real Operational Experience</h2>
      
      <p>As someone who has fixed broken systems in the military and private sector, I know that fixing this requires a fundamental shift in how government measures success.</p>
      
      <h3>1. Mandatory Service Level Agreements (SLAs)</h3>
      
      <p>Every government process should have a published, guaranteed maximum wait time. Miss it? The citizen gets automatic approval or compensation.</p>
      
      <h3>2. Time-Based Budgeting</h3>
      
      <p>Agency funding should be directly tied to speed of service. Process cases faster? Get more resources. Create delays? Lose budget.</p>
      
      <h3>3. Default to Approval</h3>
      
      <p>After a reasonable review period, the default should be approval unless the agency can articulate a specific reason for denial. The burden of delay should fall on government, not citizens.</p>
      
      <h3>4. Personal Accountability</h3>
      
      <p>Department heads should have their compensation and continued employment tied to processing times, just as executives do in the private sector.</p>
      
      <h3>5. Radical Transparency</h3>
      
      <p>Real-time dashboards showing processing times for every government service should be public. Let citizens see which agencies are working and which are weaponizing wait times.</p>
      
      <h2>This Is Personal</h2>
      
      <p>I've seen this from multiple angles. As a military officer, I watched as fellow veterans were broken by VA wait times. As an executive, I saw small suppliers crushed by regulatory delays. As a citizen, I've experienced the maddening void of unanswered government queries.</p>
      
      <p>The delay isn't just the damage. It's often the entire point.</p>
      
      <p>That's why I'm running for Congress. Because the federal government needs to be held to the same standards of performance that we demand in every other aspect of American life.</p>
      
      <p>Time isn't just money. It's life itself. And no bureaucracy should have the power to weaponize it against the people it serves.</p>
    `,
    imagePath: "/Substacks/seized in real time.webp"
  },
  {
    id: 'judicial-overreach',
    title: "Vetoed by the Robe: How Judicial Overreach Is Undermining the Will of the People",
    date: "April 23, 2025",
    category: "Judicial Reform",
    description: "When unelected judges become super-legislators.",
    icon: ScaleIcon,
    slug: "judicial-overreach",
    excerpt: "By now, you've seen the pattern: People vote. Legislators act. Judges veto. And somehow, we're told this is democracy working as intended.",
    content: `
      <p>By now, you've seen the pattern:</p>
      
      <p>People vote. Legislators act. Judges veto.</p>
      
      <p>And somehow, we're told this is democracy working as intended.</p>
      
      <p>I'm trained as a lawyer in both the Army and Navy JAG Corps. I respect our legal system deeply. But what we're witnessing today isn't judicial review—it's judicial replacement of the democratic process.</p>
      
      <p>And the American people deserve better than government by gavel.</p>
      
      <h2>The Judicial Veto Power</h2>
      
      <p>When judges strike down laws passed by elected representatives, they aren't just interpreting the Constitution—they're exercising a veto power more absolute than any president's:</p>
      
      <ul>
        <li>Presidential vetoes can be overridden by Congress</li>
        <li>Congressional deadlock can be resolved by elections</li>
        <li>Judicial decisions? They can stand for generations</li>
      </ul>
      
      <p>This creates a perverse incentive: Why win elections when you can win lawsuits? Why persuade voters when you can persuade a handful of judges?</p>
      
      <h2>The Constitutional Bait-and-Switch</h2>
      
      <p>The most concerning trend is judges who claim to be "strict constructionists" while inventing new doctrines that the Founders never imagined:</p>
      
      <ul>
        <li>Agency deference principles being selectively applied</li>
        <li>Standing requirements manipulated to achieve policy goals</li>
        <li>Constitutional silence interpreted as prohibition—but only for policies certain judges dislike</li>
      </ul>
      
      <p>The result? Policy decisions made by those with lifetime appointments instead of those who face voters.</p>
      
      <h2>A Few Unelected Deciders</h2>
      
      <p>The math should disturb every American:</p>
      
      <ul>
        <li>Five Supreme Court justices can overrule 535 members of Congress</li>
        <li>2-1 decisions from circuit courts can block laws passed by state legislatures of 40+ members</li>
        <li>A single district judge can halt national policies affecting 330 million Americans</li>
      </ul>
      
      <p>This isn't checks and balances. It's rule by judiciary.</p>
      
      <h2>Forum Shopping: The Legal Lottery</h2>
      
      <p>Today's legal strategy is transparent:</p>
      
      <ol>
        <li>Find a sympathetic judge in a favorable district</li>
        <li>File for a nationwide injunction</li>
        <li>Bypass the democratic process entirely</li>
      </ol>
      
      <p>Both parties play this game. But the American people always lose.</p>
      
      <h2>The Path Forward: Restoring Democratic Balance</h2>
      
      <p>As someone trained in law but committed to democratic principles, I believe we need a new approach that respects both judicial independence and popular sovereignty:</p>
      
      <h3>1. Limit Nationwide Injunctions</h3>
      
      <p>District courts should be limited to injunctions affecting their jurisdiction. Only appellate courts or the Supreme Court should issue nationwide orders.</p>
      
      <h3>2. Circuit-Based Injunctions</h3>
      
      <p>When federal courts find a law unconstitutional, the ruling should initially apply only within that circuit, allowing other circuits to weigh in before national application.</p>
      
      <h3>3. Three-Judge Panels for Constitutional Challenges</h3>
      
      <p>Major constitutional challenges to federal or state laws should require three-judge panels, not single-judge decisions.</p>
      
      <h3>4. Jurisdiction Clarity</h3>
      
      <p>Congress should use its constitutional authority to clarify court jurisdiction in areas where judicial activism has become most pronounced.</p>
      
      <h3>5. Sunset Provisions on Judicial Doctrines</h3>
      
      <p>Judge-made doctrines like qualified immunity should be codified by Congress with regular review periods, making the people's representatives responsible for their continuation.</p>
      
      <h2>Beyond Left and Right</h2>
      
      <p>This isn't a partisan issue. Judicial overreach has frustrated both conservatives and progressives, depending on which judges hold power.</p>
      
      <p>The real divide isn't left vs. right. It's elected vs. unelected governance.</p>
      
      <p>As a member of Congress, I will fight to restore balance to our system—not by attacking judicial independence, but by strengthening the democratic foundations that make judicial review legitimate in the first place.</p>
      
      <p>Because in America, the people should have the final word. Not those in black robes.</p>
    `,
    imagePath: "/Substacks/one judge.webp"
  },
  {
    id: 'daughter-college-rejection',
    title: "She Didn't Get In—And That's When I Realized the System Isn't Broken. It's Working Exactly as Designed.",
    date: "April 24, 2025",
    category: "Education",
    description: "How my daughter's college rejection revealed deeper truths about merit and opportunity in America.",
    icon: UserGroupIcon,
    slug: "daughter-college-rejection",
    excerpt: "My daughter didn't get into the University of Texas. She had the grades. She had the scores. She had the extracurriculars. But she didn't get in.",
    content: `
      <p>My daughter didn't get into the University of Texas. She had the grades. She had the scores. She had the extracurriculars.</p>
      
      <p>But she didn't get in.</p>
      
      <p>A few weeks later, we learned some interesting facts about who did:</p>
      
      <ul>
        <li>Legacy admits with lower scores</li>
        <li>Out-of-state students paying premium tuition</li>
        <li>Athletes in sports you've never heard of</li>
      </ul>
      
      <p>That's when it hit me: The system isn't failing. It's operating according to its actual design. And that design isn't about merit at all.</p>
      
      <h2>The Merit Myth</h2>
      
      <p>We tell our children a comforting story: Work hard. Get good grades. Build a strong resume. The system will reward you.</p>
      
      <p>It's a lie.</p>
      
      <p>Not because merit doesn't matter—but because the systems we've built pay lip service to merit while serving very different masters:</p>
      
      <ul>
        <li>Prestige over performance</li>
        <li>Connections over competence</li>
        <li>Fundraising over education</li>
      </ul>
      
      <p>This isn't conspiracy. It's business as usual.</p>
      
      <h2>Beyond Academia: The Pattern Everywhere</h2>
      
      <p>This pattern extends far beyond college admissions. I've seen it in:</p>
      
      <ul>
        <li>Hiring processes that favor pedigree over potential</li>
        <li>Promotion systems that reward visibility over value</li>
        <li>Funding models that amplify existing advantages</li>
        <li>Regulatory regimes that protect established players</li>
      </ul>
      
      <p>The common thread? Systems that claim to be about merit but are actually about maintaining power structures.</p>
      
      <h2>Technical Meritocracy vs. Systemic Reality</h2>
      
      <p>In my operations career, I've experienced both sides of this divide:</p>
      
      <p>At the technical level, merit often does rule. The warehouse doesn't care where you went to school—it cares if the packages move efficiently.</p>
      
      <p>But at the systemic level? The rules change. It becomes about:</p>
      
      <ul>
        <li>Who you know</li>
        <li>Where you're from</li>
        <li>Which language you speak (both literally and culturally)</li>
        <li>Whether you fit the unwritten template</li>
      </ul>
      
      <p>And the most insidious part? The people who benefit most from this system are convinced they've earned it all through pure merit.</p>
      
      <h2>The Real Damage</h2>
      
      <p>When we pretend our systems are purely meritocratic when they're not, we create a toxic brew of consequences:</p>
      
      <ul>
        <li>Qualified people who never get their shot</li>
        <li>Psychological damage to those who follow the rules and still lose</li>
        <li>Cynicism that erodes social trust</li>
        <li>Protected mediocrity in our institutions</li>
        <li>A society that wastes its most precious resource: human potential</li>
      </ul>
      
      <p>My daughter will be fine. She's going to a different school. But what about the millions of Americans who work hard, play by the rules, and still can't break through?</p>
      
      <h2>Fixing the System, Not Just Criticizing It</h2>
      
      <p>The solution isn't to abandon meritocracy—it's to actually implement it. Here's what that looks like:</p>
      
      <h3>1. Radical Transparency in Selection</h3>
      
      <p>Every selective institution—from colleges to corporate hiring—should publish its actual decision criteria, not just its stated values.</p>
      
      <h3>2. Algorithmic Accountability</h3>
      
      <p>When AI and algorithms make decisions, they should be auditable for bias and available for public review.</p>
      
      <h3>3. Performance Over Pedigree</h3>
      
      <p>Whether in education, hiring, or promotion, we need systems that measure what you can do, not where you came from.</p>
      
      <h3>4. Multiple Paths to Success</h3>
      
      <p>A truly meritocratic system doesn't just have one narrow definition of "merit"—it recognizes excellence in many forms.</p>
      
      <h3>5. Equal Enforcement of Rules</h3>
      
      <p>When rules are bent for some but strictly enforced for others, merit becomes meaningless.</p>
      
      <h2>Why This Matters for My Campaign</h2>
      
      <p>I'm running for Congress because I believe American institutions should work for all Americans—not just the connected few.</p>
      
      <p>This isn't about left vs. right. It's about whether we actually believe in the ideals we claim to cherish:</p>
      
      <ul>
        <li>That hard work should be rewarded</li>
        <li>That the best ideas should win</li>
        <li>That your zip code shouldn't determine your future</li>
      </ul>
      
      <p>My daughter's rejection letter was more than a personal disappointment. It was a reminder that the systems we've built often betray our stated values.</p>
      
      <p>In Congress, I'll work to align our institutions with our ideals—to build systems that truly reward merit, create opportunity, and allow every American to rise as far as their talent and hard work can take them.</p>
      
      <p>Not because it's easy. But because it's the country we promised to be.</p>
    `,
    imagePath: "/Substacks/she didnt get in.webp"
  }
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

// Function to format article content before rendering
export const formatArticleContent = (content: string): string => {
  // Process the content with better formatting
  let formattedContent = content
    // Format the first paragraph as a lead paragraph
    .replace(/<p><em>(.*?)<\/em><\/p>/, '<p class="text-xl font-medium text-gray-900 mb-8 leading-relaxed"><em>$1</em></p>')
    // Format regular paragraphs
    .replace(/<p>/g, '<p class="mb-6 text-gray-700 leading-relaxed">')
    // Format headings
    .replace(/<h2>/g, '<h2 class="text-2xl font-bold text-gray-900 mt-10 mb-6">')
    .replace(/<h3>/g, '<h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">')
    // Format lists
    .replace(/<ul>/g, '<ul class="mb-8 mt-4 space-y-2 pl-0 list-none">')
    .replace(/<li>/g, '<li class="flex items-start"><span class="text-red-700 font-bold mr-2">•</span><span>')
    .replace(/<\/li>/g, '</span></li>')
    // Format emphasis
    .replace(/<strong>/g, '<strong class="font-semibold text-gray-900">');
    
  return formattedContent;
}; 