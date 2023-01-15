import React from 'react'
import Searchbar from '../searchbar/SearchBar';

function SearchBox() {
    return (  
        <div className='flex flex-col justify-center items-center'>
            <div id="title">
                <h1 className="mb-2 text-h-sm md:text-h-lg font-bold">
                    Halo, ada yang dapat kami bantu?
                </h1>
            </div>
            <div>
                <Searchbar/>
            </div>
        </div>
    );
}

export default SearchBox;