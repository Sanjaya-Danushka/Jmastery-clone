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
    <ul className="text-white-800 boy-text mx-auto no-scrollbar flex max-w-full justify-center gap-2 overflow-x-auto py-12 sm:max-w-2xl">
      {links.map((Link) => (
        <button
          key={Link}
          className={`rounded-lg px-8 py-2.5 whitespace-nowrap capitalize ${active === Link ? "bg-blue-500 text-white" : ""}`}
          onClick={() => {
              handleFilter(Link) ;
          }}
        >
          {Link}
        </button>
      ))}
    </ul>
  )
}

export default Filters
