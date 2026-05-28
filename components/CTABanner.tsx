const CTABanner = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-600/15 via-purple-600/10 to-transparent" />
      <div className="pointer-events-none absolute -right-20 -top-20">
        <div className="h-60 w-60 rounded-full bg-blue-500/20 blur-[100px]" />
      </div>
      <div className="pointer-events-none absolute -bottom-20 -left-20">
        <div className="h-40 w-40 rounded-full bg-purple-500/15 blur-[80px]" />
      </div>

      <div className="relative flex flex-col items-center px-8 py-16 text-center sm:px-16 sm:py-20">
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-medium text-purple-400">
          <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
          Always free
        </div>

        <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
          Start your
          <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> learning journey </span>
          today
        </h2>

        <p className="mt-4 max-w-lg text-gray-400">
          Access all resources for free. No account needed — just pick a topic and dive in.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            No registration
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Updated weekly
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Community driven
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTABanner
