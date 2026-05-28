import SearchForm from "@/components/SearchForm"
import React from "react"
import Filters from "@/components/Filters"
import { getResources, getResourcesPlaylist, getLatestResources, getPopularResources } from "../../../sanity/actions"
import ResourceCard from "@/components/ResourceCard"
import Header from "@/components/Header"
import StatsBar from "@/components/StatsBar"
import CategoryShowcase from "@/components/CategoryShowcase"
import CTABanner from "@/components/CTABanner"

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
  const latestResources = await getLatestResources()
  const popularResources = await getPopularResources()

  return (
    <main className="flex flex-col w-full">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-blue-600/20 via-purple-600/10 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
          <div className="h-150 w-150 rounded-full bg-blue-500/20 blur-[120px]" />
        </div>
        <div className="pointer-events-none absolute right-0 top-40">
          <div className="h-100 w-100 rounded-full bg-purple-500/15 blur-[100px]" />
        </div>

        <div className="nav-padding relative mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center pt-16 pb-12 text-center sm:pt-24 sm:pb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Explore our resource library
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              JavaScript Mastery
              <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Resources</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base text-gray-400 sm:text-lg">
              Discover curated tutorials, cheat sheets, and tools to accelerate your web development journey.
            </p>

            <div className="mt-8 w-full max-w-2xl">
              <SearchForm />
            </div>

            <div className="mt-8">
              <Filters />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {!searchParams?.query && !searchParams?.category && (
          <>
            <div className="mt-10 sm:mt-16">
              <StatsBar />
            </div>

            <div className="mt-14 sm:mt-20">
              <CategoryShowcase />
            </div>

            <div className="mt-14 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />
          </>
        )}

        {(searchParams?.query || searchParams?.category) && (
          <section className="mt-6 w-full sm:mt-10">
            <Header
              type="Resources"
              query={searchParams?.query || ""}
              category={searchParams?.category || ""}
            />
            <div className="mt-8 flex w-full flex-wrap justify-center gap-8 sm:justify-start sm:gap-12">
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
                <div className="flex w-full flex-col items-center py-20 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/5 bg-white/2">
                    <svg className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-base text-gray-500">No resources found</p>
                  <p className="mt-1 text-sm text-gray-600">Try adjusting your search or filter</p>
                </div>
              )}
            </div>
          </section>
        )}

        {resourcesPlaylist?.length > 0 && resourcesPlaylist.map((item: any) => (
          <section key={item._id} className="mt-14 w-full sm:mt-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-8 w-1 rounded-full bg-linear-to-b from-blue-500 to-purple-500" />
              <h2 className="text-2xl font-bold text-white sm:text-3xl">{item.title}</h2>
            </div>
            <div className="flex w-full flex-wrap justify-center gap-8 sm:justify-start sm:gap-12">
              {item.resources?.length > 0 ? (
                item.resources.map((resource: any) => (
                  <ResourceCard
                    key={resource._id}
                    title={resource.title}
                    id={resource._id}
                    image={resource.image}
                    dowLoadNumber={resource.views}
                  />
                ))
              ) : (
                <p className="w-full py-8 text-center text-sm text-gray-500">No resources in this playlist yet</p>
              )}
            </div>
          </section>
        ))}

        {(!resourcesPlaylist || resourcesPlaylist.length === 0) && (
          <>
            {latestResources?.length > 0 && (
              <section className="mt-14 w-full sm:mt-20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-8 w-1 rounded-full bg-linear-to-b from-blue-500 to-purple-500" />
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">Latest Resources</h2>
                </div>
                <div className="flex w-full flex-wrap justify-center gap-8 sm:justify-start sm:gap-12">
                  {latestResources.map((resource: any) => (
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
            )}

            {popularResources?.length > 0 && (
              <section className="mt-14 w-full sm:mt-20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-8 w-1 rounded-full bg-linear-to-b from-purple-500 to-pink-500" />
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">Most Popular</h2>
                </div>
                <div className="flex w-full flex-wrap justify-center gap-8 sm:justify-start sm:gap-12">
                  {popularResources.map((resource: any) => (
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
            )}

            {(!latestResources || latestResources.length === 0) && (
              <div className="flex flex-col items-center py-32 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/5 bg-white/2">
                  <svg className="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">No resources yet</h3>
                <p className="mt-2 text-gray-400">Check back soon for new content</p>
              </div>
            )}
          </>
        )}

        {!searchParams?.query && !searchParams?.category && (
          <div className="mt-14 sm:mt-20">
            <CTABanner />
          </div>
        )}
      </div>
    </main>
  )
}

export default page
