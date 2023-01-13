import React, { useState, useEffect } from "react"
import axios from "axios"
import Navbar from "./../components/navbar/Navbar.jsx"
import Footer from "./../components/footer/Footer.jsx"
import Searchbar from "../components/searchbar/SearchBar.jsx"
import CategorySidebar from "../components/Category/CategorySidebar.jsx"
import HelpBox from "../components/box/HelpBox.jsx"
import FaqList from "../components/collapse/FaqList.js"

const Home = () => {
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

  const [cats, setCats] = useState([]) // state to fetch category sidebar items

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories")
      setCats(res.data)
    }
    getCats()
  }, [])

  return (
    <>
      <div className="font-poppins">
        <Navbar />

        {/* start - container */}
        <div id="container" className="flex justify-center items-center">
          <div className="w-10/12 mt-32 flex flex-col justify-center items-center">
            {/* Title */}
            <div id="title">
              <h1 className="mb-2 text-h-lg font-bold">
                Halo, ada yang dapat kami bantu?
              </h1>
            </div>
            {/* searchbar */}
            <div>
              <Searchbar />
            </div>

            {/* sidebar and question list */}
            <div className="my-20 border-t border-neutral-200 flex">
              {/* CategorySidebar */}
              <aside>
                <CategorySidebar cats={cats} />
              </aside>

              {/* QuestionList */}
              <main className="p-10">
                <FaqList data={faqData} category={faqData[0].category} />
              </main>
            </div>
          </div>
        </div>
        {/* end - container */}

        {/* helpbox */}
        <div id="helpbox">
          <HelpBox />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Home
