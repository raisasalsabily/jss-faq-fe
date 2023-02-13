import React from "react"
import { Link } from "react-router-dom"
import SearchItem from "./SearchItem"

export default function SearchList({ data, category }) {
  return (
    <div>
      <div className={category && "sm:ml-4"}>
        {data.map(({ _id, question, answer, slug }) => (
          <Link to={`/post/${slug}`} key={_id}>
            <SearchItem question={question} answer={answer} />
          </Link>
        ))}
      </div>
    </div>
  )
}
