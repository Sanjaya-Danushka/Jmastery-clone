interface props {
  type: string
  query: string
  category: string
}

const Header = ({ type, query, category }: props) => {
  const getMessage = () => {
    if (query && category) {
      return (
        <>
          Results for "<span className="text-white">{query}</span>" in{" "}
          <span className="capitalize text-white">{category}</span>
        </>
      )
    }
    if (query) {
      return (
        <>
          Results for "<span className="text-white">{query}</span>"
        </>
      )
    }
    if (category) {
      return (
        <>
          <span className="capitalize text-white">{category}</span> Resources
        </>
      )
    }
    return <>No Results</>
  }

  return (
    <div className="flex items-center gap-3">
      <div className="h-6 w-1 rounded-full bg-linear-to-b from-blue-500 to-purple-500" />
      <h2 className="text-xl font-semibold text-gray-300 sm:text-2xl">
        {getMessage()}
      </h2>
    </div>
  )
}

export default Header
