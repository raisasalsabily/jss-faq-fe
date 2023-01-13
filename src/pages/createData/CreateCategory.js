import React, { useState } from "react"
import axios from "axios"
import DashboardTitle from "../../components/dashboard/DashboardTitle"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navbar/Navbar"
import InputLabel from "../../components/input/InputLabel"
import TxtInput from "../../components/input/TxtInput"
import DropInput from "../../components/input/DropInput"
import MultiInput from "../../components/input/MultiInput"
import TextEditor from "../../components/input/TextEditor"
import SaveBtn from "../../components/button/SaveBtn"
import ContentSidebar from "../../components/dashboard/ContentSidebar.jsx"

const CreateCategory = () => {
  const [category, setCategory] = useState("")
  const [show, setIsShow] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios
        .post("http://localhost:5000/api/categories", {
          category,
          show,
        })
        .then(function (response) {
          //setAlert
        })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="bg-neutral-100 ">
      <NavBar />
      <div id="container" className="m-10 border-t border-neutral-200">
        <div className="flex">
          {/* sidebar */}
          <aside className="py-10 border-r border-neutral-200">
            <ContentSidebar
              value1="Pertanyaan"
              to1="/createfaq"
              value2="Kategori"
              to2="/createcategory"
              value3="Tag"
              to3="/createtag"
            />
          </aside>

          {/* start - right side - form group */}
          <main className="py-10 px-8 flex flex-col gap-6">
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
              className="w-[1025px] bg-white rounded-lg p-8 flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              {/* Nama kategori */}
              <div>
                <InputLabel label="Nama kategori" />
                <TxtInput
                  placeholder="Tulis kategori baru..."
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
              <div className="mb-16">
                <SaveBtn />
              </div>
            </form>
          </main>
          {/* end - right side - form group */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CreateCategory
