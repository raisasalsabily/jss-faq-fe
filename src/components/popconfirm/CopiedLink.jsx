import React from 'react'

function CopiedLink() {
    return (  
        <div className='fixed flex flex-col items-end right-[5px] opacity-80'>
            <div className='w-0 h-0 border-l-[5px] border-l-transparent border-b-[10px] border-b-teal-500 border-r-[5px] border-r-transparent mr-3'></div>
            <div
                className="w-[175px] h-[30px] gap-2 rounded-lg bg-teal-500 flex justify-center items-center"          
            >
                <p className="font-poppins text-center text-b-md text-white">Tautan sukses disalin</p>
            </div>  
        </div>        
    );
}

export default CopiedLink;