import React from "react"
import { Icon } from "@iconify/react"
import SingleList from "./SingleList"

function CategorySidebar({ cats }) {
  // const [isActive, setIsActive] = useState(false)

  // const handleClick = () => {
  //   setIsActive((current) => !current)
  // }

  return (
    <aside
      className="hidden w-[351px] h-min-content bg-white text-neutral-700 text-b-lg font-medium border-r border-neutral-200
    "
    >
      <button className="h-10 text-b-sm font-bold flex items-center">
        <Icon icon="ic:outline-menu-open" className="w-6 h-6" />
        <p className="pl-2">KATEGORI</p>
      </button>
      <ul>
        {cats.map((c) =>
          c.show ? (
            <SingleList value={c.category} to={`/?cat=${c.category}`} />
          ) : null
        )}
      </ul>
    </aside>
  )
}

export default CategorySidebar
