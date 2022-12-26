import React from "react"

function Sidebar({ sidebar }) {
  return (
    <div
      id="sidebar"
      className={`absolute bg-white text-black top-0 left-0 h-[100vh] w-[280px] -translate-x-full transition-all duration-200 p-6 ${
        sidebar ? "-translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="text-sm font-medium text-slate-400">
        <li className="p-2">Beranda</li>
        <li className="p-2">Panduan</li>
        <li className="p-2">Bantuan</li>
        <li className="p-2">FAQ</li>
      </ul>
    </div>
  )
}

export default Sidebar
