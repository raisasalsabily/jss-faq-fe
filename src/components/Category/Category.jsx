import React, { useState } from "react"

function Category(props) {
  return (
    <li className="relative">
      <a
        className={`h-10 flex items-center px-10 overflow-hidden text-ellipsis whitespace-nowrap hover:text-teal-900 hover:bg-teal-50 hover:border-r-2 hover:border-teal-500 transition duration-300 ease-in-out`}
        href="#!"
        data-mdb-ripple="true"
        data-mdb-ripple-color="black"
        // onClick={handleClick}
      >
        {props.value}
      </a>
    </li>
  )
}

export default Category

// ${isActive ? "bg-teal-50" : "bg-white"}
