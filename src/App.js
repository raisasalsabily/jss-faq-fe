import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Login } from "./components/auth/Login.jsx"
import { Register } from "./components/auth/Register.jsx"
import CreateCategory from "./pages/createData/CreateCategory.js"
import CreateFaq from "./pages/createData/CreateFaq.js"
import CreateTag from "./pages/createData/CreateTag.js"
import Home from "./pages/Home.js"
import { SignIn } from "./pages/SignIn.js"
import { SignUp } from "./pages/SignUp.js"
import { Testing } from "./pages/Testing.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/register" caseSensitive={false} element={<SignUp />} />
        <Route path="/login" caseSensitive={false} element={<SignIn />} />
        <Route
          path="/createfaq"
          caseSensitive={false}
          element={<CreateFaq />}
        />
        <Route
          path="/createtag"
          caseSensitive={false}
          element={<CreateTag />}
        />
        <Route
          path="/createcategory"
          caseSensitive={false}
          element={<CreateCategory />}
        />
        <Route path="/testing" caseSensitive={false} element={<Testing />} />
      </Routes>
    </Router>
  )
}

export default App
