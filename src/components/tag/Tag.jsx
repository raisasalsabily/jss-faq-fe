import React from "react"

function tag(props) {
  return (
    <a href="#">
      <div
        className={
          "min-w-min px-6 py-2 bg-teal-50 text-teal-900 text-b-sm font-bold rounded-md " +
          props.className
        }
      >
        <p>{props.tag}</p>
      </div>
    </a>
  )
}

export default tag
