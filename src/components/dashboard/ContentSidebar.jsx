import React from "react"
import { Icon } from "@iconify/react"
import SingleList from "../Category/SingleList"

function ContentSidebar(props) {
  // const [isActive, setIsActive] = useState(false)

  // const handleClick = () => {
  //   setIsActive((current) => !current)
  // }

  return (
    <aside className="w-full h-min-content text-neutral-700 text-b-lg font-medium">
      <div className="h-10 text-b-sm font-bold flex items-center transition duration-300 ease-in-out">
        <Icon icon="mdi:cog" className="w-4 h-4" />
        <p className="pl-2">KELOLA KONTEN</p>
      </div>
      <ul className="">
        {props.content &&
          props.content.map((obj) => {
            return <SingleList value={obj.value} to={obj.url} key={obj.value} />
          })}
      </ul>
    </aside>
  )
}

export default ContentSidebar
