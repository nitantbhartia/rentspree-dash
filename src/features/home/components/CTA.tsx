import Link from 'next/link';

export function CTA() {
  return (
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
  );
}