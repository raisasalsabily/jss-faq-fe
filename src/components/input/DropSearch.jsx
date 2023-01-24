import React, { useState } from "react"
import { Icon } from "@iconify/react"

export default function DropSearch({ cats, setCategory, placeholder, initValue = "" }) {
  const [dropInput, setDropInput] = useState("") // input value for category dropdown
  const [dropSelected, setDropSelected] = useState(initValue) // selected value of category dropdown
  const [dropOpen, setDropOpen] = useState("") //dropdown open or close

  return (
    <div id="drop-search" className="w-full text-b-md">
      <div
        onClick={() => {
          setDropOpen(!dropOpen)}}
        className={`bg-white box-border w-full p-2 flex items-center justify-between rounded border border-neutral-200 ${
          !dropSelected && "text-neutral-300"
        }`}
      >
        {/* show selected value */}
        {dropSelected
          ? dropSelected?.length > 40
            ? dropSelected?.substring(0, 40) + "..."
            : dropSelected
          : "Pilih kategori"}
        <Icon
          icon="material-symbols:keyboard-arrow-down-rounded"
          className={`w-6 h-6 ${dropOpen ? "rotate-180" : null}`}
        />
      </div>
      {/* drop list start */}
      <ul
        className={`bg-white mt-2 overflow-y-auto   ${
          dropOpen ? "max-h-60 border border-neutral-200" : "max-h-0"
        }`}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <Icon
            icon="ph:magnifying-glass"
            className="w-4 h-4 text-neutral-500"
          />
          <input
            value={dropInput}
            onChange={(e) => setDropInput(e.target.value.toLowerCase())}
            type="text"
            placeholder={placeholder}
            className="placeholder:text-neutral-500 p-2 outline-none"
          ></input>
        </div>

        {cats?.map((cats) => (
          <li
            key={cats?.category}
            className={`p-2 text-sm hover:bg-teal-500 hover:text-white ${
              cats?.category?.toLowerCase() === dropSelected?.toLowerCase() &&
              "bg-teal-500 text-white"
            } ${
              cats?.category?.toLowerCase().startsWith(dropInput)
                ? "block"
                : "hidden"
            }`}
            onClick={(e) => {
              if (
                cats?.category?.toLowerCase() !== dropSelected.toLowerCase()
              ) {
                setDropSelected(cats?.category)
                setDropOpen(false)
                setDropInput("")

                setCategory(cats?.category)
              }
            }}
          >
            {cats?.category}
          </li>
        ))}
      </ul>
      {/* drop list end */}
    </div>
  )
}
