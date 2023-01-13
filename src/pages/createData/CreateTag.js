import React, { useState } from "react"
import axios from "axios"
import InputLabel from "../../components/input/InputLabel"
import TxtInput from "../../components/input/TxtInput"
import SaveBtn from "../../components/button/SaveBtn"
import DefaultLayout from "../../components/layout/DefaultLayout"
import DashboardCreateLayout from "../../components/layout/DashboardCreateLayout"

const CreateTag = () => {
  const [tag, setTag] = useState("")
  const sidebarContent = [
    {
      value: "Pertanyaan",
      url: "/dashboard-faq",
    },
    {
      value: "Kategori",
      url: "/dashboard-category",
    },
    {
      value: "Tag",
      url: "/dashboard-tag",
    },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios
        .post("http://localhost:5000/api/tags", {
          tag,
        })
        .then(function (response) {
          //setAlert
        })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <DefaultLayout>
      <DashboardCreateLayout entityName="Tag" sidebarContent={sidebarContent}>
        <form
          className="w-full bg-white rounded-lg p-8 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          {/* Nama tag */}
          <div>
            <InputLabel label="Nama tag" />
            <TxtInput
              placeholder="Tulis tag baru..."
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />
          </div>

          {/* button */}
          <SaveBtn />
        </form>
      </DashboardCreateLayout>
    </DefaultLayout>
  )
}

export default CreateTag
