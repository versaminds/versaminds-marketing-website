import Link from "next/link"

export default function CookieDialog() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
      <div className="pointer-events-auto ml-auto max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
        <p className="text-sm leading-6 text-gray-900">
          This website uses cookies to enhance your experience, for analytics and to show you offers tailored to your interests on our site and third party sites. See our{' '}
          <Link href="/privacy#cookies" className="font-semibold text-blue-600">
            cookie policy
          </Link> for more information.
        </p>
        <div className="mt-4 flex items-center gap-x-5">
          <button
            type="button"
            className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
