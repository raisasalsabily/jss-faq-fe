import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

function BackBtn() {
    const navigate = useNavigate()
    return (
            <button className='font-poppins text-teal-500 my-4 md:text-b-lg text-b-sm transition group' onClick={() => navigate(-1)}>
                <span className='group-hover:mr-1 transition-all'>←</span> Kembali
            </button>
    );
}

export default BackBtn;