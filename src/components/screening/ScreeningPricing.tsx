import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiers = [
  {
    name: 'Basic',
    id: 'basic',
    price: 25,
    description: 'Essential screening for individual landlords',
    features: [
      'Credit Report',
      'Criminal Background Check',
      'Eviction History',
      'Identity Verification',
      'Email Support',
    ],
  },
  {
    name: 'Professional',
    id: 'professional',
    price: 40,
    description: 'Complete screening solution for property managers',
    features: [
      'All Basic features',
      'Employment Verification',
      'Rental History Verification',
      'Income Verification',
      'Priority Support',
      'Custom Branding',
      'API Access',
    ],
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    price: 'Custom',
    description: 'Custom solution for large organizations',
    features: [
      'All Professional features',
      'Custom Integration',
      'Dedicated Account Manager',
      'Custom Reports',
      'Bulk Screening',
      'Advanced Analytics',
      '24/7 Phone Support',
    ],
  },
];

export function ScreeningPricing() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect screening package for your needs. All plans include our core screening services.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={`p-8 sm:p-10 lg:flex-auto ${
                tierIdx === 1 ? 'bg-gray-50' : ''
              }`}
            >
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                {tier.name}
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                {tier.description}
              </p>
              <div className="mt-8 flex items-center gap-x-4">
                {typeof tier.price === 'number' ? (
                  <>
                    <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
                      What's included
                    </h4>
                    <div className="h-px flex-auto bg-gray-100" />
                  </>
                ) : (
                  <h4 className="text-sm font-semibold leading-6 text-blue-600">
                    What's included
                  </h4>
                )}
              </div>
              <ul
                role="list"
                className="mt-6 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-blue-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {typeof tier.price === 'number' ? (
                  <p className="text-4xl font-bold tracking-tight text-gray-900">
                    ${tier.price}
                    <span className="text-sm font-semibold leading-6 text-gray-600">/report</span>
                  </p>
                ) : (
                  <p className="text-4xl font-bold tracking-tight text-gray-900">{tier.price}</p>
                )}
                <Link
                  to={tier.id === 'enterprise' ? '/contact' : '/register'}
                  className={`mt-6 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm ${
                    tierIdx === 1
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-white text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300'
                  }`}
                >
                  {tier.id === 'enterprise' ? 'Contact Sales' : 'Get Started'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}