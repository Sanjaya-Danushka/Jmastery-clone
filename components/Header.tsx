interface props {
  type: string
  query: string
  category: string
}

const Header = ({ type, query, category }: props) => {
  if (query && category) {
    return (
      <h1 className="heading3 text-white-800 self-start">
        Search Results for "{query}" in {category}
      </h1>
    )
  }
  if (query) {
    return (
      <h1 className="heading3 text-white-800 self-start">
        Search Results for "{query}"
      </h1>
    )
  }
  if (category) {
    return (
      <h1 className="heading3 text-white-800 self-start">
        <span className="capitalize">{category}</span> Resources
      </h1>
    )
  }
  return <h1 className="heading3 text-white-800 self-start">No Results</h1>
}

export default Header
