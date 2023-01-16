import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Icon } from "@iconify/react"

function CopyLink() {
  const [url, setUrl] = useState("")

  // get current url
  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
  }

  return (
    <button
      className="w-10 h-10 rounded-full bg-teal-50 text-teal-900 flex justify-center items-center"
      onClick={handleCopy}
    >
      <Icon icon="mdi:link-variant" />
    </button>
  )
}

export default CopyLink
