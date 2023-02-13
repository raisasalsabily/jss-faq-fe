import React from "react"
import jwt_decode from "jwt-decode"
import Footer from "../footer/Footer"
import NavBar from "../navbar/Navbar"

import { Logout, setUser } from "../../redux/actions/authActions.js"
import { useSelector } from "react-redux"
import store from "../../redux/store"
import { setAuth } from "../../utils/setAuth"

// auth
if (localStorage.jwt) {
  const decode = jwt_decode(localStorage.jwt)
  store.dispatch(setUser(decode))
  setAuth(window.localStorage.jwt)
  const currentDate = Date.now / 1000

  if (decode.exp > currentDate) {
    store.dispatch(Logout())
  }
}

export default function DefaultLayout({ children }) {
  //auth
  const auth = useSelector((state) => state.auth)
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role,
  }

  return (
    <div>
      <NavBar user={user ? user : null} />
      {children}
      <Footer />
    </div>
  )
}
