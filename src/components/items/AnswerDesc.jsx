import React from "react"

function AnswerDesc({ answer }) {
  return answer ? (
    <p className="text-neutral-900 text-b-md md:text-b-lg py-3">{answer}</p>
  ) : null
}

export default AnswerDesc
