"use client"

import { formUrlQuery } from "@/sanity/utils"
import { useRouter, useSearchParams } from "next/navigation"

const categories = [
  {
    title: "Frontend",
    slug: "frontend",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "emerald",
    desc: "HTML, CSS, JavaScript & modern frameworks",
  },
  {
    title: "Backend",
    slug: "backend",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    color: "blue",
    desc: "APIs, databases, server logic & auth",
  },
  {
    title: "Next 13",
    slug: "next 13",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "purple",
    desc: "App Router, Server Components & more",
  },
  {
    title: "Fullstack",
    slug: "fullstack",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    color: "amber",
    desc: "End-to-end projects & architectures",
  },
]

const colorMap: Record<string, { bg: string; border: string; text: string; hover: string; glow: string }> = {
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    text: "text-emerald-400",
    hover: "group-hover:border-emerald-500/40 group-hover:bg-emerald-500/15",
    glow: "group-hover:shadow-emerald-500/10",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    text: "text-blue-400",
    hover: "group-hover:border-blue-500/40 group-hover:bg-blue-500/15",
    glow: "group-hover:shadow-blue-500/10",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    text: "text-purple-400",
    hover: "group-hover:border-purple-500/40 group-hover:bg-purple-500/15",
    glow: "group-hover:shadow-purple-500/10",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    text: "text-amber-400",
    hover: "group-hover:border-amber-500/40 group-hover:bg-amber-500/15",
    glow: "group-hover:shadow-amber-500/10",
  },
}

const CategoryShowcase = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleCategoryClick = (slug: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "category",
      value: slug,
    })
    router.push(newUrl, { scroll: false })
  }

  return (
    <section>
      <div className="flex items-center gap-4 mb-8">
        <div className="h-8 w-1 rounded-full bg-linear-to-b from-blue-500 to-purple-500" />
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Browse by Category</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat) => {
          const c = colorMap[cat.color]
          return (
            <button
              key={cat.slug}
              onClick={() => handleCategoryClick(cat.slug)}
              className={`group relative overflow-hidden rounded-2xl border ${c.border} ${c.bg} p-6 text-left transition-all duration-300 ${c.hover} ${c.glow} shadow-lg`}
            >
              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${c.bg} ${c.text} transition-colors duration-300`}>
                {cat.icon}
              </div>
              <h3 className={`text-lg font-semibold text-white transition-colors duration-300`}>
                {cat.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {cat.desc}
              </p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-gray-500 transition-colors duration-300 group-hover:text-white">
                Browse resources
                <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)" }} />
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default CategoryShowcase
