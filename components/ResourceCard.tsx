import Image from "next/image"
import Link from "next/link"

interface props {
  id: string
  title: string
  image: string
  dowLoadNumber: number
}

const ResourceCard = ({ id, title, image, dowLoadNumber }: props) => {
  return (
    <Link href={`/resource/${id}`} className="group block w-72">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent p-0.5 shadow-lg shadow-black/50 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/25">
        <div className="relative flex flex-col rounded-2xl bg-black-200 p-3 transition-all duration-500 group-hover:bg-black-200/80">
          <div className="relative mb-3 overflow-hidden rounded-xl">
            {image ? (
              <Image
                src={image}
                alt={title}
                className="h-56 w-full rounded-xl object-cover transition-all duration-500 group-hover:scale-110"
                width={384}
                height={440}
              />
            ) : (
              <div className="h-56 w-full rounded-xl bg-black-400" />
            )}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black-200/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <h3 className="paragraph-semibold line-clamp-1 mb-3 px-1 text-white">
            {title}
          </h3>

          <div className="flex items-center justify-between border-t border-white/5 px-1 pt-3">
            <div className="flex-center body-medium gap-1.5 text-gray-400">
              <Image src="/downloads.svg" alt="download" width={18} height={18} />
              {dowLoadNumber}
            </div>
            <span className="flex-center body-semibold gap-1.5 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Download
              <svg
                className="h-4 w-4 translate-x-0 text-purple-400 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ResourceCard
