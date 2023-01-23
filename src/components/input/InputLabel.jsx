import React from "react"

function InputLabel(props) {
  return (
    <label
      // for={props.for}
      className={`form-label inline-block mb-1 text-gray-700 text-b-md font-medium ${props.className}`}
    >
      {props.label}
    </label>
  )
}

InputLabel.defaultProps = {
  label: "Insert Label Name",
}

export default InputLabel
