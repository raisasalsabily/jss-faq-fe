import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="font-poppins flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="font-bold text-center text-h-sm">
                  Masuk Akun JSS
                </h1>
                <h3 className="text-b-md text-center text-neutral-300">
                  Masukkan Username/NIK sesuai akun terdaftar
                </h3>
                <form className='space-y-4 md:space-y-6' method='POST' action='#'>
                  <div class="relative">
                    <input type="text" id="username_nik" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-b-md text-neutral-900 border-0 border-b-2 border-neutral-300 appearance-none dark:text-white dark:border-neutral-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-700 peer" placeholder=" " />
                    <label for="username_nik" class="absolute text-b-md text-neutral-500 dark:text-neutral-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-neutral-700 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Username/NIK</label>
                  </div>
                  <div class="relative">
                    <input type="password" id="password_login" class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-b-md text-neutral-900 border-0 border-b-2 border-neutral-300 appearance-none dark:text-white dark:border-neutral-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-700 peer" placeholder=" " />
                    <label for="password_login" class="absolute text-b-md text-neutral-500 dark:text-neutral-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-neutral-700 peer-focus:dark:text-neutral-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Kata sandi</label>
                  </div>
                  <div className="text-b-sm text-right">
                    <a href="#" className="font-medium text-teal-700 hover:text-teal-300">
                      Lupa Kata Sandi?
                    </a>
                  </div>
                  <button type="submit" class="w-full text-white bg-teal-500 hover:bg-teal-300 focus:ring-4 focus:outline-none focus:ring-teal-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Masuk</button>
                  <p class="text-b-sm font-light text-teal-500 text-center">
                    Belum mempunyai akun? <Link to="/register" className='font-medium text-teal-700 hover:underline'>Daftar disini</Link>
                  </p>
                </form>                
            </div>
        </div>
    </div>
  )
}
