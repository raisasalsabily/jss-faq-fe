import React from 'react';
import { Icon } from '@iconify/react';

function AddDataBtn() {
    return (  
        <button className='w-[150px] h-[40px] rounded-md font-poppins text-neutral-100 gap-1 flex justify-center items-center bg-teal-500'>
            <Icon icon="material-symbols:add" />
            <p>Tambah Data</p>
        </button>
    );
}

export default AddDataBtn;