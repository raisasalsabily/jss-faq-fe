import React from "react"
// import CopyLink from "../icon/CopyLink"

function Title({ question }) {
  return (
    <div className="">
      {question ? (
        <h1 ratio={0.2} className="font-semibold text-h-sm md:text-h-md font-poppins text-neutral-900">
          {question}
        </h1>
      ) : null}
      {/* <CopyLink /> */}
    </div>
  )
}

export default Title
