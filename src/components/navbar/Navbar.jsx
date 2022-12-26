import { useState } from "react"
// import { useNavigate } from "react-router-dom";
import jssLogo from "../../assets/images/jss-logo.png"
import Backdrop from "./Backdrop"
import Sidebar from "./Sidebar"

export default function NavBar() {
  const [navbar, setNavbar] = useState(false)
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
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={toggleSidebar}
                  >
                    {navbar ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
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
                    )}
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
                  <a href="/rent">Beranda</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="/profile">Bantuan</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="/admin/member">Panduan</a>
                </li>
                <li className="text-white hover:text-indigo-200">
                  <a href="/admin/member">FAQ</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Masuk */}
          <div
            id="login"
            className="h-[40px] w-[100px] border-dashed border-[1px] text-white rounded-3xl flex justify-center items-center"
          >
            Masuk
            {/* <span>
                <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" />
              </span> */}
          </div>
        </div>
      </div>
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
    </nav>
  )
}
