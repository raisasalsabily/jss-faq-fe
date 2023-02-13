import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import jwt_decode from "jwt-decode"
import axios from "axios"
import CategorySidebar from "../components/Category/CategorySidebar.js"
import HelpBox from "../components/box/HelpBox.jsx"
import JSSLiveChat from "../components/icon/JSSLiveChat"
import FaqList from "../components/collapse/FaqList.js"
import Searchbar from "../components/searchbar/SearchBar.jsx"
import SearchRecom from "../components/search/SearchRecom.jsx"
import bgSearch from "../assets/images/bg-search.png"
import Skeleton from "../components/datastate/Skeleton.js"
import { setUser } from "../redux/actions/authActions.js"
import { useSelector } from "react-redux"
import store from "../redux/store"
import DefaultLayout from "../components/layout/DefaultLayout.js"

// auth
if (localStorage.jwt) {
  const decode = jwt_decode(localStorage.jwt)
  store.dispatch(setUser(decode))
}

const Home = () => {
  //auth
  const auth = useSelector((state) => state.auth)
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role,
  }

  const [isCatsLoading, setIsCatsLoading] = useState(false)
  const [isFaqsLoading, setIsFaqsLoading] = useState(false)
  const [error, setError] = useState(false)

  const [cats, setCats] = useState([]) // state to fetch category sidebar items
  const [faqs, setFaqs] = useState([]) // state to fetch faqs
  const { search } = useLocation(["Akun"])
  // console.log(location)

  const getCats = async () => {
    setIsCatsLoading(true)
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
    setIsCatsLoading(false)
  }

  const fetchFaqs = async () => {
    setIsFaqsLoading(true)
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
    setIsFaqsLoading(false)
  }

  useEffect(() => {
    getCats()
  }, [])

  useEffect(() => {
    fetchFaqs()
  }, [search])

  // searchbar
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [recOpen, setRecOpen] = useState((current) => !current) //search recommendation open or close
  const handleChange = (e) => {
    setSearchQuery(e.target.value)
    setRecOpen(true)
  }
  console.log(searchQuery)

  const redirectToSearch = () => {
    setRecOpen(false)
    navigate(`/search`, {
      state: {
        homeQuery: searchQuery,
      },
    })
  }

  const handleSearchBlur = (e) => {
    e.preventDefault()
    setRecOpen(false)
  }

  const fetchSearch = async () => {
    // setIsLoading(true);
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
      console.log(error)
      setError(error)
    }
    // setIsLoading(false);
  }

  useEffect(() => {
    const getData = setTimeout(fetchSearch, 300)
    return () => clearTimeout(getData)
    // fetchSearch();
  }, [searchQuery])

  return (
    <DefaultLayout>
      <div
        id="help-box"
        className="pt-16 flex flex-col justify-center items-center w-full h-[50vh] bg-cover bg-bottom"
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
            onClick={redirectToSearch}
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
          <div className="my-12 md:my-20 md:px-8 w-full md:border-t border-neutral-200 flex sticky top-[10vh] flex-col md:flex-row">
            {/* CategorySidebar */}
            <aside className="flex md:py-8 md:flex md:w-4/12 border-r border-neutral-200 w-full">
              {!isCatsLoading ? (
                <div className="w-full h-fit sticky top-28">
                  <CategorySidebar cats={cats} />
                </div>
              ) : (
                <Skeleton />
              )}
            </aside>
            {/* QuestionList */}
            <main className="w-full md:py-8 md:p-10 lg:max-w-none">
              {!isFaqsLoading ? (
                <FaqList data={faqs} category={faqs[0]?.category} cats={cats} />
              ) : (
                <Skeleton />
              )}
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
    </DefaultLayout>
  )
}

export default Home
