import React from "react"

function AnswerDesc({ answer }) {
  return answer ? (
    <p className="text-neutral-700 text-b-md text-justify md:text-b-lg py-3">{answer}</p>
  ) : null
}

export default AnswerDesc
