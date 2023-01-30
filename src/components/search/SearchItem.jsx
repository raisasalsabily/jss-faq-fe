import React from "react"
import DOMPurify from "dompurify"

export default function SearchItem({ question, answer }) {
  return (
    <div className="mt-8 pb-8 border-b border-neutral-300">
      <div className="w-full">
          <p className="w-11/12 text-b-lg text-neutral-800 font-medium">{question}</p>
      </div>
      <div>
        <p className="mt-4 text-b-sm sm:text-b-md text-neutral-500 line-clamp" dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(answer),
            }} />
          {/* {answer}
        </p> */}
      </div>
    </div>
  )
}
