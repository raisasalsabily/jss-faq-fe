import React from "react"

function TxtInput(props) {
  return (
    <input
      type="text"
      className={`form-control block w-full px-3 py-1.5 text-b-md font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-neutral-200 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none ${props.className}`}
      id={props.id}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      name={props.name}
      required={props.required}
    />
  )
}

TxtInput.defaultProps = {
  placeholder: "Insert placeholder",
}

export default TxtInput
