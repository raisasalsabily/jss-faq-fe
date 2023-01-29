import React from "react"

export default function SearchRecom({
  query,
  setQuery,
  searchRec,
  recOpen,
  setRecOpen,
}) {
  return (
    <div className="relative z-10 flex flex-col justify-center items-center">
      {query ? (
        <ul
          className={`absolute top-0 w-[320px] md:w-[640px] mt-1 bg-white overflow-y-auto  rounded-xl ${
            recOpen ? "max-h-60 border border-neutral-200" : "max-h-0"
          }`}
        >
          {searchRec?.map((searchRec) => (
            <li
              key={searchRec?._id}
              className={`p-2 text-sm hover:bg-neutral-100 list-none`}
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
          ))}
        </ul>
      ) : null}
    </div>
  )
}
