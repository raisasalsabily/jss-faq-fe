import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./../components/navbar/Navbar.jsx";
import Footer from "./../components/footer/Footer.jsx";
import CategorySidebar from "../components/Category/CategorySidebar.jsx";
import HelpBox from "../components/box/HelpBox.jsx";
import JSSLiveChat from '../components/icon/JSSLiveChat';
import FaqList from "../components/collapse/FaqList.js";
import { useLocation } from "react-router-dom";
import SearchBox from "../components/box/SearchBox.jsx";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [cats, setCats] = useState([]); // state to fetch category sidebar items
    const [faqs, setFaqs] = useState([]); // state to fetch faqs
    const { search } = useLocation(["Akun"]);
    // console.log(location)

    const getCats = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
                "http://localhost:5000/api/categories",
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );
            setCats(res.data);
        } catch (error) {
            setError(error);
            // console.log(error)
        }
        setLoading(false);
    };

    const fetchFaqs = async () => {
        setLoading(true);
        let query = search ? search : "?cat=Akun";
        console.log(query);
        try {
            const res = await axios.get(
                `http://localhost:5000/api/posts${query}`,
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );
            setFaqs(res.data);
        } catch (error) {
            // console.log(error)
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        getCats();
    }, []);

    useEffect(() => {
        fetchFaqs();
    }, [search]);

    return (
        <>
            <div className="font-poppins">
                <Navbar />

                {/* start - container */}
                <div
                    id="container"
                    className="flex justify-center items-center min-h-screen"
                >
                    <div className="max-w-7xl w-11/12 mt-32 flex flex-col justify-center items-center">
                        <SearchBox/>

                        {/* sidebar and question list */}
                        <div className="min-w-full my-20 border-t border-neutral-200 flex sticky top-[10vh]">
                            {/* CategorySidebar */}
                            <aside className="hidden md:flex w-4/12">
                                <CategorySidebar cats={cats} />
                            </aside>
                            {/* QuestionList */}
                            <main className="w-full p-5 md:p-10">
                                {faqs ? (
                                    <FaqList
                                        data={faqs}
                                        category={faqs[0]?.category}
                                        cats={cats}
                                    />
                                ) : null}
                            </main>
                        </div>
                    </div>
                </div>
                {/* end - container */}
                {/* helpbox */}
                <div id="helpbox">
                    <HelpBox />
                </div>
                <JSSLiveChat/>

                <Footer />
            </div>
        </>
    );
};

export default Home;
