import React from "react"
import { Link } from "react-router-dom"
import AddDataBtn from "../button/AddDataBtn"
import FilterBtn from "../button/FilterBtn"
import Searchbar from "../searchbar/SearchBar"

function ContentHeader(props) {
  return (
    <div id={props.id} className="font-poppins grid grid-cols-2 mx-10">
        <div>
            <h4 className="font-semibold text-h-md text-neutral-800">
                {props.title}
            </h4>
            <p className="text-b-lg text-neutral-600">{props.jumlahData} data ditemukan</p>
        </div>
        <div className="flex items-center grid justify-items-end">
            <Link to={props.direct}>
                <AddDataBtn/> 
            </Link> 
        </div>        
        <div className="flex items-center">
            <FilterBtn/>
        </div>    
        <div className="flex justify-end">
            <Searchbar
                className="w-[301px] "
                placeholder="Cari..."
            />
        </div>        
        

    </div>
  )
}

export default ContentHeader

ContentHeader.defaultValue = {
  title: "Insert title",
  jumlahData: "10",
}
