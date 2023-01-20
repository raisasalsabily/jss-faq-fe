import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import TagBox from "../components/box/TagBox";
import BackBtn from "../components/button/BackBtn";
import Footer from "../components/footer/Footer";
import JSSLiveChat from "../components/icon/JSSLiveChat";
import ReadTime from "../components/icon/ReadTime";
import AnswerDesc from "../components/items/AnswerDesc";
import TitleWithLink from "../components/items/TitleWithLink";
import NavBar from "../components/navbar/Navbar";

export const LongAnswer = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [singleFaq, setSingleFaq] = useState({});
    const [readTime, setReadTime] = useState(1);

    const location = useLocation();
    const path = location.pathname.split("/")[2];

    // const [url, setUrl] = useState("")

    // // get current url
    const getSingleFaq = async () => {
        setLoading(true);
        try {
            const res = await axios.get(
                `http://localhost:5000/api/posts/${path}`,
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );
            setSingleFaq(res.data);
            setReadTime(calculateReadTime(singleFaq.answer));
        } catch (error) {
            // console.log(error)
            setError(error);
        }
        setLoading(false);
    };

    const calculateReadTime = (txt) => {
        const wpm = 200;
        let txtLength = txt.split(" ").length;
        return Math.ceil(txtLength / wpm);
    };

    useEffect(() => {
        getSingleFaq();
    }, [path]);

    return (
        <div>
            <NavBar />
            <div
                id="container"
                className="min-h-screen py-16 bg-white flex justify-center"
            >
                {singleFaq && (
                    <div className="w-5/6 max-w-5xl pt-10" data-aos="fade">
                        <BackBtn />
                        <TitleWithLink question={singleFaq?.question} />
                        <ReadTime minutes={readTime} />
                        <AnswerDesc answer={singleFaq?.answer} />
                        <TagBox tag={singleFaq?.tag} />
                    </div>
                )}
            </div>
            <JSSLiveChat />
            <Footer />
        </div>
    );
};
