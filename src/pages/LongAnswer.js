import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import TagBox from "../components/box/TagBox";
import BackBtn from "../components/button/BackBtn";
import Footer from "../components/footer/Footer";
import JSSLiveChat from "../components/icon/JSSLiveChat";
import ReadTime from "../components/icon/ReadTime";
import AnswerDesc from "../components/items/AnswerDesc";
import NavBar from "../components/navbar/Navbar";
import Skeleton from "../components/datastate/Skeleton";
import SocmedBtn from "../components/button/SocmedBtn";
import Title from "../components/items/Title";

export const LongAnswer = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [singleFaq, setSingleFaq] = useState({});
    const [readTime, setReadTime] = useState(1);

    const { slug } = useParams();

    const location = useLocation();
    const path = location.pathname.split("/")[2];

    // const [url, setUrl] = useState("")

    // // get current url
    const getSingleFaq = async () => {
        setIsLoading(true);
        try {
            const res = await axios.get(
                `http://localhost:5000/api/posts/slug/${slug}`,
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
                className="min-h-screen py-20 md:py-28 bg-white mx-auto w-11/12 md:w-7/12 max-w-5xl"
            >
                {!isLoading ? (
                    <div
                        className="fade"
                        style={{
                            animationDuration: `300ms`,
                        }}
                    >
                        <BackBtn />
                        <Title question={singleFaq?.question} />
                        <div className="flex gap-2 items-center text-neutral-400 text-b-sm font-medium">
                            <ReadTime minutes={readTime} /> <span>•</span>
                            <SocmedBtn question={singleFaq?.question} />
                        </div>
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
