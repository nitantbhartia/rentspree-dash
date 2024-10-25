import { ArrowRight, Building2, ClipboardCheck, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const userTypes = [
  {
    title: 'Agent',
    description: 'Access comprehensive screening tools and manage rental applications for your clients.',
    href: '/for-agents',
  },
  {
    title: 'Landlord',
    description: 'Screen tenants, collect rent, and manage your properties all in one place.',
    href: '/for-landlords',
  },
  {
    title: 'Renter',
    description: 'Apply for properties, submit rental applications, and manage your documents.',
    href: '/for-renters',
  },
];

export function Home() {
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
              The Complete Rental Management Solution
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Screen tenants, manage rental applications, and streamline your property management process all in one place.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/signup"
                className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Sign Up Free
              </Link>
              <Link
                to="/demo"
                className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-600 shadow-sm ring-1 ring-inset ring-blue-600 hover:bg-gray-50"
              >
                Book a Demo
              </Link>
            </div>

            {/* Google Reviews */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <div className="flex text-yellow-400">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="text-gray-600">4.8 out of 5 based on 500+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Who are you section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who are you?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Select your role to see how RentSpree can help you
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {userTypes.map((type) => (
              <Link
                key={type.title}
                to={type.href}
                className="flex flex-col bg-white p-8 shadow-sm rounded-xl hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                <p className="mt-4 flex-1 text-gray-600">{type.description}</p>
                <div className="mt-6 flex items-center text-blue-600">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Rest of the sections remain the same */}
      {/* Features Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        {/* ... existing features section content ... */}
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        {/* ... existing CTA section content ... */}
      </div>
    </div>
  );
}