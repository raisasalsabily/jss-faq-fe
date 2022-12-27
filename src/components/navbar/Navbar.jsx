import { useState } from "react"
// import { useNavigate } from "react-router-dom";
import LoginBtn from "../button/LoginBtn"
import Backdrop from "./Backdrop"
import Sidebar from "./Sidebar"

import jssLogo from "../../assets/images/jss-logo.png"

export default function NavBar() {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }

  //   const navigate = useNavigate();
  //   const token = localStorage.getItem("accessToken");
  //   // if(!token){
  //   //   button =
  //   // }
  //   const handleLogOut = () => {
  //     localStorage.removeItem("accessToken");
  //     localStorage.removeItem("userStatus");
  //     localStorage.removeItem("userID");

  //       navigate("/")
  //   }

  return (
    <nav className="max-h-[70px] w-full">
      <div className="navbarbg">
        <div
          id="nav-container"
          className="justify-between px-4 mx-auto lg:max-w-7xl flex items-center md:items-center md:flex  md:px-8"
        >
          <div id="hamburger-logo">
            {/* hamburger, logo */}
            <div className="flex flex-row items-center justify-between py-3 md:py-5 md:block">
              {/* hamburger dan logo jss */}
              <div className="flex justify-start items-center">
                {/* hamburger */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-neutral-700 rounded-md outline-none focus:border-neutral-400 focus:border"
                    onClick={toggleSidebar}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
                {/* JSS Logo */}
                <a href="/">
                  <img
                    className="w-[90px] h-[30px]"
                    src={jssLogo}
                    alt="JSS Logo"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div id="menu">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 hidden`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white hover:text-indigo-200">
                  <a href="https://jss.jogjakota.go.id/v4">Beranda</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a
                    href="https://help.jogjakota.go.id/livechat.html?channel=oaTnqVdEL9xvWA8VigoLpDgk"
                    target="__blank"
                  >
                    Bantuan
                  </a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="https://jss.jogjakota.go.id/v4/panduan">Panduan</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="/">FAQ</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Masuk/Login */}
          <LoginBtn />
        </div>
      </div>
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
    </nav>
  )
}
