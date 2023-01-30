import React, { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

function Searchbar({
  className,
  placeholder,
  value,
  onChange,
  onClick,
  onSubmit,
  onFocus,
  onBlur,
}) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const handleChange = (e) => setSearchQuery(e.target.value)
  console.log(searchQuery)

  // const fetchSearch = async () => {
  //   setLoading(true)
  //   // console.log(query);
  //   try {
  //     const res = await axios.get(
  //       `http://localhost:5000/api/search?query=${searchQuery}`,
  //       {
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       }
  //     )
  //     setSearchResults(res.data)
  //     console.log(searchResults)
  //   } catch (error) {
  //     console.log(error)
  //     setError(error)
  //   }
  //   setLoading(false)
  // }

  // useEffect(() => {
  //   fetchSearch()
  // }, [searchQuery])

  const navigate = useNavigate()

  return (
    <form
      className={`w-[320px] md:w-[640px] pt-2 relative ${className}`}
      onSubmit={onSubmit}
    >
      <input
        className="w-full h-11 px-5 pr-16 border-2 border-neutral-300 rounded-full text-b-lg text-neutral-600 focus:outline-none focus:ring-teal-50 focus:border-teal-50"
        type="text"
        name="search"
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />

      <button type="submit" onClick={onClick} className="absolute right-0 top-0 mt-5 mr-4 flex">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-neutral-600"
        />
      </button>
    </form>
  )
}

export default Searchbar

Searchbar.defaultProps = {
  placeholder: "Telusuri...",
}
