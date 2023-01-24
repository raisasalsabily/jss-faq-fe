import React from 'react'
import CategorySidebar from './CategorySidebar';

function PopupCategory({cats}) {
    return (  
        <div className='md:hidden absolute w-full right-0 shadow-xl mt-10'>
            <CategorySidebar cats={cats}/>
        </div>
    );
}

export default PopupCategory;