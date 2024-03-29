import React from "react"
import { useNavigate } from "react-router-dom"

function Tag(props) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/search`, {
      state: {
        homeQuery: props.tag,
      },
    })
  }
  return (
    <button
      onClick={handleClick}
      className={`min-w-min px-6 py-2 bg-teal-50 text-teal-900 text-b-sm font-bold rounded-md hover:bg-teal-500 hover:text-neutral-100 transition ${props.className}`}
    >
      <p>{props.tag}</p>
    </button>
  )
}

export default Tag
