import React from "react"

export default function DropBasic({ name, id, value, data, onChange }) {
  return (
    <select
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      className="text-b-md border block min-w-min max-w-full px-3 py-1.5 font-normal text-gray-700 bg-white bg-clip-padding border-solid border-neutral-200 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    >
      {data
        ? data.map(({ _id, role }) => (
            <option key={_id} value={role}>
              {role}
            </option>
          ))
        : null}
    </select>
  )
}
