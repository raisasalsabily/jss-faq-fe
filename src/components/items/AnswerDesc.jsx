import React from 'react'

function AnswerDesc(props) {
    return ( 
        <p className='text-neutral-900 text-b-md md:text-b-lg py-3'>
            {props.article}
        </p>    
    );
}

export default AnswerDesc;