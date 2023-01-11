import React, { useState } from "react"
import SingleList from "./SingleList"
import CategoryBtn from "./CategoryBtn"

function CategorySidebar(props) {
  // const [isActive, setIsActive] = useState(false)

  // const handleClick = () => {
  //   setIsActive((current) => !current)
  // }

  return (
    <aside className="w-[351px] h-min-content bg-white text-neutral-700 text-b-lg font-medium border-r border-neutral-200">
      <CategoryBtn />
      <ul className="">
        <SingleList value="Akun" />
        <SingleList value="Layanan Aplikasi" />
        <SingleList value="Dukcapil" />
        <SingleList value="PTSP" />
        <SingleList value="Kesehatan" />
        <SingleList value="Pajak dan Retribusi" />
        <SingleList value="Tenaga Kerja" />
        <SingleList value="Perdagangan" />
        <SingleList value="Sosial" />
        <SingleList value="Lingkungan" />
        <SingleList value="Layanan Pegawai" />
        <SingleList value="Pariwisata dan Budaya" />
        <SingleList value="BUMD dan BLUD" />
        <SingleList value="Portal Berita" />
        <SingleList value="Informasi Publik" />
        <SingleList value="Lainnya" />
      </ul>
    </aside>
  )
}

export default CategorySidebar
