import React, { useState } from "react"
import { NavLink } from "react-router-dom"

function Category(props) {
  return (
    <li className="relative">
      <NavLink
        className={`px-10 py-3 md:px-10 md:py-2 flex items-center overflow-hidden text-ellipsis whitespace-nowrap text-neutral-700 hover:text-teal-900 hover:bg-teal-50 hover:border-r-2 hover:border-teal-500 transition duration-300 ease-in-out`}
        to={props.to}
        data-mdb-ripple="true"
        data-mdb-ripple-color="black"
        // onClick={handleClick}
      >
        {props.value}
      </NavLink>
    </li>
  )
}

export default Category

// ${isActive ? "bg-teal-50" : "bg-white"}
