import React from 'react';
import { Icon } from '@iconify/react';

function AddDataBtn() {
    return (  
        <button className='px-3 py-2 h-fit rounded-md font-poppins text-b-md text-neutral-100 gap-1 flex justify-center items-center bg-teal-500 hover:bg-teal-700 transition'>
            <Icon icon="material-symbols:add" className='text-white'/>
            <p>Tambah Data</p>
        </button>
    );
}

export default AddDataBtn;