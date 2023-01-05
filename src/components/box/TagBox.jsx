import React from "react"
import Tag from "../tag/Tag"

function TagBox(props) {
  return (
    <div className="font-poppins">
        <h1 className="font-bold py-2">Kata Kunci</h1>
        <div className="flex flex-row gap-2">
            <Tag tag="JSS" className="w-[70px]"/> 
            <Tag tag="KTP" className="w-[70px]"/> 
        </div>        
    </div>
  )
}

export default TagBox
