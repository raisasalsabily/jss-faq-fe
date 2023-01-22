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
import DropSearch from "../../components/input/DropSearch"

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

  const [tag, setTag] = useState([])
  const [errors, setErrors] = useState({})

  const changeHandler = (name, value) => {
    if (name === "tag") {
      setTag(value)
      if (value.length > 0 && errors.tag) {
        setError((prev) => {
          const prevErrors = { ...prev }
          delete prevErrors.tag
          return prevErrors
        })
      }
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    if (tag.length === 0) {
      setErrors((prev) => ({
        ...prev,
        tag: "Masukkan setidaknya satu tag",
      }))
    }
    if (tag.length > 0) {
      console.log(tag)
      // submit form
    }
  }

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

    if (tag.length === 0) {
      setErrors((prev) => ({
        ...prev,
        tag: "Masukkan setidaknya satu tag",
      }))
    }
    if (tag.length > 0) {
      console.log(tag)
      // submit form
    }

    try {
      await axios
        .post("http://localhost:5000/api/posts", {
          question,
          slug,
          category,
          tag,
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
              {cats ? (
                <DropSearch
                  cats={cats}
                  setCategory={setCategory}
                  placeholder="Pilih kategori"
                />
              ) : null}
            </div>
          </div>

          {/* Tag */}
          <div>
            <InputLabel label="Tag" />
            <MultiInput
              label="Tag"
              id="tag"
              name="tag"
              placeholder="Tambahkan tag"
              onChange={changeHandler}
              error={errors.tag}
              defaultTag={tag}
            />
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
