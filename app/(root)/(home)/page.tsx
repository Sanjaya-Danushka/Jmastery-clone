import SearchForm from "@/components/SearchForm"
import React from "react"
import Filters from "@/components/Filters"
import { getResources, getResourcesPlaylist } from "../../../sanity/actions"
import ResourceCard from "@/components/ResourceCard"
import Header from "@/components/Header"

interface props {
  searchParams: { [key: string]: string | undefined }
}
const page = async (props: props) => {
  const searchParams = await props.searchParams
  const resources = await getResources({
    page: "1",
    query: searchParams?.query || "",
    category: searchParams?.category || "",
  })

  const resourcesPlaylist = await getResourcesPlaylist()

    return (
    <main className="flex flex-col w-full max-w-screen-2xl mx-auto">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-68.5 w-full flex-col rounded-xl bg-[url('/jsm_resources_banner.svg')] bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            JavaScript Mastery Resources
          </h1>
        </div>
        <SearchForm />
        <Filters />

        {(searchParams?.query || searchParams?.category) && (
          <section className="flex-center mt-6 w-full flex-col sm:mt-20">
            <Header
              type="Resources"
              query={searchParams?.query || ""}
              category={searchParams?.category || ""}
            />
            <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
              {resources.length > 0 ? (
                resources.map((resource: any) => (
                  <ResourceCard
                    key={resource._id}
                    title={resource.title}
                    id={resource._id}
                    image={resource.image}
                    dowLoadNumber={resource.views}
                  />
                ))
              ) : (
                <p className="body-regular text-white-400">
                  No resources found
                </p>
              )}
            </div>
          </section>
        )}
      </section>

      {resourcesPlaylist?.length > 0 && resourcesPlaylist.map((item: any) => (
        <section
          key={item._id}
          className="flex-center mt-6 w-full flex-col sm:mt-20"
        >
          <h1 className="heading3 text-white-800 self-start">{item.title}</h1>
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {item.resources?.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                dowLoadNumber={resource.views}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default page
