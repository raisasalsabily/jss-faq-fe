import React from 'react'
import Searchbar from '../searchbar/SearchBar';
import bgSearch from "../../assets/images/bg-search.png"

function SearchBox() {
    return (  
        <div className='pt-16 flex flex-col justify-center items-center w-full h-[70vh] bg-cover bg-bottom' style={{backgroundImage: `url(${bgSearch})`}}>
            <h1 className="mb-2 text-h-sm lg:text-h-lg font-bold text-center text-teal-700 mx-4">
                Halo, ada yang dapat kami bantu?
            </h1>
            <div>
                <Searchbar/>
            </div>
        </div>
    );
}

export default SearchBox;