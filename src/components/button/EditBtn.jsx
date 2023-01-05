import React from 'react'
import { Icon } from '@iconify/react';

function EditBtn() {
    return (  
        <button className='w-[40px] h-[40px] rounded-md bg-yellow-50 text-yellow-700 flex justify-center items-center'>
            <Icon icon="mdi:pencil" />
        </button>
    );
}

export default EditBtn;