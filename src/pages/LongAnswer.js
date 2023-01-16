import React, { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"
import TagBox from "../components/box/TagBox"
import BackBtn from "../components/button/BackBtn"
import Footer from "../components/footer/Footer"
import JSSLiveChat from "../components/icon/JSSLiveChat"
import ReadTime from "../components/icon/ReadTime"
import AnswerDesc from "../components/items/AnswerDesc"
import TitleWithLink from "../components/items/TitleWithLink"
import NavBar from "../components/navbar/Navbar"

export const LongAnswer = () => {
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

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [singleFaq, setSingleFaq] = useState({})

  useEffect(() => {
    const getSingleFaq = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${path}`, {
          headers: {
            Accept: "application/json",
          },
        })
        setSingleFaq(res.data)
      } catch (error) {
        // console.log(error)
        setError(error)
      }
      setLoading(false)
    }
    getSingleFaq()
  }, [path])

  return (
    <div>
      <NavBar />
      <div
        id="container"
        className="min-h-screen py-16 bg-white flex justify-center"
      >
        <div className="w-10/12 md:p-20">
          <BackBtn />
          <TitleWithLink question={singleFaq?.question} />
          <ReadTime minutes="1" />
          <AnswerDesc answer={singleFaq?.answer} />
          <TagBox tag={singleFaq?.tag} />
        </div>
      </div>
      <JSSLiveChat />
      <Footer />
    </div>
  )
}
