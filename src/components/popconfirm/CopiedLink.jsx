import React from 'react'

function CopiedLink() {
    return (  
        <div
            className="w-[175px] h-[30px] gap-2 rounded-lg bg-teal-500 fixed flex justify-center items-center right-[5px] opacity-80"          
        >
            <p className="font-poppins text-center text-b-md text-white">Tautan sukses disalin</p>
        </div>
    );
}

export default CopiedLink;