import React, { useState } from "react"
import TagBox from "../components/box/TagBox"
import AddDataBtn from "../components/button/AddDataBtn"
import BackBtn from "../components/button/BackBtn"
import DeleteBtn from "../components/button/DeleteBtn"
import EditBtn from "../components/button/EditBtn"
import FilterBtn from "../components/button/FilterBtn"
import SaveBtn from "../components/button/SaveBtn"
import ReadTime from "../components/icon/ReadTime"
import SearchBar from "../components/searchbar/SearchBar"
import HelpBox from "../components/box/HelpBox.jsx"
import Tag from "../components/tag/Tag.jsx"
import CopyLink from "../components/icon/CopyLink.jsx"
import TxtInput from "../components/input/TxtInput.jsx"
import InputLabel from "../components/input/InputLabel.jsx"
import MultiInput from "../components/input/MultiInput.jsx"
import DropInput from "../components/input/DropInput"
import CategorySidebar from "../components/Category/CategorySidebar"
import TextEditor from "../components/input/TextEditor"
import ContentSidebar from "../components/dashboard/ContentSidebar"
import ContentHeader from "../components/dashboard/ContentHeader"

export const Testing = () => {
  const [value, setValue] = useState("") // state untuk TextEditor

  return (
    <div>
      <h1>Dummy Page just for Testing components</h1>
      <ContentHeader
        id="faq-list"
        title="Pertanyaan"
        jumlahData="12"
        direct="/createfaq"
      />
      <SearchBar/>
      {/* copy link */}
      <div className="m-2">
        <CopyLink className="" />
      </div>
      {/* helpbox */}
      <div className="m-2">
        <HelpBox className="" />
      </div>
      {/* TxtInput & InputLabel */}
      <div className="m-2 w-96">
        <InputLabel className="" />
        <TxtInput className="" />
      </div>
      {/* TagInput */}
      <div className="m-2">
        <MultiInput />
      </div>
      {/* DropInput */}
      <div className="m-2">
        <DropInput />
      </div>
      {/* Category */}
      <div className="m-2">
        <CategorySidebar />
      </div>

      {/* TextEditor */}

      <div className="m-4 mb-36">
        <TextEditor setValue={setValue} />
        <div>
          Hasil: <br />
          {value}
        </div>
      </div>
    </div>
  )
}
