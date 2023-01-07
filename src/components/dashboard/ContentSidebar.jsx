import React, { useState } from "react"
import { Icon } from '@iconify/react';

function ContentSidebar() {
  return (
    <aside className="w-[250px] h-min-content bg-transparent text-neutral-700 text-b-lg font-medium font-poppins border-r border-neutral-200">
        <div className="flex items-center gap-2 px-2">
            <Icon icon="mdi:cog" />
            <h1 className="text-b-sm">KELOLA KONTEN</h1>
        </div>        
        <ul>
            <li className="relative">
                <a
                    className={`h-10 flex items-center px-10 overflow-hidden text-ellipsis whitespace-nowrap hover:text-teal-900 hover:bg-teal-50 hover:border-r-2 hover:border-teal-500 transition duration-300 ease-in-out`}
                    href="Pertanyaan"
                >
                    Pertanyaan
                </a>
            </li>
            <li className="relative">
                <a
                    className={`h-10 flex items-center px-10 overflow-hidden text-ellipsis whitespace-nowrap hover:text-teal-900 hover:bg-teal-50 hover:border-r-2 hover:border-teal-500 transition duration-300 ease-in-out`}
                    href="Kategori"
                >
                    Kategori
                </a>
            </li>
            <li className="relative">
                <a
                    className={`h-10 flex items-center px-10 overflow-hidden text-ellipsis whitespace-nowrap hover:text-teal-900 hover:bg-teal-50 hover:border-r-2 hover:border-teal-500 transition duration-300 ease-in-out`}
                    href="Tag"
                >
                    Tag
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default ContentSidebar
