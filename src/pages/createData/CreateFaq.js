import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { Icon } from "@iconify/react"

import DashboardTitle from "../../components/dashboard/DashboardTitle"
import InputLabel from "../../components/input/InputLabel"
import TxtInput from "../../components/input/TxtInput"
import DropInput from "../../components/input/DropInput"
import MultiInput from "../../components/input/MultiInput"
import TextEditor from "../../components/input/TextEditor"
import SaveBtn from "../../components/button/SaveBtn"
import DefaultLayout from "../../components/layout/DefaultLayout"
import DashboardLayout from "../../components/layout/DashboardLayout"

const CreateFaq = () => {
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [question, setQuestion] = useState("")
  const [slug, setSlug] = useState("")
  const [category, setCategory] = useState("")

  const [cats, setCats] = useState([]) // state to fetch category
  const [dropInput, setDropInput] = useState("") // input value for category dropdown
  const [dropSelected, setDropSelected] = useState("") // selected value of category dropdown
  const [dropOpen, setDropOpen] = useState("") //dropdown open or close

  const [value, setValue] = useState("") // state untuk TextEditor

  const getCats = async () => {
    setLoading(true)
    try {
      const res = await axios.get("http://localhost:5000/api/categories", {
        headers: {
          Accept: "application/json",
        },
      })
      setCats(res.data)
    } catch (error) {
      setError(error)
      // console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getCats()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios
        .post("http://localhost:5000/api/posts", {
          question,
          slug,
          category,
        })
        .then(function (response) {
          navigate("/dashboard/faq")
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
            subTitle="FAQ"
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white rounded-lg p-8 flex flex-col gap-4"
        >
          {/* Pertanyaan */}
          <div>
            <InputLabel label="Pertanyaan" />
            <TxtInput
              placeholder="Tulis pertanyaan..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>

          {/* Route URL dan Kategori */}
          <div className="grid grid-cols-2 gap-8">
            {/* Route URL */}
            <div>
              <InputLabel label="Route URL" />
              <TxtInput
                placeholder="Generate url..."
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
              />
            </div>

            {/* Kategori */}
            <div>
              <InputLabel label="Kategori" />
              {/* <DropInput /> */}
              {/* drop input start */}
              <div id="drop-input" className="w-full text-b-md">
                <div
                  onClick={() => setDropOpen(!dropOpen)}
                  className={`bg-white box-border w-full p-2 flex items-center justify-between rounded border border-neutral-200 ${
                    !dropSelected && "text-neutral-700"
                  }`}
                >
                  {/* show selected value */}
                  {dropSelected
                    ? dropSelected?.length > 40
                      ? dropSelected?.substring(0, 40) + "..."
                      : dropSelected
                    : "Pilih kategori"}
                  <Icon
                    icon="material-symbols:keyboard-arrow-down-rounded"
                    className={`w-6 h-6 ${dropOpen ? "rotate-180" : null}`}
                  />
                </div>
                {/* drop list start */}
                <ul
                  className={`bg-white mt-2 overflow-y-auto   ${
                    dropOpen ? "max-h-60 border border-neutral-200" : "max-h-0"
                  }`}
                >
                  <div className="flex items-center px-2 sticky top-0 bg-white">
                    <Icon
                      icon="ph:magnifying-glass"
                      className="w-4 h-4 text-neutral-500"
                    />
                    <input
                      value={dropInput}
                      onChange={(e) =>
                        setDropInput(e.target.value.toLowerCase())
                      }
                      type="text"
                      placeholder="Pilih kategori"
                      className="placeholder:text-neutral-500 p-2 outline-none"
                    ></input>
                  </div>

                  {cats?.map((cats) => (
                    <li
                      key={cats?.category}
                      className={`p-2 text-sm hover:bg-teal-500 hover:text-white ${
                        cats?.category?.toLowerCase() ===
                          dropSelected?.toLowerCase() &&
                        "bg-teal-500 text-white"
                      } ${
                        cats?.category?.toLowerCase().startsWith(dropInput)
                          ? "block"
                          : "hidden"
                      }`}
                      onClick={(e) => {
                        if (
                          cats?.category?.toLowerCase() !==
                          dropSelected.toLowerCase()
                        ) {
                          setDropSelected(cats?.category)
                          setDropOpen(false)
                          setDropInput("")
                          setCategory(cats?.category)
                        }
                      }}
                    >
                      {cats?.category}
                    </li>
                  ))}
                </ul>
                {/* drop list end */}
              </div>
              {/* drop input end */}
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
          <SaveBtn />
        </form>

        {/* button */}
      </DashboardLayout>
    </DefaultLayout>
  )
}

export default CreateFaq
