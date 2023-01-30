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

      <button type="submit" className="absolute right-0 top-0 mt-5 mr-4 flex">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-neutral-600"
          onClick={onClick}
        />
      </button>
    </form>
  )
}

export default Searchbar

Searchbar.defaultProps = {
  placeholder: "Telusuri...",
}
