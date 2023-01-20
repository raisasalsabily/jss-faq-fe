import React from "react"
import FaqItem from "./FaqItem"
import { Icon } from '@iconify/react';

export default function FaqList({ data, category }) {
  return (
    <div>
      <div className="flex flex-row">
        <button className="md:hidden">
          <Icon icon="material-symbols:chevron-right-rounded" />
        </button>
        {category ? <h4 className="text-h-sm font-bold">{category}</h4> : null}
      </div>
      

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
