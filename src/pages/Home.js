import React from "react"

import Navbar from "./../components/navbar/Navbar.jsx"
import Footer from "./../components/footer/Footer.jsx"
import HelpButton from "../components/button/HelpButton.jsx"
import HelpBox from "../components/box/HelpBox.jsx"
import Tag from "../components/tag/Tag.jsx"

const Home = () => {
  return (
    <>
      <div className="font-poppins">
        <Navbar />
        <div className="h-[400px] flex items-center justify-center">BLANK</div>

        {/* tag */}
        <div className="flex justify-center items-center m-10">
          <Tag className="" tag="tagtagtagtag" />
        </div>

        {/* helpbox */}
        <div className="flex justify-center items-center m-10">
          <HelpBox className="" />
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Home
