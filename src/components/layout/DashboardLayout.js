import React, { useEffect, useState } from "react"
import jwt_decode from "jwt-decode"
import ContentSidebar from "../dashboard/ContentSidebar"

import { Logout, setUser } from "../../redux/actions/authActions.js"
import { useSelector } from "react-redux"
import store from "../../redux/store"
import { setAuth } from "../../utils/setAuth"

// import DefaultLayout from "./DefaultLayout";
// import AddDataBtn from "../button/AddDataBtn";
// import FaqTable from "../table/FaqTable";

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

const DashboardLayout = ({ children }) => {
  //auth
  const auth = useSelector((state) => state.auth)
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role,
  }

  const sidebarContent = [
    {
      _id: 1,
      value: "Pertanyaan",
      url: "/dashboard/faq",
    },
    {
      _id: 2,
      value: "Kategori",
      url: "/dashboard/category",
    },
    {
      _id: 3,
      value: "Pengguna",
      url: "/dashboard/user",
    },
  ]

  return (
    <div id="container" className="min-h-screen py-16 bg-neutral-100">
      <div className="mx-auto max-w-7xl w-11/12 flex pt-12">
        {/* sidebar */}
        <aside className="border-r border-neutral-200 w-3/12 py-2">
          <ContentSidebar content={sidebarContent} />
        </aside>

        {/* start - right side - form group */}
        <main className="py-2 px-8 flex flex-col gap-6 w-full">{children}</main>
        {/* end - right side - form group */}
      </div>
    </div>
  )
}

export default DashboardLayout
