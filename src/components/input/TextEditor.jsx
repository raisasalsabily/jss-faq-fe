import React, { useRef } from "react"
import JoditEditor from "jodit-react"

const TextEditor = (props) => {
  const editor = useRef(null)

  return (
    <div className="w-full">
      <JoditEditor
        ref={editor}
        onChange={(content) => props.setValue(content)}
      />
    </div>
  )
}

export default TextEditor
