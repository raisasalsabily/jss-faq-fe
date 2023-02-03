import axios from "axios"
import React, { useEffect, useState } from "react"
import {
  faMagnifyingGlass,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

import DashboardLayout from "../../components/layout/DashboardLayout"
import DefaultLayout from "../../components/layout/DefaultLayout"
import DashboardTitle from "../../components/dashboard/DashboardTitle"
import FaqTable from "../../components/table/FaqTable"
import AddDataBtn from "../../components/button/AddDataBtn"

const FaqDashboard = () => {
  const [faqs, setFaqs] = useState([])
  const [dataTable, setDataTable] = useState([])

  const convertShow = (data) => {
    if (data.show) data.show = "✅"
    else data.show = "❌"
    return data
  }

  const generateLink = (data) => {
    if (data._id)
      data.url = (
        <Link to={`/post/${data._id}`} target="_blank">
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className="text-teal-300 hover:text-teal-900 transition-colors"
          />
        </Link>
      )
    return data
  }

  const getFaqs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/posts/?table=true")
      let data = res.data
      data = data.map(generateLink)
      data = data.map(convertShow)
      setFaqs(data)
      setDataTable(data)
    } catch (err) {
      console.log(err)
    }
  }

  const deleteFaq = async (id) => {
    try {
      await axios.delete("http://localhost:5000/api/posts/" + id)
      getFaqs()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getFaqs()
  }, [])

  const handleSearch = (e) => {
    const key = e.target.value.toLowerCase()

    const searchRes = faqs.filter((obj) => {
      let isInclude = false
      for (const prop in obj) {
        if (obj[prop].toString().toLowerCase().includes(key)) isInclude = true
      }
      return isInclude
    })

    setDataTable(searchRes)
  }

  return (
    <DefaultLayout>
      <DashboardLayout>
        <div className="flex justify-between">
          <DashboardTitle
            id="index-data-title"
            title="FAQ"
            subTitle={dataTable ? dataTable.length + " data ditemukan" : ""}
          />
          <Link to="create">
            <AddDataBtn />
          </Link>
        </div>

        <div className={`w-96 relative self-end`}>
          <input
            className="w-full py-1 px-4 border-2 border-neutral-300 rounded-full text-b-md text-neutral-600 focus:outline-none focus:ring-teal-50 focus:border-teal-50"
            type="text"
            name="search"
            placeholder="Telusuri..."
            onChange={handleSearch}
            required
          />
          <button className="absolute right-0 top-2 mr-4 flex">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-neutral-600"
            />
          </button>
        </div>

        {/* Table */}
        {dataTable && (
          <div data-aos="fade">
            <FaqTable
              data={dataTable}
              rowsPerPage="5"
              lstProp={[
                { attribute: "question", label: "Pertanyaan" },
                { attribute: "category", label: "Kategori" },
                // { attribute: "show", label: "Ditampilkan" },
                { attribute: "url", label: "Laman" },
              ]}
              onDelete={deleteFaq}
            />
          </div>
        )}
      </DashboardLayout>
    </DefaultLayout>
  )
}

export default FaqDashboard
