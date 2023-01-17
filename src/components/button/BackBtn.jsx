import React from 'react'
import { Link } from 'react-router-dom';

function BackBtn() {
    return (
        <Link to="/">
            <button className='font-poppins text-teal-500 py-4 md:text-b-lg text-b-sm'>
                ← Kembali
            </button>
        </Link>        
    );
}

export default BackBtn;