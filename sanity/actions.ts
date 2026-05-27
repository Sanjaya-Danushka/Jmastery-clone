import { groq } from "next-sanity"
import { readClient } from "./lib/client"
import { buildQuery } from "./utils"

interface GetResourcesParams {
  query?: string
  category?: string
  page: string
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
