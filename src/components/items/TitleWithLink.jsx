import React from "react"
import CopyLink from "../icon/CopyLink"

function TitleWithLink({ question }) {
  return (
    <div className="grid grid-cols-[auto_40px] items-center">
      {question ? (
        <h1 ratio={0.2} className="font-semibold text-h-sm md:text-h-md font-poppins text-neutral-900 pr-8">
          {question}
        </h1>
      ) : null}
      <CopyLink />
    </div>
  )
}

export default TitleWithLink
