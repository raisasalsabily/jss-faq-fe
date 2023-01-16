import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function FaqItem({
  title,
  content,
  category,
  tag,
  _id,
  faqRoute,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLong, setIsLong] = useState(false)

  useEffect(() => {
    if (content.length > 250) setIsLong(true)
  }, [content])

  return (
    <div className="mt-8 pb-8 border-b border-neutral-300">
      <div
        className="flex justify-around w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="w-11/12 text-b-lg text-neutral-800">{title}</p>
        <button className="w-1/12 text-right">{isOpen ? "-" : "+"}</button>
      </div>

      <div
        className={`transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="mt-4 text-b-sm sm:text-b-md text-neutral-600 line-clamp">
          {content}
        </p>
        {isLong ? (
          <Link to={`/post/${_id}`}>
            <button className="mt-2 text-b-sm sm:text-b-md text-teal-500 hover:text-teal-700 transition">
              Baca selengkapnya
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  )
}
