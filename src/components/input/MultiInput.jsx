import React, { useState } from "react"
import Select from "react-select"
import makeAnimated from "react-select/animated"
import multiInputStyles from "./MultiInputStyle.jsx" // import style for MultiInput

const animatedComp = makeAnimated()

const tagOptions = [
  { value: "KTP", label: "KTP" },
  { value: "SIM", label: "SIM" },
  { value: "Password", label: "Password" },
  { value: "Lupa", label: "Lupa" },
  { value: "Kartu Keluarga", label: "Kartu Keluarga" },
  { value: "Subsidi", label: "Subsidi" },
  { value: "Verifikasi", label: "Verifikasi" },
  { value: "Penipuan", label: "Penipuan" },
  { value: "Login", label: "Login" },
  {
    value: "Panjang Banget Test Panjang Banget Test",
    label: "Panjang Banget Test Panjang Banget Test",
  },
]

function MultiInput(props) {
  const [selectedOpt, setSelectedOpt] = useState([])

  //   const handleSelect = () => {
  //     console.log(selectedOpt)
  //   }

  return (
    <div className={"w-[961px] text-b-sm text-neutral-800" + props.className}>
      <Select
        placeholder={props.placeholder}
        components={animatedComp}
        isMulti
        options={tagOptions}
        onChange={(item) => setSelectedOpt(item)}
        isClearable={true}
        isSearchable={true}
        closeMenuOnSelect={false}
        popupHeight=""
        styles={multiInputStyles}
      />

      {/* <button onClick={handleSelect}>Console log tags!</button> */}
    </div>
  )
}

export default MultiInput

MultiInput.defaultProps = {
  placeholder: "Tambahkan kata kunci",
}

// referensi data dinamis: https://www.tutsmake.com/react-multi-select-dropdown-with-dynamic-search-example/
