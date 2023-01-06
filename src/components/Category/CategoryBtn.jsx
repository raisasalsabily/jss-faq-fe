import React from "react"
import { Icon } from "@iconify/react"

function CategoryBtn() {
  return (
    <div id="category-button">
      <a
        href="#!"
        className="h-10 text-b-sm font-bold flex items-center hover:bg-teal-900 hover:text-white transition duration-300 ease-in-out"
      >
        <Icon icon="ic:outline-menu-open" className="w-6 h-6" />
        <p className="pl-2">KATEGORI</p>
      </a>
    </div>
  )
}

export default CategoryBtn
