import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
