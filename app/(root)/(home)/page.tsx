import SearchForm from "@/components/SearchForm"
import React from "react"
import Filters from "@/components/Filters"

const page = () => {
  return (
    <main className="flex-center padding col mx-auto flex w-full max-w-screen-2xl">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-68.5 w-full flex-col rounded-xl bg-[url('/jsm_resources_banner.svg')] bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            JavaScript Mastery Resources
          </h1>
        </div>
        <SearchForm />
        <Filters />
      </section>
    </main>
  )
}

export default page
