import React, { useEffect } from "react"
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"
import { Icon } from "@iconify/react"
import Tooltip from "../popconfirm/Tooltip"
import toast, { Toaster } from "react-hot-toast"

export default function SocmedBtn({ question }) {
  const url = window.location.href

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(url)
      toast.success("Tautan berhasil disalin")
    } catch (err) {
      toast.error("Ada kesalahan")
    }
  }

  useEffect(() => {}, [])

  return (
    <div className="flex gap-2">
      <Tooltip content="Tautan">
        <button onClick={handleCopy}>
          <SocmedRound icon="mdi:link-variant" />
        </button>
      </Tooltip>
      <Tooltip content="Twitter">
        <TwitterShareButton
          url={url}
          title={`Cari tahu terkait "${question}" via`}
        >
          <SocmedRound icon="mdi:twitter" />
        </TwitterShareButton>
      </Tooltip>
      <Tooltip content="Whatsapp">
        <WhatsappShareButton
          url={url}
          title={`Cari tahu terkait "${question}" via`}
        >
          <SocmedRound icon="ri:whatsapp-fill" />
        </WhatsappShareButton>
      </Tooltip>
      <Tooltip content="Facebook">
        <FacebookShareButton
          url={url}
          quote={`Cari tahu terkait "${question}" via`}
        >
          <SocmedRound icon="ri:facebook-fill" />
        </FacebookShareButton>
      </Tooltip>
    </div>
  )
}

const SocmedRound = ({ icon }) => {
  return (
    <div className="p-1 bg-neutral-100 rounded-full text-neutral-500 text-b-md hover:bg-white transition hover:text-neutral-300">
      <Icon icon={icon} />
    </div>
  )
}
