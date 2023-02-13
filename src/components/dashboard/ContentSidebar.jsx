import React, { useState } from "react"
import { Icon } from "@iconify/react"
import SingleList from "../Category/SingleList"

function ContentSidebar({ content }) {
  return (
    <aside className="w-full h-min-content text-neutral-700 text-b-lg font-medium">
      <div className="h-10 text-b-md font-bold flex items-center transition duration-300 ease-in-out">
        <Icon icon="mdi:cog" className="w-4 h-4" />
        <p className="pl-2">KELOLA KONTEN</p>
      </div>
      <ul>
        {content &&
          content.map((c, idx) => {
            return (
              <div
                key={c._id}
                style={{
                  animationDuration: `${300 + idx * 50}ms`,
                }}
                className="fade"
              >
                <SingleList value={c.value} to={c.url} key={c.value} />
              </div>
            )
          })}
      </ul>
    </aside>
  )
}

export default ContentSidebar
