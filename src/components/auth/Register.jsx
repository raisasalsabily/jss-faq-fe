import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { Registration } from "../../redux/actions/authActions"
import AuthInput from "./AuthInput"
import AuthLabel from "./AuthLabel"

export const Register = () => {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const errors = useSelector((state) => state.errors)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(Registration(form, navigate))
    // console.log(form)
  }

  return (
    <div className="font-poppins flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="font-bold text-center text-h-sm">
            Pendaftaran Akun JSS
          </h1>
          <h3 className="text-b-md text-center text-neutral-300">
            Masukkan NIK dan Nama Lengkap sesuai data KTP
          </h3>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 md:space-y-6"
            method="POST"
            action="#"
          >
            <div>
              <AuthInput
                type="text"
                id="input_nik"
                name="nik"
                onChange={handleChange}
                errors={errors.nik}
                label="Masukkan 16 digit NIK"
              />
            </div>
            <div>
              <AuthInput
                type="text"
                id="input_nama"
                name="fullName"
                onChange={handleChange}
                errors={errors.fullName}
                label="Nama lengkap sesuai KTP (tanpa gelar)"
              />
            </div>
            <div>
              <AuthInput
                type="text"
                id="input_username"
                name="username"
                onChange={handleChange}
                errors={errors.username}
                label="Username (digunakan untuk login)"
              />
            </div>
            <div>
              <AuthInput
                type="password"
                id="input_password"
                name="password"
                onChange={handleChange}
                errors={errors.password}
                label="Kata sandi"
              />
            </div>
            {/* <div class="relative">
              <AuthInput
                type="password"
                id="confirm_password"
                name="confirm"
                onChange={handleChange}
              />
              <AuthLabel
                for="confirm_password"
                value="Masukkan ulang kata sandi"
              />
            </div> */}
            <br />
            <button
              type="submit"
              class="w-full text-white bg-teal-500 hover:bg-teal-300 focus:ring-4 focus:outline-none focus:ring-teal-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Daftar
            </button>
            <p class="text-b-sm font-light text-teal-500 text-center">
              Sudah mempunyai akun?{" "}
              <Link
                to="/login"
                className="font-medium text-teal-700 hover:underline"
              >
                Login disini
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
