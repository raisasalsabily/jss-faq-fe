import React from "react"

export default function AuthLabel({ _for, value }) {
  return (
    <label
      for={_for}
      className="absolute text-b-md text-neutral-500 dark:text-neutral-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-neutral-700 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
    >
      {value}
    </label>
  )
}
