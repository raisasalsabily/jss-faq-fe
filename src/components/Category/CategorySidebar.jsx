import React, { useState } from "react"
import Category from "./Category"
import CategoryBtn from "./CategoryBtn"

function CategorySidebar() {
  // const [isActive, setIsActive] = useState(false)

  // const handleClick = () => {
  //   setIsActive((current) => !current)
  // }

  return (
    <aside className="w-[351px] h-min-content bg-white text-neutral-700 text-b-lg font-medium border-r border-neutral-200">
      <CategoryBtn />
      <ul className="">
        <Category value="Akun" />
        <Category value="Layanan Aplikasi" />
        <Category value="Dukcapil" />
        <Category value="PTSP" />
        <Category value="Kesehatan" />
        <Category value="Pajak dan Retribusi" />
        <Category value="Tenaga Kerja" />
        <Category value="Perdagangan" />
        <Category value="Sosial" />
        <Category value="Lingkungan" />
        <Category value="Layanan Pegawai" />
        <Category value="Pariwisata dan Budaya" />
        <Category value="BUMD dan BLUD" />
        <Category value="Portal Berita" />
        <Category value="Informasi Publik" />
      </ul>
    </aside>
  )
}

export default CategorySidebar
