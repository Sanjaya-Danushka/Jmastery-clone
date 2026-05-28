import qs from "query-string"

interface BuildQueryParams {
  type: string
  query?: string
  category?: string
  page: number
  perPage?: number
}

export function buildQuery(params: BuildQueryParams) {
  const { type, query, category, page = 1, perPage = 10 } = params
  const conditions = [`_type == "${type}"`]
  if (query) {
    conditions.push(`title match "*${query}*"`)
  }
  if (category && category !== "all") {
    conditions.push(`category == "${category}"`)
  }
  const offset = (page - 1) * perPage
  const limit = perPage

  return `*[${conditions.join(" && ")}] | order(_createdAt desc) [${offset}...${limit}]`
}
interface UrlQueryParams {
  params: string
  key?: string
  value?: string | null
  keyToRemove?: string[]
}

export function formUrlQuery({
  params,
  key,
  value,
  keyToRemove,
}: UrlQueryParams) {
  const currentUrl = qs.parse(params)

  if (keyToRemove) {
    keyToRemove.forEach((keyToRemove) => {
      delete currentUrl[keyToRemove]
    })
  } else if (key && value) {
    currentUrl[key] = value
  } else if (key && value === null) {
    delete currentUrl[key]
  }

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    {
      skipNull: true,
    }
  )
}
