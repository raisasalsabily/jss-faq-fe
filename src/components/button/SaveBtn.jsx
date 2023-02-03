import React from "react"
import { Icon } from "@iconify/react"

function SaveBtn({ value }) {
  return (
    <button
      className="w-[100px] h-[40px] rounded-md font-poppins text-neutral-100 gap-1 flex justify-center items-center bg-teal-500"
      type="submit"
    >
      <Icon icon="mdi:content-save" />
      <p>{value}</p>
    </button>
  )
}

export default SaveBtn

SaveBtn.defaultProps = {
  value: "Simpan",
}
