import React from 'react'
import { Icon } from '@iconify/react';

function ReadTime(props) {
    return ( 
        <div className="font-poppins text-neutral-400 flex items-center gap-2 my-2 ont-medium md:text-b-md">
            <Icon icon="material-symbols:menu-book-outline" className='text-b-xl' />
            <p className='text-b-sm'>{props.minutes} menit baca</p>
        </div>
    );
}

export default ReadTime;