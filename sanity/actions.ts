import { groq } from "next-sanity"
import { readClient } from "./lib/client"
import { buildQuery } from "./utils"
interface GetResourcesParams {
  query?: string
  category?: string
  page: string
}


export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcesPlaylist"]{
        title,
        _id,
        resources[0...6]->{
          title,
          _id,
          downloadLink,
          "image": poster.asset->url,
          views,
          category
        }
      }`
    )

    return resources
  } catch (error) {
    console.error("Error fetching resources:", error)
    throw error
  }
}

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params
  try {
    const resourcesQuery = await readClient.fetch(
      groq`${buildQuery({
        type: "resources",
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        downloadLink,
        "image" :poster.asset->url,
        views,
        slug,
        category
      }`
      
    )

    return resourcesQuery
  } catch (error) {
    console.error("Error fetching resources:", error)
    throw error
  }
}
