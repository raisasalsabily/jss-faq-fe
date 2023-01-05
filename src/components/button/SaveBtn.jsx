import React from 'react'
import { Icon } from '@iconify/react';

function SaveBtn() {
    return ( 
        <button className='w-[100px] h-[40px] rounded-md font-poppins text-neutral-100 gap-2 flex justify-center items-center bg-teal-500'>
            <Icon icon="mdi:content-save" />
            <p>Simpan</p>
        </button>
    );
}

export default SaveBtn;