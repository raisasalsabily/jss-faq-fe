import React from "react"

export default function AuthInput({
  type,
  id,
  name,
  onChange,
  errors,
  _for,
  label,
}) {
  return (
    <div className="relative">
      <input
        onChange={onChange}
        type={type}
        id={id}
        name={name}
        class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-b-md text-neutral-900 border-0 border-b-2 border-neutral-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-700 peer"
      />
      {errors ? <p class="mt-2 text-red-100 text-b-sm">{errors}</p> : null}

      <label
        for={_for}
        className="absolute text-b-md text-neutral-500 dark:text-neutral-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-neutral-700 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
      >
        {label}
      </label>
    </div>
  )
}
