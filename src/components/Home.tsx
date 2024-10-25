import { Building2, ClipboardCheck, Users } from 'lucide-react';
import Link from 'next/link';

export function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-600 to-blue-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Streamline Your Rental Process
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The all-in-one platform for landlords and tenants. Manage applications, screen tenants, and handle rentals with ease.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/listings"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Browse Listings
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
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
                  <Link href="/listings" className="text-sm font-semibold leading-6 text-blue-600">
                    View listings <span aria-hidden="true">→</span>
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

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to streamline your rental process?
            <br />
            Get started today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/register"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold leading-6 text-white"
            >
              Contact sales <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}