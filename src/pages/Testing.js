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
import Searchbar from "../components/searchbar/SearchBar"
import ContentHeader from "../components/dashboard/ContentHeader"
import FaqList from "../components/collapse/FaqList"
import FaqTable from "../components/table/FaqTable"
import JSSLiveChat from "../components/icon/JSSLiveChat"

export const Testing = () => {
  const [value, setValue] = useState("") // state untuk TextEditor

  const faqData = [
    {
      id: 1,
      title: "Bagaimana cara menginstall aplikasi JSS di android/iphone saya?",
      article:
        "Website layanan kota adalah sebuah platform yang dibuat oleh pemerintah kota atau daerah untuk memberikan informasi dan layanan kepada masyarakat yang tinggal di kota atau daerah tersebut. Tujuan utama dari website ini adalah untuk mempermudah akses masyarakat ke informasi dan layanan yang ditawarkan oleh pemerintah, sehingga masyarakat tidak perlu datang ke kantor pemerintah secara langsung untuk mendapatkan informasi atau mengajukan permohonan layanan.",
      category: "Akun",
      tag: ["JSS", "Aplikasi", "Install"],
    },
    {
      id: 2,
      title: "Bagaimana cara mendaftar JSS menggunakan WhatsApp?",
      article:
        "Website layanan kota juga bisa menjadi sumber informasi yang berguna bagi wisatawan yang akan berkunjung ke kota tersebut, karena website ini biasanya menyediakan informasi tentang tempat-tempat wisata yang ada di kota tersebut, akomodasi, dan sebagainya.",
      category: "Akun",
      tag: ["JSS", "Aplikasi", "Install"],
    },
    {
      id: 3,
      title: "Bagaimana cara mendaftar JSS menggunakan email?",
      article:
        "Secara keseluruhan, website layanan kota merupakan salah satu cara yang efektif bagi pemerintah untuk memperluas akses masyarakat ke informasi dan layanan yang ditawarkan, serta mempermudah proses pengajuan permohonan layanan oleh masyarakat.",
      category: "Akun",
      tag: ["JSS", "Aplikasi", "Install"],
    },
    {
      id: 4,
      title: "Link aktivasi tidak terkirim ke WhatsApp saya",
      article:
        "Anda dapat menghubungi layanan pelanggan untuk meminta bantuan mengembalikan password. Pastikan untuk memberikan informasi yang cukup seperti nama pengguna",
      category: "Akun",
      tag: ["JSS", "Aplikasi", "Install"],
    },
    {
      id: 5,
      title: "Username dan/atau password saya dinyatakan salah",
      article:
        "Anda dapat menghubungi layanan pelanggan untuk meminta bantuan mengembalikan password. Pastikan untuk memberikan informasi yang cukup seperti nama pengguna",
      category: "Akun",
      tag: ["JSS", "Aplikasi", "Install"],
    },
  ]

  return (
    <div>
      <h1>Dummy Page just for Testing components</h1>

      <Searchbar className="w-[320px]" />
      {/* jss ngambang */}
      <JSSLiveChat/>
      {/* content header */}
      <ContentHeader
        id="faq-list"
        title="Pertanyaan"
        jumlahData="12"
        direct="/createfaq"
      />

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

      {/* ContentSidebar/Dashbaord Sidebar */}
      <div className="m-2">
        <ContentSidebar />
      </div>

      {/* Faq List */}
      <div className="w-8/12 mx-auto">
        <FaqList data={faqData} category={faqData[0].category} />
        <br />
        <FaqList data={faqData} />
        <br />
        <FaqTable data={faqData} rowsPerPage="3" />
      </div>
    </div>
  )
}
