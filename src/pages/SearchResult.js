import React, { useState, useEffect } from "react"
import { useLocation, Link, useSearchParams } from "react-router-dom"
import { createBrowserHistory } from "history"
import axios from "axios"
import SearchBox from "../components/box/SearchBox"
import Footer from "../components/footer/Footer"
import JSSLiveChat from "../components/icon/JSSLiveChat"
import NavBar from "../components/navbar/Navbar"
import SearchList from "../components/search/SearchList"
import Searchbar from "../components/searchbar/SearchBar"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export const SearchResult = () => {
  const faqData = [
    {
      id: 1,
      question:
        "Bagaimana cara menginstall aplikasi JSS di android/iphone saya?",
      answer:
        "Website layanan kota adalah sebuah platform yang dibuat oleh pemerintah kota atau daerah untuk memberikan informasi dan layanan kepada masyarakat yang tinggal di kota atau daerah tersebut. Tujuan utama dari website ini adalah untuk mempermudah akses masyarakat ke informasi dan layanan yang ditawarkan oleh pemerintah, sehingga masyarakat tidak perlu datang ke kantor pemerintah secara langsung untuk mendapatkan informasi atau mengajukan permohonan layanan.",
      category: "Akun",
      tag: ["JSS", "Aplikasi", "Install"],
    },
    {
      id: 2,
      question: "Bagaimana cara mendaftar JSS menggunakan WhatsApp?",
      answer:
        "Website layanan kota juga bisa menjadi sumber informasi yang berguna bagi wisatawan yang akan berkunjung ke kota tersebut, karena website ini biasanya menyediakan informasi tentang tempat-tempat wisata yang ada di kota tersebut, akomodasi, dan sebagainya.",
      category: "Akun",
      tag: ["JSS", "Aplikasi", "Install"],
    },
    {
      id: 3,
      question: "Bagaimana cara mendaftar JSS menggunakan email?",
      answer:
        "Secara keseluruhan, website layanan kota merupakan salah satu cara yang efektif bagi pemerintah untuk memperluas akses masyarakat ke informasi dan layanan yang ditawarkan, serta mempermudah proses pengajuan permohonan layanan oleh masyarakat.",
      category: "Akun",
      tag: ["JSS", "Aplikasi", "Install"],
    },
    {
      id: 4,
      question: "Link aktivasi tidak terkirim ke WhatsApp saya",
      answer:
        "Anda dapat menghubungi layanan pelanggan untuk meminta bantuan mengembalikan password. Pastikan untuk memberikan informasi yang cukup seperti nama pengguna",
      category: "Akun",
      tag: ["JSS", "Aplikasi", "Install"],
    },
    {
      id: 5,
      question: "Username dan/atau password saya dinyatakan salah",
      answer:
        "Anda dapat menghubungi layanan pelanggan untuk meminta bantuan mengembalikan password. Pastikan untuk memberikan informasi yang cukup seperti nama pengguna",
      category: "Akun",
      tag: ["JSS", "Aplikasi", "Install"],
    },
  ]

  const location = useLocation()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [searchResults, setSearchResults] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const [query, setQuery] = useState(searchParams.get("query"))
  const page = searchParams.get("page") || 0

  const handleChange = (e) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    setSearchParams({
      query: newQuery,
    })
    // console.log(location)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // const newQuery = e.target.value
    // setSearchParams({
    //   query: newQuery,
    // })
    // console.log(location)
    fetchSearch()
  }

  const fetchSearch = async () => {
    setLoading(true)
    // console.log(query);
    try {
      let currQuery = query ? query : location.state.homeQuery

      const res = await axios.get(
        `http://localhost:5000/api/search?query=${currQuery}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      setSearchResults(res.data)
      // console.log(searchResults)
    } catch (error) {
      console.log(error)
      setError(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchSearch()
  }, [])

  return (
    <div>
      <NavBar />
      <div
        id="container"
        className="flex justify-center items-center min-h-screen"
      >
        <div className="max-w-7xl w-11/12 mt-32 flex flex-col justify-center items-center">
          {/* <SearchBox /> */}

          <form
            className={`w-[320px] md:w-[640px] pt-2 relative`}
            onSubmit={handleSubmit}
          >
            <input
              className="w-full h-11 px-5 pr-16 border-2 border-neutral-300 rounded-full text-b-lg text-neutral-600 focus:outline-none focus:ring-teal-50 focus:border-teal-50"
              type="text"
              name="search"
              // placeholder={props.placeholder}
              required
              value={query}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="absolute right-0 top-0 mt-5 mr-4 flex"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-neutral-600"
                // onClick={fetchSearch}
              />
            </button>
          </form>
          {/* ------------------------------------------------------------------------- */}
          <div className="min-w-full my-20 border-t border-neutral-200 flex sticky top-[10vh]">
            <main className="w-full p-5 md:p-10">
              <SearchList
                data={searchResults ? searchResults : null}
                // category={searchResults[0].category}
              />
            </main>
          </div>
        </div>
      </div>
      <JSSLiveChat />
      <Footer />
    </div>
  )
}
