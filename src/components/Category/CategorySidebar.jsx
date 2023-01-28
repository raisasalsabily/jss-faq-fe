import React from "react"
import { Icon } from "@iconify/react"
import SingleList from "./SingleList"

function CategorySidebar({ cats }) {
  // const [isActive, setIsActive] = useState(false)

  // const handleClick = () => {
  //   setIsActive((current) => !current)
  // }

  return (
    <div
      className="w-full py-4 bg-white text-neutral-700 text-b-lg font-medium rounded-md
    "
    >
      <div className="px-10 py-4 md:px-6 md:py-2 mb-1 text-b-md font-bold flex items-center md:pl-0">
        <Icon icon="ic:outline-menu-open" className="w-6 h-6" />
        <p className="pl-1">KATEGORI</p>
      </div>
      <ul>
        {cats.map((c) =>
          c.show ? (
            <SingleList value={c.category} to={`/?cat=${c.category}`} />
          ) : null
        )}
      </ul>
    </div>
  )
}

export default CategorySidebar
