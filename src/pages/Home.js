import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import axios from "axios"
import Navbar from "./../components/navbar/Navbar.jsx"
import Footer from "./../components/footer/Footer.jsx"
import CategorySidebar from "../components/Category/CategorySidebar.jsx"
import HelpBox from "../components/box/HelpBox.jsx"
import JSSLiveChat from "../components/icon/JSSLiveChat"
import FaqList from "../components/collapse/FaqList.js"
import Searchbar from "../components/searchbar/SearchBar.jsx"
import SearchRecom from "../components/search/SearchRecom.jsx"
import bgSearch from "../assets/images/bg-search.png"

const Home = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const [cats, setCats] = useState([]) // state to fetch category sidebar items
  const [faqs, setFaqs] = useState([]) // state to fetch faqs

  const { search } = useLocation(["Akun"])

  // fetch categories
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

  // fetch faqs
  const fetchFaqs = async () => {
    setLoading(true)
    let query = search ? search : "?cat=Akun"
    try {
      const res = await axios.get(`http://localhost:5000/api/posts${query}`, {
        headers: {
          Accept: "application/json",
        },
      })
      setFaqs(res.data)
    } catch (error) {
      // console.log(error)
      setError(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    getCats()
  }, [])

  useEffect(() => {
    fetchFaqs()
  }, [search])

  // for searchbar
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [recOpen, setRecOpen] = useState((current) => !current) //search recommendation open or close

  // searchbar on change
  const handleChange = (e) => {
    setSearchQuery(e.target.value)
    setRecOpen(true)
  }
  // console.log(searchQuery)

  // fetch search recommendations
  const fetchSearch = async () => {
    setLoading(true)
    // console.log(query);
    try {
      const res = await axios.get(
        `http://localhost:5000/api/search?query=${searchQuery}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      setSearchResults(res.data)
      // console.log(searchResults)
    } catch (error) {
      // console.log(error)
      setError(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchSearch()
  }, [searchQuery])

  // searchbar onsubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    setRecOpen(false)
    navigate(`/search`, {
      state: {
        homeQuery: searchQuery,
      },
    })
  }

  return (
    <>
      <div className="font-poppins">
        <Navbar />
        <div
          id="help-box"
          className="pt-16 flex flex-col justify-center items-center w-full h-[70vh] bg-cover bg-bottom"
          style={{ backgroundImage: `url(${bgSearch})` }}
        >
          <h1 className="mb-2 text-h-sm lg:text-h-lg font-bold text-center text-teal-700 mx-4">
            Halo, ada yang dapat kami bantu?
          </h1>
          <div>
            <Searchbar
              className=""
              placeholder="Telusuri..."
              value={searchQuery}
              onChange={handleChange}
              onSubmit={handleSubmit}
              // onBlur={handleSearchBlur}
            />
            <SearchRecom
              query={searchQuery}
              setQuery={setSearchQuery}
              searchRec={searchResults}
              recOpen={recOpen}
              setRecOpen={setRecOpen}
            />
          </div>
        </div>

        <div id="container" className="flex justify-center items-center">
          <div className="max-w-7xl w-full flex flex-col justify-center items-center">
            {/* sidebar and question list */}
            <div className="my-12 md:my-20 md:px-8 w-full md:border-t border-neutral-200 flex sticky top-[10vh]">
              {/* CategorySidebar */}
              <aside className="hidden py-4 md:flex w-4/12 border-r border-neutral-200">
                <CategorySidebar cats={cats} />
              </aside>
              {/* QuestionList */}
              <main className="w-full py-5 md:p-10 max-w-sm lg:max-w-none">
                {faqs ? (
                  <FaqList
                    data={faqs}
                    category={faqs[0]?.category}
                    cats={cats}
                  />
                ) : null}
              </main>
            </div>
          </div>
        </div>
        {/* end - container */}
        {/* helpbox */}
        <div id="helpbox">
          <HelpBox />
        </div>
        <JSSLiveChat />

        <Footer />
      </div>
    </>
  )
}

export default Home
