import React, { useState } from "react"
import { Icon } from "@iconify/react"
import SingleList from "../Category/SingleList"
import CategoryBtn from "../Category/CategoryBtn"

function ContentSidebar(props) {
  // const [isActive, setIsActive] = useState(false)

  // const handleClick = () => {
  //   setIsActive((current) => !current)
  // }

  return (
    <aside className="w-[351px] h-min-content text-neutral-700 text-b-lg font-medium border-r border-neutral-200">
      <div className="h-10 text-b-sm font-bold flex items-center hover:bg-teal-900 hover:text-white transition duration-300 ease-in-out">
        <Icon icon="mdi:cog" className="w-4 h-4" />
        <p className="pl-2">KELOLA KONTEN</p>
      </div>
      <ul className="">
        <SingleList value={props.value1} to={props.to1} />
        <SingleList value={props.value2} to={props.to2} />
        <SingleList value={props.value3} to={props.to3} />
      </ul>
    </aside>
  )
}

export default ContentSidebar
