import Link from "next/link"

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black-100 px-4">
      <div className="relative">
        <div className="pointer-events-none absolute -inset-20 bg-linear-to-br from-blue-500/10 via-purple-500/5 to-transparent blur-3xl" />
        <div className="relative text-center">
          <p className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-[120px] font-bold leading-none text-transparent sm:text-[180px]">
            404
          </p>
          <h1 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">
            Resource not found
          </h1>
          <p className="mt-3 text-gray-400">
            The resource you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-purple-500/25"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resources
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
