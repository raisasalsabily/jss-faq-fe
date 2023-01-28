import React from "react"
import { Link } from "react-router-dom"

export default function SearchItem({ question, answer }) {
  return (
    <div className="mt-8 pb-8 border-b border-neutral-300">
      <div className="w-full">
        <Link to="/answer">
          <p className="w-11/12 text-b-lg text-neutral-800">{question}</p>
        </Link>
      </div>
      <div>
        <p className="mt-4 text-b-sm sm:text-b-md text-neutral-600 line-clamp">
          {answer}
        </p>
      </div>
    </div>
  )
}
