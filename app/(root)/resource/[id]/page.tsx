import { getResourceById } from "@/sanity/actions"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{ id: string }>
}

const categoryStyles: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  frontend: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", dot: "bg-emerald-400" },
  backend: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", dot: "bg-blue-400" },
  "next 13": { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", dot: "bg-purple-400" },
  fullstack: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/20", dot: "bg-amber-400" },
  other: { bg: "bg-gray-500/10", text: "text-gray-400", border: "border-gray-500/20", dot: "bg-gray-400" },
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params
  const resource = await getResourceById(id)

  if (!resource) {
    notFound()
  }

  const style = categoryStyles[resource.category?.toLowerCase()] || categoryStyles.other

  return (
    <div className="nav-padding min-h-screen">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <svg className="h-4 w-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Resources
        </Link>

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl">
              {resource.image ? (
                <Image
                  src={resource.image}
                  alt={resource.title}
                  width={800}
                  height={600}
                  className="h-auto w-full rounded-2xl object-cover"
                />
              ) : (
                <div className="flex h-80 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                  <span className="text-6xl font-bold text-white/10">{resource.title?.[0]}</span>
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-2">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${style.bg} ${style.text} ${style.border} border`}>
                <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                {resource.category}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-400">
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {resource.views} views
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {resource.title}
            </h1>

            <div className="mt-8 h-px w-full bg-gradient-to-r from-white/10 to-transparent" />

            <div className="mt-8 space-y-4">
              <a
                href={resource.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-purple-500/25 active:scale-[0.98]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resource
                </span>
                <div className="absolute inset-0 -translate-x-full transform bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
              </a>
            </div>

            <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-5">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">Resource Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Category</span>
                  <span className={`font-medium ${style.text}`}>{resource.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Views</span>
                  <span className="font-medium text-white">{resource.views}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Format</span>
                  <span className="font-medium text-white">Digital Download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
