import React, { useState } from "react"
import { Link } from "react-router-dom"
import AuthInput from "./AuthInput"
import AuthLabel from "./AuthLabel"

export const Login = () => {
  const [form, setForm] = useState({})
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className="font-poppins flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="font-bold text-center text-h-sm">Masuk Akun JSS</h1>
          <h3 className="text-b-md text-center text-neutral-300">
            Masukkan Username/NIK sesuai akun terdaftar
          </h3>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
            method="POST"
            action="#"
          >
            <div class="relative">
              <AuthInput
                type="text"
                id="input_username"
                name="username"
                onChange={handleChange}
              />
              <AuthLabel for="input_username" value="Username" />
            </div>
            <div class="relative">
              <AuthInput
                type="password"
                id="input_password"
                name="password"
                onChange={handleChange}
              />
              <AuthLabel for="input_password" value="Kata sandi" />
            </div>
            <div className="text-b-sm text-right">
              <a
                href="#"
                className="font-medium text-teal-700 hover:text-teal-300"
              >
                Lupa Kata Sandi?
              </a>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-teal-500 hover:bg-teal-300 focus:ring-4 focus:outline-none focus:ring-teal-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Masuk
            </button>
            <p class="text-b-sm font-light text-teal-500 text-center">
              Belum mempunyai akun?{" "}
              <Link
                to="/register"
                className="font-medium text-teal-700 hover:underline"
              >
                Daftar disini
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
