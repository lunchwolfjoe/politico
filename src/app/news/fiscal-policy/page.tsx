import Image from 'next/image';
import Link from 'next/link';
import { imagePaths } from '@/lib/image-paths';

export default function FiscalPolicyPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-red-700">Policy Paper - May 10, 2025</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fiscal Responsibility Through Veterans Leadership
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            How military leadership principles can transform government spending and bring fiscal discipline to Washington.
          </p>
        </div>
        
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                The principles of fiscal responsibility that I learned during my military service provide a foundation for how I approach government spending. Military leadership teaches accountability, discipline, and strategic resource allocation—all principles that are desperately needed in Washington today.
              </p>
              <p className="mt-8">
                During my service, I was entrusted with managing critical resources where waste wasn't just inefficient—it could compromise mission success and put lives at risk. This experience instilled in me a deep respect for taxpayer dollars and a commitment to eliminating wasteful spending.
              </p>
              <p className="mt-8">
                If elected, I will bring this same disciplined approach to Congress, focusing on:
              </p>
              <ul className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-red-700">•</span>
                  <span><strong className="font-semibold text-gray-900">Budget Transparency:</strong> Implementing clear performance metrics for government programs to ensure accountability</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-red-700">•</span>
                  <span><strong className="font-semibold text-gray-900">Efficiency Audits:</strong> Regular review of programs to eliminate redundancy and waste</span>
                </li>
              </ul>
            </div>
            <div>
              <p>
                As both a military officer and business leader, I've seen that fiscal responsibility is not about arbitrary cuts—it's about strategic investment and careful stewardship of resources.
              </p>
              <p className="mt-8">
                The current approach to federal spending lacks the discipline and accountability that would be expected in any military unit or successful business. Our national debt poses not just an economic threat but a national security concern as well.
              </p>
              <ul className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-red-700">•</span>
                  <span><strong className="font-semibold text-gray-900">Long-term Planning:</strong> Moving beyond short-term budget cycles to implement sustainable fiscal strategies</span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1 h-5 w-5 flex-none text-red-700">•</span>
                  <span><strong className="font-semibold text-gray-900">Bipartisan Solutions:</strong> Working across the aisle to make difficult but necessary budget decisions</span>
                </li>
              </ul>
            </div>
          </div>
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
  );
} 