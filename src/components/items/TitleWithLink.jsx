import React from 'react'
import CopyLink from '../icon/CopyLink';

function TitleWithLink(props) {
    return (  
        <div className='grid grid-cols-[auto_40px] items-center'>
            <h1 className='font-semibold text-h-sm md:text-h-md font-poppins text-neutral-900'>
                {props.title}
            </h1>
            <CopyLink/>
        </div>
    );
}

export default TitleWithLink;