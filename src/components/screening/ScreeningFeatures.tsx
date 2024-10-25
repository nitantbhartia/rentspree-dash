import { CheckCircle, FileText, Lock, Search, Shield, UserCheck } from 'lucide-react';

const features = [
  {
    name: 'Credit Reports',
    description: 'Access comprehensive credit reports from major credit bureaus.',
    icon: FileText,
  },
  {
    name: 'Background Checks',
    description: 'Nationwide criminal and eviction history screening.',
    icon: Search,
  },
  {
    name: 'Identity Verification',
    description: 'Verify applicant identity and prevent fraud.',
    icon: UserCheck,
  },
  {
    name: 'Rental History',
    description: 'Review previous rental experiences and references.',
    icon: CheckCircle,
  },
  {
    name: 'Secure Data',
    description: 'Bank-level encryption for all sensitive information.',
    icon: Lock,
  },
  {
    name: 'FCRA Compliance',
    description: 'Fully compliant with Fair Credit Reporting Act requirements.',
    icon: Shield,
  },
];

export function ScreeningFeatures() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Comprehensive Screening
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know about your applicants
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our tenant screening reports provide detailed insights to help you make informed decisions about your rental applicants.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}