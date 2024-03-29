import React, { useState, useEffect } from "react"
import { Icon } from "@iconify/react"
import CopiedLink from "../popconfirm/CopiedLink"

function CopyLink() {
  const [url, setUrl] = useState("")
  const [copied, setCopied] = useState(false)

  // get current url
  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
  }

  setTimeout(() => {
    setCopied(false)
  }, 2200)

  return (
    <div>
      <button
        className="w-10 h-10 rounded-full bg-teal-50 text-teal-900 flex justify-center items-center hover:-rotate-12 transition"
        onClick={handleCopy}
      >
        <Icon icon="mdi:link-variant" />
      </button>
      {copied && <CopiedLink />}
    </div>
  )
}

export default CopyLink
