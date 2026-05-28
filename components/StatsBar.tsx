const stats = [
  { value: "50+", label: "Resources", desc: "Curated tutorials & guides" },
  { value: "10K+", label: "Downloads", desc: "And growing every day" },
  { value: "5", label: "Categories", desc: "Frontend to Fullstack" },
  { value: "24/7", label: "Free Access", desc: "No sign-up required" },
]

const StatsBar = () => {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-blue-600/5 via-purple-600/5 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/5 bg-white/2 lg:grid-cols-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center p-8 text-center transition-colors duration-300 hover:bg-white/2"
            >
              <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                {stat.value}
              </span>
              <span className="mt-2 text-sm font-semibold text-white">
                {stat.label}
              </span>
              <span className="mt-1 text-xs text-gray-500">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsBar
