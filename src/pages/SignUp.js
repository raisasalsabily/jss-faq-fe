import React from 'react'
import { Register } from '../components/auth/Register'
import HelpButton from '../components/button/HelpButton'
import jssLogoText from "../assets/images/jss-logo-text.png"

export const SignUp = () => {
  return (
    <>
        <div className='flex justify-center items-center flex-wrap h-full g-6 font-poppins'>
            <div class="p-12 md:w-8/12 lg:w-6/12 mb-12 md:mb-0 w-full md:h-screen h-[600px] bg-teal-300 bg-repeat bg-auto flex flex-col text-white">
                <a href="/">
                  <img
                    className="w-[90px] h-[30px] md:w-[150px] md:h-[45px]"
                    src={jssLogoText}
                    alt="JSS Logo"
                  ></img>
                </a>
                <div className='px-4 py-10 md:p-12 md:mx-6 flex items-center justify-center'>
                    <img
                        className="w-[500px]"
                        src="https://jss.jogjakota.go.id/v4/assets/media/custom/single-id.svg"
                        alt="Sign Id"
                    />
                </div>                
                <div className="text-white text-center px-4 py-6 md:p-12 md:mx-6">
                    <h4 className='font-bold'>Single ID</h4>
                    <p>
                        Kemudahan untuk mendapatkan semua layanan dalam aplikasi hanya dengan satu ID
                    </p>
                </div>                
            </div>
            <Register/>
            <div className='fixed bottom-[10px] right-[10px]'>
                <HelpButton/>
            </div>
        </div>
    </>
  )
}
