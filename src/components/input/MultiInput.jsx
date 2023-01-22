import React, { useState } from "react"

export default function MultiInput({
  label,
  id,
  name,
  placeholder,
  error,
  onChange,
  defaultTag,
}) {
  const [value, setValue] = useState("")
  const [tag, setTag] = useState(defaultTag ? defaultTag : [])
  const [isActive, setIsActive] = useState(false)

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

  const focusHandler = () => {
    setIsActive(true)
  }

  const blurHandler = () => {
    setIsActive(false)
  }

  return (
    <div className={!isActive ? "mb-8" : "mb-8 border-2"}>
      <div className="border border-neutral-900">
        <div className="flex flex-wrap p-2">
          {tag.map((tag, i) => (
            <div key={i} className="bg-teal-50 p-2 mb-2">
              {tag} <span onClick={() => removeTag(tag)}>x</span>
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
            onFocus={focusHandler}
            onBlur={blurHandler}
          />
        </div>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  )
}
