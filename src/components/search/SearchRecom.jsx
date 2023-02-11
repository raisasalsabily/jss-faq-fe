import React from "react"
import { Link, useNavigate } from "react-router-dom"

export default function SearchRecom({
  query,
  setQuery,
  searchRec,
  recOpen,
  setRecOpen,
}) {
  const nav = useNavigate()

  return (
    <div className="relative z-10 flex flex-col justify-center items-center">
      {query ? (
        <ul
          className={`absolute top-0 w-[320px] md:w-[640px] mt-1 bg-white overflow-y-auto rounded-xl ${
            recOpen ? "max-h-60 border border-neutral-200" : "max-h-0"
          }`}
        >
          {searchRec?.map((searchRec) => (
            <Link to={`/post/${searchRec?.slug}`}>
              <li
                key={searchRec?._id}
                className={`p-4 text-sm hover:bg-neutral-100 hover:text-neutral-800 transition list-none text-b-md border-b border-neutral-100`}
                onClick={() => {
                  if (
                    searchRec?.question?.toLowerCase() !== query.toLowerCase()
                  ) {
                    setQuery(searchRec?.question)
                    setRecOpen((current) => !current)
                  }
                }}
              >
                {searchRec?.question}
              </li>
            </Link>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
