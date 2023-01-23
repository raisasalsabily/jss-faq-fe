import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./components/auth/Login.jsx";
import { Register } from "./components/auth/Register.jsx";
import FaqDashboard from "./pages/dashboard/FaqDashboard.js";
import CreateFaq from "./pages/createData/CreateFaq.js";
import Home from "./pages/Home.js";
import { SignIn } from "./pages/SignIn.js";
import { SignUp } from "./pages/SignUp.js";
import { Testing } from "./pages/Testing.js";
import CategoryDashboard from "./pages/dashboard/CategoryDashboard.js";
import TagDashboard from "./pages/dashboard/TagDashboard.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { LongAnswer } from "./pages/LongAnswer.js";
import { SearchResult } from "./pages/SearchResult.js";
import CreateCategory from "./pages/dashboard/create/CreateCategory.js";
import EditCategory from "./pages/dashboard/edit/EditCategory.js";
import CreateTag from "./pages/dashboard/create/CreateTag.js";
import EditTag from "./pages/dashboard/edit/EditTag.js";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 750,
            offset: 20,
            easing: "ease",
        });
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" caseSensitive={false} element={<Home />} />
                <Route
                    path="/post/:id"
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
                    element={<SignUp />}
                />
                <Route
                    path="/login"
                    caseSensitive={false}
                    element={<SignIn />}
                />

                <Route
                    path="/dashboard/faq"
                    caseSensitive={false}
                    element={<FaqDashboard />}
                />
                <Route
                    path="/dashboard/faq/create"
                    caseSensitive={false}
                    element={<CreateFaq />}
                />

                <Route
                    path="/dashboard/category"
                    caseSensitive={false}
                    element={<CategoryDashboard />}
                />
                <Route
                    path="/dashboard/category/create"
                    caseSensitive={false}
                    element={<CreateCategory />}
                />
                <Route
                    path="/dashboard/category/edit/:id"
                    caseSensitive={false}
                    element={<EditCategory />}
                />

                <Route
                    path="/dashboard/tag"
                    caseSensitive={false}
                    element={<TagDashboard />}
                />
                <Route
                    path="/dashboard/tag/create"
                    caseSensitive={false}
                    element={<CreateTag />}
                />
                <Route
                    path="/dashboard/tag/edit/:id"
                    caseSensitive={false}
                    element={<EditTag />}
                />

                <Route
                    path="/testing"
                    caseSensitive={false}
                    element={<Testing />}
                />
            </Routes>
        </Router>
    );
}

export default App;
