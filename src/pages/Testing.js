import React from "react"
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

export const Testing = () => {
  return (
    <div>
      <h1>Dummy Page just for Testing components</h1>
      <TagBox />
      <BackBtn />
      <ReadTime minutes="2" />
      <SaveBtn />
      <AddDataBtn />
      <FilterBtn />
      <DeleteBtn />
      <EditBtn />

      <SearchBar />

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

      <div className="mt-96"></div>
    </div>
  )
}
