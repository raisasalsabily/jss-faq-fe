import React from "react"
import Select from "react-select"
import DropInputStyle from "./DropInputStyle.jsx" // import style for DropInput

const colourOptions = [
  { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630", isFixed: true },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
]

function DropInput(props) {
  return (
    <div className={"w-[454px] text-b-sm text-neutral-800" + props.className}>
      <Select
        placeholder={props.placeholder}
        className="basic-single"
        classNamePrefix="select"
        // defaultValue={colourOptions[0]}
        isDisabled={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name="color"
        options={colourOptions}
        styles={DropInputStyle}
      />
    </div>
  )
}

export default DropInput

DropInput.defaultProps = {
  placeholder: "Masukkan kategori",
}

// https://stackoverflow.com/questions/67933292/how-to-pass-dropdown-values-into-mongodb-in-react
