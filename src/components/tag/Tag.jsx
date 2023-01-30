import React from "react"
import { Link, useNavigate } from "react-router-dom"

function tag(props) {
  return (
    <Link to={`/search?query=${props.tag}`}>
      <div
        className={
          `min-w-min px-6 py-2 bg-teal-50 text-teal-900 text-b-sm font-bold rounded-md hover:bg-teal-500 hover:text-neutral-100 transition ${props.className}`}          
      >
        <p>{props.tag}</p>
      </div>
    </Link>
  )
}

export default tag
