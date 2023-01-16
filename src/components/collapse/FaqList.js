import React from "react"
import FaqItem from "./FaqItem"

export default function FaqList({ data, category }) {
  return (
    <div>
      {category ? <h4 className="text-h-sm font-bold">{category}</h4> : null}

      <div className={category ? "sm:ml-4" : null}>
        {data.map(({ question, answer, category, tag, _id }) => (
          <FaqItem
            title={question}
            content={answer}
            category={category}
            tag={tag}
            _id={_id}
          />
        ))}
      </div>
    </div>
  )
}
