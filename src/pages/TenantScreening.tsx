import { ArrowRight, CheckCircle, FileText, Lock, Search, Shield, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TenantScreening() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Comprehensive Tenant Screening
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Make informed decisions with our comprehensive tenant screening reports. Get credit history, background checks, and rental history verification in one place.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/signup"
                className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
              >
                Screen a Tenant
              </Link>
              <Link
                to="/pricing/screening"
                className="text-sm font-semibold leading-6 text-gray-900 flex items-center"
              >
                View pricing <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Comprehensive Screening
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to know about your applicants
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <FileText className="h-5 w-5 flex-none text-blue-600" />
                  Credit Reports
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Access comprehensive credit reports from major credit bureaus.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Search className="h-5 w-5 flex-none text-blue-600" />
                  Background Checks
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Nationwide criminal and eviction history screening.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <UserCheck className="h-5 w-5 flex-none text-blue-600" />
                  Identity Verification
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Verify applicant identity and prevent fraud.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Simple Process</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How it works
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="relative flex flex-col items-center">
                <div className="rounded-full bg-blue-600 p-3 text-white">
                  <span className="text-lg font-semibold">1</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Send Screening Request</h3>
                <p className="mt-2 text-center text-gray-600">
                  Enter your applicant's email address and we'll handle the rest.
                </p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="rounded-full bg-blue-600 p-3 text-white">
                  <span className="text-lg font-semibold">2</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Applicant Completes Form</h3>
                <p className="mt-2 text-center text-gray-600">
                  Applicant provides necessary information and authorizes the screening.
                </p>
              </div>

              <div className="relative flex flex-col items-center">
                <div className="rounded-full bg-blue-600 p-3 text-white">
                  <span className="text-lg font-semibold">3</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Get Results</h3>
                <p className="mt-2 text-center text-gray-600">
                  Receive comprehensive screening results within minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Trusted Solution</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why choose RentSpree screening?
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <CheckCircle className="h-5 w-5 flex-none text-blue-600" />
                  FCRA Compliant
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Fully compliant with Fair Credit Reporting Act requirements.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Lock className="h-5 w-5 flex-none text-blue-600" />
                  Secure Data
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Bank-level encryption for all sensitive information.
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Shield className="h-5 w-5 flex-none text-blue-600" />
                  Reliable Results
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Accurate and comprehensive screening reports you can trust.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to screen tenants?
            <br />
            Get started today.
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Link
              to="/signup"
              className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100"
            >
              Start screening
            </Link>
            <Link
              to="/contact"
              className="text-sm font-semibold leading-6 text-white"
            >
              Contact sales <ArrowRight className="inline-block ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}