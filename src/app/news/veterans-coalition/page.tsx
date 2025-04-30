import Image from 'next/image';
import Link from 'next/link';
import { imagePaths } from '@/lib/image-paths';

export default function VeteransCoalitionPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-red-700">Endorsement - May 15, 2025</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Veterans For Responsible Government Coalition Announces Support
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            A coalition of veterans organizations endorses campaign platform focused on fiscal discipline and responsible governance.
          </p>
        </div>
        
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <figure>
            <Image
              className="aspect-video rounded-xl bg-gray-50 object-cover"
              src={imagePaths.professional.veteranLeadership}
              alt="Veterans leadership coalition"
              width={1310}
              height={873}
            />
            <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
              <span>Veterans leadership coalition meeting, May 2025</span>
            </figcaption>
          </figure>
          
          <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
            <p>
              I'm honored to announce that the Veterans For Responsible Government Coalition, representing over 25,000 veterans across our district, has officially endorsed our campaign. This coalition brings together veterans from all branches of service committed to bringing military principles of leadership, accountability, and fiscal discipline to government.
            </p>
            
            <p className="mt-8">
              "As veterans, we've seen firsthand how strong leadership and efficient resource management can make the difference between success and failure," said Coalition Chair Samuel Johnson, retired Army Colonel. "We believe this campaign represents the values we fought to protect—fiscal responsibility, constitutional fidelity, and service above self."
            </p>
            
            <p className="mt-8">
              The coalition specifically cited my platform's emphasis on:
            </p>
            
            <ul className="mt-8 space-y-6 text-gray-600">
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-red-700">•</span>
                <span><strong className="font-semibold text-gray-900">Fiscal Discipline:</strong> Bringing military-style accountability to government spending</span>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-red-700">•</span>
                <span><strong className="font-semibold text-gray-900">Veterans Services Reform:</strong> Streamlining the VA to better serve those who served</span>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-red-700">•</span>
                <span><strong className="font-semibold text-gray-900">National Security:</strong> A strong defense posture coupled with responsible spending</span>
              </li>
            </ul>
            
            <p className="mt-8">
              The coalition will mobilize volunteer efforts across the district, engaging veterans in grassroots outreach and speaking events highlighting the importance of bringing military leadership principles to government.
            </p>
            
            <div className="mt-10 flex">
              <Link
                href="/news"
                className="rounded-md bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                Back to News
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 