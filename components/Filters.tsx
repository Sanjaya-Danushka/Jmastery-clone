"use client"

import { formUrlQuery } from "@/sanity/utils"
import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"

const links = ["all", "next 13", "frontend", "backend", "fullstack"]

const Filters = () => {
  const searchParams = useSearchParams()
  const [active, setActive] = useState(searchParams.get("category") || "")
  const router = useRouter()

  const handleFilter = (link: string) => {
    let newUrl = ""
    if (active === link) {
      setActive("")
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keyToRemove: ["category"],
        key: "category",
        value: null,
      })
    } else {
      setActive(link)
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: link.toLowerCase(),
      })
    }

    router.push(newUrl, { scroll: false })
  }

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {links.map((link) => {
        const isActive = active === link
        return (
          <button
            key={link}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-500/20"
                : "border border-white/10 bg-white/4 text-gray-400 hover:border-white/20 hover:text-white"
            }`}
            onClick={() => handleFilter(link)}
          >
            {link}
          </button>
        )
      })}
    </div>
  )
}

export default Filters
