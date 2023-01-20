import React from 'react'
import Searchbar from '../searchbar/SearchBar';

function SearchBox() {
    return (  
        <div className='flex flex-col justify-center items-center w-3/4'>
            <h1 className="mb-2 text-h-sm lg:text-h-lg font-bold text-center">
                Halo, ada yang dapat kami bantu?
            </h1>
            <div>
                <Searchbar/>
            </div>
        </div>
    );
}

export default SearchBox;