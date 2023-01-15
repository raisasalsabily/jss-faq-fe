import React from 'react'
import SearchBox from '../components/box/SearchBox'
import Footer from '../components/footer/Footer'
import JSSLiveChat from '../components/icon/JSSLiveChat'
import NavBar from '../components/navbar/Navbar'
import SearchList from '../components/search/SearchList'
import Searchbar from '../components/searchbar/SearchBar'

export const SearchResult = () => {
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
      <NavBar/>
      <div id="container" className="min-h-screen py-16 bg-white flex justify-center">
        <div className='w-10/12 md:p-20'>
          <SearchBox/>
          <div className='my-20 border-t border-neutral-200 flex'>
            <main>
              <SearchList data={faqData} category={faqData[0].category} />
            </main>
          </div>
        </div>
      </div>  
      <JSSLiveChat/>
      <Footer/>
    </div>
  )
}
