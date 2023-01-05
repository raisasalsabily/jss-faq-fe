import React from 'react';
import { Icon } from '@iconify/react';

function DeleteBtn() {
    return (  
        <button className='w-[40px] h-[40px] rounded-md bg-red-50 text-red-700 flex justify-center items-center'>
            <Icon icon="mdi:delete" />
        </button>
    );
}

export default DeleteBtn;