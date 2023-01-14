import React from 'react'
import { Icon } from '@iconify/react';

function ReadTime(props) {
    return ( 
        <div className="font-poppins text-neutral-400 flex items-center gap-2 my-2 text-b-sm md:text-b-md">
            <Icon icon="material-symbols:menu-book-outline" />
            <p>{props.minutes} menit baca</p>
        </div>
    );
}

export default ReadTime;