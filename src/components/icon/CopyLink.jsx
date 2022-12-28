import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopy } from "@fortawesome/free-regular-svg-icons"

function CopyLink() {
  return (
    <div className="w-10 h-10 rounded-full bg-neutral-100 text-neutral-600 flex justify-center items-center">
      <FontAwesomeIcon icon={faCopy} />
    </div>
  )
}

export default CopyLink
