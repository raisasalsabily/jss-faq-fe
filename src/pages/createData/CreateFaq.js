import React, { useState } from "react"
import DashboardTitle from "../../components/dashboard/DashboardTitle"
import Footer from "../../components/footer/Footer"
import NavBar from "../../components/navbar/Navbar"
import InputLabel from "../../components/input/InputLabel"
import TxtInput from "../../components/input/TxtInput"
import DropInput from "../../components/input/DropInput"
import MultiInput from "../../components/input/MultiInput"
import TextEditor from "../../components/input/TextEditor"
import SaveBtn from "../../components/button/SaveBtn"
import ContentSidebar from "../../components/dashboard/ContentSidebar"

const CreateFaq = () => {
  const [value, setValue] = useState("") // state untuk TextEditor

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
                subTitle="Pertanyaan"
              />
            </div>

            {/* form */}
            <form className="w-[1025px] bg-white rounded-lg p-8 flex flex-col gap-4">
              {/* Pertanyaan */}
              <div>
                <InputLabel label="Pertanyaan" />
                <TxtInput placeholder="Tulis pertanyaan..." />
              </div>

              {/* Route URL dan Kategori */}
              <div className="grid grid-cols-2 gap-8">
                {/* Route URL */}
                <div>
                  <InputLabel label="Route URL" />
                  <TxtInput placeholder="Generate url..." />
                </div>

                {/* Kategori */}
                <div>
                  <InputLabel label="Kategori" />
                  <DropInput />
                </div>
              </div>

              {/* Tag */}
              <div>
                <InputLabel label="Tag" />
                <MultiInput />
              </div>

              {/* Jawaban */}
              <div>
                <InputLabel label="Jawaban" />
                <TextEditor setValue={setValue} />
                {/* <div>
                Hasil: <br />
                {value}
              </div> */}
              </div>
            </form>

            {/* button */}
            <div className="mb-16">
              <SaveBtn />
            </div>
          </main>
          {/* end - right side - form group */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CreateFaq