import React, { useState } from "react"
import axios from "axios"
import SaveBtn from "../../components/button/SaveBtn"
import InputLabel from "../../components/input/InputLabel"
import TxtInput from "../../components/input/TxtInput"
import DefaultLayout from "../../components/layout/DefaultLayout"
import DashboardLayout from "../../components/layout/DashboardLayout"
import DashboardTitle from "../../components/dashboard/DashboardTitle"
import { useNavigate } from "react-router-dom"

const CreateCategory = () => {
  const [category, setCategory] = useState("")
  const [show, setIsShow] = useState(false)
  const navigate = useNavigate()
  const entityName = "Kategori"

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios
        .post("http://localhost:5000/api/categories", {
          category,
          show,
        })
        .then(function (response) {
          navigate("/dashboard/category")
          //setAlert
        })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <DefaultLayout>
      <DashboardLayout>
        {/* title */}
        <div className="">
          <DashboardTitle
            id="create-data-title"
            title="Menambah Data"
            subTitle="Kategori"
          />
        </div>
        {/* form */}
        <form
          className="w-full bg-white rounded-lg p-8 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          {/* Nama kategori */}
          <div>
            <InputLabel label={"Nama " + entityName.toLowerCase()} />
            <TxtInput
              placeholder={`Tulis ${entityName} baru...`}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* Tampilkan kategori */}
          <div className="flex flex-col items-start">
            <InputLabel label="Tampilkan kategori" />
            <input
              type="checkbox"
              value={show}
              onChange={() => setIsShow((current) => !current)}
              id="check"
              name="check"
              className="m-1 w-4 h-4 text-teal-900 bg-gray-100 border-gray-300 rounded focus:ring-teal-50 focus:ring-2 "
            />
          </div>

          {/* button */}
          <SaveBtn />
        </form>
      </DashboardLayout>
    </DefaultLayout>
  )
}

export default CreateCategory
