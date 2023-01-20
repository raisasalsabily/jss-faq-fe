import React from 'react'
import { Link } from 'react-router-dom';

function BackBtn() {
    return (
        <Link to="/">
            <button className='font-poppins text-teal-500 my-4 md:text-b-lg text-b-sm hover:drop-shadow-lg hover:-translate-y-1 transition'>
                ← Kembali
            </button>
        </Link>        
    );
}

export default BackBtn;