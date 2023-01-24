import React from "react"
import DOMPurify from "dompurify"

function AnswerDesc({ answer }) {
  return answer ? (
    <p
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(answer) }}
      className="set-inner-html text-neutral-700 text-b-md text-justify md:text-b-lg py-3"
    />
  ) : null
}

export default AnswerDesc
