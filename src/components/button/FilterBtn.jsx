import React from 'react'
import { Icon } from '@iconify/react';

function FilterBtn() {
    return (  
        <button className='w-[40px] h-[40px] rounded-md text-teal-500 flex justify-center items-center bg-white'>
            <Icon icon="material-symbols:filter-alt" />
        </button>
    );
}

export default FilterBtn;