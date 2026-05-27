"use client"

import { useState } from "react"

const links = ["all", "next 13", "frontend", "backend", "fullstack"]

const Filters = () => {
    const[active ,setActive] = useState("") ;   

    const handleFilter = (link: string) => {
        setActive(link);
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
