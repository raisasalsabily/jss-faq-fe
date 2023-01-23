import React from "react"

function AnswerDesc({ answer }) {
  return answer ? (
    <p
      dangerouslySetInnerHTML={{ __html: answer }}
      className="text-neutral-700 text-b-md text-justify md:text-b-lg py-3"
    />
  ) : null
}

export default AnswerDesc

// <p className="text-neutral-700 text-b-md text-justify md:text-b-lg py-3">{answer}</p>
