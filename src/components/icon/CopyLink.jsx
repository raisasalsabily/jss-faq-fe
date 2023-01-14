import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Icon } from '@iconify/react';

function CopyLink() {
  return (
    <div className="w-10 h-10 rounded-full bg-teal-50 text-teal-900 flex justify-center items-center">
      <Icon icon="mdi:link-variant" />
    </div>
  )
}

export default CopyLink