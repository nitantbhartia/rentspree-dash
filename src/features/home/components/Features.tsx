import { Building2, ClipboardCheck, Users } from 'lucide-react';
import Link from 'next/link';

export function Features() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-600">
          Faster Processing
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to manage rentals
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          From listing properties to screening tenants, we've got you covered with our comprehensive suite of tools.
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              <Building2 className="h-5 w-5 flex-none text-blue-600" />
              Property Listings
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p className="flex-auto">
                List and manage your properties with detailed information, photos, and virtual tours.
              </p>
              <p className="mt-6">
                <Link href="/properties" className="text-sm font-semibold leading-6 text-blue-600">
                  View properties <span aria-hidden="true">→</span>
                </Link>
              </p>
            </dd>
          </div>

          <div className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              <Users className="h-5 w-5 flex-none text-blue-600" />
              Tenant Screening
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p className="flex-auto">
                Comprehensive background checks, credit reports, and rental history verification.
              </p>
              <p className="mt-6">
                <Link href="/screening" className="text-sm font-semibold leading-6 text-blue-600">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </p>
            </dd>
          </div>

          <div className="flex flex-col">
            <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
              <ClipboardCheck className="h-5 w-5 flex-none text-blue-600" />
              Application Management
            </dt>
            <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <p className="flex-auto">
                Track and manage rental applications efficiently with our streamlined process.
              </p>
              <p className="mt-6">
                <Link href="/applications" className="text-sm font-semibold leading-6 text-blue-600">
                  View applications <span aria-hidden="true">→</span>
                </Link>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}