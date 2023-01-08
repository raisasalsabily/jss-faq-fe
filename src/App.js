import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Login } from "./components/auth/Login.jsx"
import { Register } from "./components/auth/Register.jsx"
import CreateData from "./pages/CreateData.js"
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
          path="/createdata"
          caseSensitive={false}
          element={<CreateData />}
        />
        <Route path="/testing" caseSensitive={false} element={<Testing />} />
      </Routes>
    </Router>
  )
}

export default App
