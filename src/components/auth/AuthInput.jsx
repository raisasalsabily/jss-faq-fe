import React from "react"

export default function AuthInput({ type, id, name, onChange }) {
  return (
    <input
      onChange={onChange}
      type={type}
      id={id}
      name={name}
      class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-b-md text-neutral-900 border-0 border-b-2 border-neutral-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-700 peer"
    />
  )
}
