import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import jwt_decode from "jwt-decode"
import { Login } from "./components/auth/Login.jsx"
import { Register } from "./components/auth/Register.jsx"
import FaqDashboard from "./pages/dashboard/FaqDashboard.js"
import Home from "./pages/Home.js"
import { SignIn } from "./pages/SignIn.js"
import { SignUp } from "./pages/SignUp.js"
import { Testing } from "./pages/Testing.js"
import CategoryDashboard from "./pages/dashboard/CategoryDashboard.js"
import TagDashboard from "./pages/dashboard/TagDashboard.js"
import AOS from "aos"
import "aos/dist/aos.css"
import { LongAnswer } from "./pages/LongAnswer.js"
import { SearchResult } from "./pages/SearchResult.js"
import CreateCategory from "./pages/dashboard/create/CreateCategory.js"
import EditCategory from "./pages/dashboard/edit/EditCategory.js"
import CreateFaq from "./pages/dashboard/create/CreateFaq.js"
import EditFaq from "./pages/dashboard/edit/EditFaq.js"
import { Toaster } from "react-hot-toast"
import store from "./redux/store"
import { Logout, setUser } from "./redux/actions/authActions.js"
import { useSelector } from "react-redux"
import { setAuth } from "./utils/setAuth.js"
import NoAccess from "./pages/NoAccess.js"
import AdminRouter from "./components/router/AdminRouter.js"
import AdminEditorRouter from "./components/router/AdminEditorRouter.js"
import ForceRedirect from "./components/router/ForceRedirect.js"
import UserDashboard from "./pages/dashboard/UserDashboard.js"
import EditUser from "./pages/dashboard/edit/EditUser.js"
import CreateUser from "./pages/dashboard/create/CreateUser.js"

if (localStorage.jwt) {
  const decode = jwt_decode(localStorage.jwt)
  store.dispatch(setUser(decode))
  setAuth(window.localStorage.jwt)
  const currentDate = Date.now / 1000

  if (decode.exp > currentDate) {
    store.dispatch(Logout())
  }
}

function App() {
  const auth = useSelector((state) => state.auth)
  const user = {
    isConnected: auth.isConnected,
    role: auth.user.role,
  }

  useEffect(() => {
    AOS.init({
      duration: 750,
      offset: 20,
      easing: "ease",
      once: true,
    })
  }, [])

  return (
    <Router>
      <Toaster
        position="bottom-center"
        toastOptions={{
          // Define default options
          style: {
            background: "white",
            color: "#555c5d",
            fontSize: "0.75rem",
          },
        }}
      />
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route
          path="/post/:slug"
          caseSensitive={false}
          element={<LongAnswer />}
        />
        <Route
          path="/search"
          caseSensitive={false}
          element={<SearchResult />}
        />
        <Route
          path="/register"
          caseSensitive={false}
          element={
            <ForceRedirect user={user ? user : null}>
              <SignUp />
            </ForceRedirect>
          }
        />
        <Route
          path="/login"
          caseSensitive={false}
          element={
            <ForceRedirect user={user ? user : null}>
              <SignIn />
            </ForceRedirect>
          }
        />

        <Route
          path="/dashboard/faq"
          caseSensitive={false}
          element={
            <AdminEditorRouter user={user ? user : null}>
              <FaqDashboard />
            </AdminEditorRouter>
          }
        />
        <Route
          path="/dashboard/faq/create"
          caseSensitive={false}
          element={
            <AdminEditorRouter user={user ? user : null}>
              <CreateFaq />
            </AdminEditorRouter>
          }
        />
        <Route
          path="/dashboard/faq/edit/:id"
          caseSensitive={false}
          element={
            <AdminEditorRouter user={user ? user : null}>
              <EditFaq />
            </AdminEditorRouter>
          }
        />

        <Route
          path="/dashboard/category"
          caseSensitive={false}
          element={
            <AdminEditorRouter user={user ? user : null}>
              <CategoryDashboard />
            </AdminEditorRouter>
          }
        />
        <Route
          path="/dashboard/category/create"
          caseSensitive={false}
          element={
            <AdminEditorRouter user={user ? user : null}>
              <CreateCategory />
            </AdminEditorRouter>
          }
        />
        <Route
          path="/dashboard/category/edit/:id"
          caseSensitive={false}
          element={
            <AdminEditorRouter user={user ? user : null}>
              <EditCategory />
            </AdminEditorRouter>
          }
        />
        <Route
          path="/dashboard/user"
          caseSensitive={false}
          element={
            <AdminRouter user={user ? user : null}>
              <UserDashboard />
            </AdminRouter>
          }
        />
        {/* <Route
          path="/dashboard/user/create"
          caseSensitive={false}
          element={
            <AdminRouter user={user ? user : null}>
              <CreateUser />
            </AdminRouter>
          }
        /> */}
        <Route
          path="/dashboard/user/edit/:id"
          caseSensitive={false}
          element={
            <AdminRouter user={user ? user : null}>
              <EditUser />
            </AdminRouter>
          }
        />
        <Route
          path="/search"
          caseSensitive={false}
          element={<SearchResult />}
        />
        <Route path="/noaccess" caseSensitive={false} element={<NoAccess />} />
        <Route path="/testing" caseSensitive={false} element={<Testing />} />
      </Routes>
    </Router>
  )
}

export default App
