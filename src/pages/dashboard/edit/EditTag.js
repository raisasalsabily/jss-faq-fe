import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import SaveBtn from "../../../components/button/SaveBtn"
import DashboardTitle from "../../../components/dashboard/DashboardTitle"
import InputLabel from "../../../components/input/InputLabel"
import TxtInput from "../../../components/input/TxtInput"
import DashboardLayout from "../../../components/layout/DashboardLayout"
import DefaultLayout from "../../../components/layout/DefaultLayout"

export default function EditTag() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [initTag, setInitTag] = useState("")
  const [form, setForm] = useState({ name: "" })

  const getTagById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/tags/${id}`)
      setInitTag(response.data.tag)
      setForm({ name: response.data.tag })
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios
        .put(`http://localhost:5000/api/tags/${id}`, {
          tag: form.name,
        })
        .then(function (response) {
          //setAlert
          navigate("/dashboard/tag")
        })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getTagById()
  }, [])

  return (
    <DefaultLayout>
      <DashboardLayout>
        {/* title */}
        <div className="">
          <DashboardTitle
            id="create-data-title"
            title="Mengubah Data"
            subTitle={`Tag - ${initTag}`}
          />
        </div>
        <form
          className="w-full bg-white rounded-lg p-8 flex flex-col gap-4"
          onSubmit={handleSubmit}
          data-aos="fade"
        >
          {/* Nama tag */}
          <div>
            <InputLabel label="Nama tag" />
            <TxtInput
              placeholder="Isi dengan nama tag..."
              value={form.name}
              onChange={(e) => setForm({ name: e.target.value })}
            />
          </div>

          {/* button */}
          <SaveBtn value="Perbarui" />
        </form>
      </DashboardLayout>
    </DefaultLayout>
  )
}
