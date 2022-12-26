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
        <li className="p-2">
          <a href="https://jss.jogjakota.go.id/v4">Beranda</a>
        </li>
        <li className="p-2">
          <a href="https://help.jogjakota.go.id/livechat.html?channel=oaTnqVdEL9xvWA8VigoLpDgk">
            Bantuan
          </a>
        </li>
        <li className="p-2">
          <a href="https://jss.jogjakota.go.id/v4/panduan">Panduan</a>
        </li>
        <li className="p-2">
          <a href="#">FAQ</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
