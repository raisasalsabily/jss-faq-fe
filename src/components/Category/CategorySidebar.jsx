import React, { useState } from "react"
import SingleList from "./SingleList"
import CategoryBtn from "./CategoryBtn"

function CategorySidebar({ cats }) {
  // const [isActive, setIsActive] = useState(false)

  // const handleClick = () => {
  //   setIsActive((current) => !current)
  // }

  return (
    <aside className="w-[351px] h-min-content bg-white text-neutral-700 text-b-lg font-medium border-r border-neutral-200">
      <CategoryBtn />
      <ul>
        {cats.map((c) => (c.show ? <SingleList value={c.category} /> : null))}
      </ul>
    </aside>
  )
}

export default CategorySidebar
