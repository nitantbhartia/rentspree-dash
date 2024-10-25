import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ScreeningHero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100/20">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="flex items-center gap-x-2 text-blue-600">
            <Shield className="h-5 w-5" />
            <h2 className="text-base font-semibold leading-7">Tenant Screening</h2>
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Make confident rental decisions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get comprehensive reports including credit history, background checks, and rental history verification. Make informed decisions about your potential tenants.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="/register"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Start Screening
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              View pricing <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}