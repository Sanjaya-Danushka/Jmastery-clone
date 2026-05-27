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
  key: string
  value: string | null
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params)
  // console.log(currentUrl, key, value)
  currentUrl[ key ] = value;
  return qs.stringifyUrl({
    url: window.location.href,
    query: currentUrl,
  },
  {
    // skipEmptyString: true,
    skipNull: true,
  })
}
