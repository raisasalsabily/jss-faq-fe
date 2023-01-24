import React, { useState } from "react"
import { Icon } from "@iconify/react"

export default function MultiInput({
  id,
  name,
  placeholder,
  error,
  onChange,
  defaultTag,
}) {
  const [value, setValue] = useState("")
  const [tag, setTag] = useState(defaultTag ? defaultTag : [])
  // const [isActive, setIsActive] = useState(false)

  const changeHandler = (e) => {
    setValue(e.target.value)
    onChange(name, tag)
  }

  const removeTag = (e) => {
    const arr = tag.filter((t) => t !== e)
    setTag(arr)
    onChange(name, arr)
  }

  const updateTagsHandler = (e) => {
    e.preventDefault()

    // Add tags if input is not empty and if input value is not comma
    if (e.target.value !== "" && e.target.value !== ",") {
      if (e.key === ",") {
        const newTag = value.trim().split(",")[0]

        if (!tag.includes(newTag) && newTag !== "") {
          const arr = [...tag, newTag]
          setTag(arr)
          onChange(name, arr)
        }
        setValue("")
      } else if (e.key === "Enter") {
        const newTag = value.trim()
        if (!tag.includes(newTag) && newTag !== "") {
          const arr = [...tag, newTag]
          setTag(arr)
          onChange(name, arr)
        }
        setValue("")
      }
    }

    // Remove tag if backspace is pressed
    if (e.key === "Backspace" && tag.length > 0) {
      const copyOfTags = [...tag]
      copyOfTags.pop()
      setTag(copyOfTags)
      onChange(name, copyOfTags)
    }
  }

  // const focusHandler = () => {
  //   setIsActive(true)
  // }

  // const blurHandler = () => {
  //   setIsActive(false)
  // }

  return (
    <div
      className={`w-full border border-neutral-200 rounded text-b-md font-normal`}
    >
      <div>
        <div className="flex flex-wrap gap-2 p-2">
          {tag.map((tag, i) => (
            <div className="flex items-center bg-teal-50 text-teal-900 text-b-sm font-bold rounded-md ">
              <div key={i} className="min-w-min px-4 py-2 ">
                <span>{tag}</span>
              </div>
              <div className="text-center pr-2">
                <Icon
                  icon="system-uicons:cross-circle"
                  className="w-4 h-4 rounded-full hover:bg-teal-500 hover:text-neutral-100 transition"
                  onClick={() => removeTag(tag)}
                />
              </div>
            </div>
          ))}
          <input
            type="text"
            placeholder={placeholder}
            name={name}
            id={id ? id : name}
            value={value}
            onChange={changeHandler}
            autoComplete="off"
            onKeyUp={updateTagsHandler}
            onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
            // onFocus={focusHandler}
            // onBlur={blurHandler}
            className="focus:outline-none"
          />
        </div>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  )
}
