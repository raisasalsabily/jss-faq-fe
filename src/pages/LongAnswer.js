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
import Skeleton from "../components/datastate/Skeleton";

export const LongAnswer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [singleFaq, setSingleFaq] = useState({});
    const [readTime, setReadTime] = useState(1);

    const location = useLocation();
    const path = location.pathname.split("/")[2];

    // const [url, setUrl] = useState("")

    // // get current url
    const getSingleFaq = async () => {
        setIsLoading(true);
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
            setReadTime(calculateReadTime(res.data.answer));
        } catch (error) {
            // console.log(error)
            setError(error);
        }
        setIsLoading(false);
    };

    const calculateReadTime = (txt) => {
        const wpm = 200;
        let txtLength = txt.split(" ").length;
        return Math.ceil(txtLength / wpm);
    };

    useEffect(() => {
        getSingleFaq();
        window.scrollTo({
            top: 0,
        });
    }, [path]);

    return (
        <div>
            <NavBar />
            <div
                id="article"
                className="min-h-screen py-20 md:py-32 bg-white mx-auto w-11/12 md:w-7/12 max-w-5xl"
            >
                {!isLoading ? (
                    <div
                        className="fade"
                        style={{
                            animationDuration: `300ms`,
                        }}
                    >
                        <BackBtn />
                        <TitleWithLink question={singleFaq?.question} />
                        <ReadTime minutes={readTime} />
                        <AnswerDesc answer={singleFaq?.answer} />
                        <TagBox tag={singleFaq?.tag} />
                    </div>
                ) : (
                    <>
                        <Skeleton />
                        <Skeleton />
                    </>
                )}
            </div>
            <JSSLiveChat />
            <Footer />
        </div>
    );
};
