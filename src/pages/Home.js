import React from "react"

import Navbar from "./../components/navbar/Navbar.jsx"
import Footer from "./../components/footer/Footer.jsx"
import Searchbar from "../components/searchbar/SearchBar.jsx"
import CategorySidebar from "../components/Category/CategorySidebar.jsx"
import HelpBox from "../components/box/HelpBox.jsx"

const Home = () => {
  return (
    <>
      <div className="font-poppins">
        <Navbar />

        {/* start - container */}
        <div
          id="container"
          className="mt-32 flex flex-col justify-center items-center"
        >
          {/* Title - Ada yang dapat kami bantu? */}
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
          <div className="my-20 border-t border-neutral-200">
            {/* CategorySidebar */}
            <aside>
              <CategorySidebar />
            </aside>

            {/* QuestionList */}
            <main className="w-[1000px]"></main>
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
