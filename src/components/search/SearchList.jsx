import React from "react"
import SearchItem from "./SearchItem"

export default function SearchList({ data, category }) {
  return (
    <div>
      {category && <h4 className="pt-5 text-h-sm font-bold">{category}</h4>}

      <div className={category && "sm:ml-4"}>
        {data.map(({ title, article }) => (
          <SearchItem title={title} content={article} />
        ))}
      </div>
    </div>
  )
}
