import React, { useState, useEffect } from "react"
import { useLocation, useSearchParams } from "react-router-dom"
import axios from "axios"
import SearchBox from "../components/box/SearchBox"
import Footer from "../components/footer/Footer"
import JSSLiveChat from "../components/icon/JSSLiveChat"
import NavBar from "../components/navbar/Navbar"
import SearchList from "../components/search/SearchList"
import Searchbar from "../components/searchbar/SearchBar"
import bgSearch from "../assets/images/bg-search.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import SearchRecom from "../components/search/SearchRecom"

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
  const [searchRec, setSearchRec] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [recOpen, setRecOpen] = useState((current) => !current) //search recommendation open or close

  const [query, setQuery] = useState(searchParams.get("query"))
  const page = searchParams.get("page") || 0

  const handleChange = (e) => {
    setRecOpen(true)
    const newQuery = e.target.value
    // setSearchQuery(newQuery)
    // console.log(newQuery)
    setQuery(newQuery)
    setSearchParams({
      query: newQuery,
    })

    // console.log(location)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setRecOpen(false)
    // const newQuery = e.target.value
    // setCurrKeyword(newQuery)
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

  const fetchSearchRec = async () => {
    setLoading(true)
    // console.log(query);
    try {
      let currQuery = query ? query : null

      const res = await axios.get(
        `http://localhost:5000/api/search?query=${currQuery}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      setSearchRec(res.data)
      console.log(searchRec)
    } catch (error) {
      console.log(error)
      setError(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchSearchRec()
  }, [query])

  useEffect(() => {
    fetchSearch()
  }, [])

  return (
    <div>
      <NavBar />
      <div
        id="container"
        className="mt-16 flex flex-col items-center min-h-screen"
      >
        <div
          id="search-title--and-bar"
          className="py-16 flex flex-col justify-center items-center w-full bg-cover bg-bottom"
          style={{ backgroundImage: `url(${bgSearch})` }}
        >
          <h1 className="mb-2 text-h-sm lg:text-h-md font-bold text-center text-teal-700">
            Hasil pencarian
          </h1>
          {/* searchbar and recommendation - start*/}

          <Searchbar
            className=""
            placeholder="Telusuri lagi..."
            value={query}
            onChange={handleChange}
            onSubmit={handleSubmit}
            // onBlur={handleSearchBlur}
          />
          <SearchRecom
            query={query}
            setQuery={setQuery}
            searchRec={searchRec}
            recOpen={recOpen}
            setRecOpen={setRecOpen}
          />
        </div>

        <main className="mt-8 mb-20 max-w-7xl w-11/12 flex flex-col items-center">
          <div id="search-result" className="w-full md:px-10 flex">
            <SearchList
              data={searchResults ? searchResults : null}
              // category={searchResults[0].category}
            />
          </div>
        </main>
      </div>
      <JSSLiveChat />
      <Footer />
    </div>
  )
}
