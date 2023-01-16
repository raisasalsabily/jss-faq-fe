import React from "react"
import CopyLink from "../icon/CopyLink"

function TitleWithLink({ question }) {
  return (
    <div className="grid grid-cols-[auto_40px] items-center">
      {question ? (
        <h1 className="font-semibold text-h-sm md:text-h-md font-poppins text-neutral-900">
          {question}
        </h1>
      ) : null}
      <CopyLink />
    </div>
  )
}

export default TitleWithLink
