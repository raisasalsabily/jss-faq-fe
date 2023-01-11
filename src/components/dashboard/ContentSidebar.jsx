import React, { useState } from "react"
import { Icon } from "@iconify/react"
import { NavLink } from "react-router-dom"

function ContentSidebar() {
  return (
    <aside className="w-[250px] h-min-content bg-transparent text-neutral-700 text-b-lg font-medium font-poppins">
      <div className="flex items-center gap-2 px-2">
        <Icon icon="mdi:cog" />
        <h1 className="text-b-sm font-bold">KELOLA KONTEN</h1>
      </div>
      <ul>
        <li className="relative">
          <NavLink
            className={`h-10 flex items-center px-10 overflow-hidden text-ellipsis whitespace-nowrap hover:text-teal-900 hover:bg-teal-50 hover:border-r-2 hover:border-teal-500 transition duration-300 ease-in-out`}
            to="/createfaq"
          >
            Pertanyaan
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            className={`h-10 flex items-center px-10 overflow-hidden text-ellipsis whitespace-nowrap hover:text-teal-900 hover:bg-teal-50 hover:border-r-2 hover:border-teal-500 transition duration-300 ease-in-out`}
            to="/createcategory"
          >
            Kategori
          </NavLink>
        </li>
        <li className="relative">
          <NavLink
            className={`h-10 flex items-center px-10 overflow-hidden text-ellipsis whitespace-nowrap hover:text-teal-900 hover:bg-teal-50 hover:border-r-2 hover:border-teal-500 transition duration-300 ease-in-out`}
            to="/createtag"
          >
            Tag
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}

export default ContentSidebar
