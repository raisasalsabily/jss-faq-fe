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
      className="w-full h-full bg-white text-neutral-700 text-b-lg font-medium border-r border-neutral-200
    "
    >
      <div className="h-10 text-b-sm font-bold flex items-center pt-2">
        <Icon icon="ic:outline-menu-open" className="w-6 h-6" />
        <p className="pl-2">KATEGORI</p>
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
