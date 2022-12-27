import React from "react"

import Navbar from "./../components/navbar/Navbar.jsx"
import Footer from "./../components/footer/Footer.jsx"
import HelpButton from "../components/button/HelpButton.jsx"

const Home = () => {
  return (
    <>
      <div className="font-poppins">
        <Navbar />
        <div className="h-[400px] flex items-center justify-center">BLANK</div>
        <HelpButton />
        <Footer />
      </div>
    </>
  )
}

export default Home
