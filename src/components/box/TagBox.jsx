import React from "react"
import Tag from "../tag/Tag"

function TagBox({ tags }) {
  return (
    <div className="font-poppins">
        <h1 className="font-bold py-2">Kata Kunci</h1>
        <div className="flex flex-row gap-2">
          {tags.map(tag => (  
            <Tag tag={tag}/>  
          ))}          
        </div>        
    </div>
  )
}

export default TagBox
