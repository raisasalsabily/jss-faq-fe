import axios from "axios"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import SaveBtn from "../../../components/button/SaveBtn"
import DashboardTitle from "../../../components/dashboard/DashboardTitle"
import InputLabel from "../../../components/input/InputLabel"
import TxtInput from "../../../components/input/TxtInput"
import DashboardLayout from "../../../components/layout/DashboardLayout"
import DefaultLayout from "../../../components/layout/DefaultLayout"
import BackBtn from "../../../components/button/BackBtn"

export default function EditCategory() {
  const { id } = useParams()
  const [form, setForm] = useState({ name: "", isShown: false })
  const [initName, setInitName] = useState("")

  const navigate = useNavigate()

  const getCatById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/categories/${id}`
      )
      setForm({
        name: response.data.category,
        isShown: response.data.show,
      })
      setInitName(response.data.category)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios
        .put(`http://localhost:5000/api/categories/${id}`, {
          category: form.name,
          show: form.isShown,
        })
        .then(function (response) {
          navigate("/dashboard/category")
          //setAlert
        })
    } catch (err) {
      console.log(err)
    }
  }

  const onChangeInput = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const onChangeCheckbox = (curr) => {
    setForm({ ...form, isShown: !form.isShown })
  }

  useEffect(() => {
    getCatById()
  }, [])

  return (
    <DefaultLayout>
      <DashboardLayout>
        {/* title */}
        <div className="flex justify-between">
          <DashboardTitle
            id="edit-data-title"
            title="Mengubah Data"
            subTitle={`Kategori - ${initName}`}
          />
          <BackBtn />
        </div>
        {/* form */}
        <form
          className="w-full bg-white rounded-lg p-8 flex flex-col gap-4"
          onSubmit={handleSubmit}
          data-aos="fade"
        >
          {/* Nama kategori */}
          <div>
            <InputLabel label="Nama kategori" />
            <TxtInput
              name="name"
              placeholder={`Isi dengan nama kategori`}
              value={form.name}
              onChange={onChangeInput}
            />
          </div>

          {/* Tampilkan kategori */}
          <div className="flex flex-col items-start">
            <InputLabel label="Tampilkan kategori" />
            <input
              type="checkbox"
              value={form.isShown}
              onChange={onChangeCheckbox}
              id="check"
              name="show"
              checked={form.isShown}
              className="m-1 w-4 h-4 text-teal-900 bg-gray-100 border-gray-300 rounded focus:ring-teal-50 focus:ring-2 "
            />
          </div>

          {/* button */}
          <SaveBtn value="Perbarui" />
        </form>
      </DashboardLayout>
    </DefaultLayout>
  )
}
