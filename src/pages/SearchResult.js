import React, { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";
import SearchBox from "../components/box/SearchBox";
import Footer from "../components/footer/Footer";
import JSSLiveChat from "../components/icon/JSSLiveChat";
import NavBar from "../components/navbar/Navbar";
import SearchList from "../components/search/SearchList";
import Searchbar from "../components/searchbar/SearchBar";
import bgSearch from "../assets/images/bg-search.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SearchRecom from "../components/search/SearchRecom";

export const SearchResult = () => {
    const location = useLocation();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    // const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([]);
    const [searchRec, setSearchRec] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [recOpen, setRecOpen] = useState(false); //search recommendation open or close

    const [query, setQuery] = useState(searchParams.get("query"));
    const page = searchParams.get("page") || 0;

    const handleSearchBlur = (e) => {
        e.preventDefault();
        setRecOpen(false);
    };

    const handleChange = (e) => {
        setRecOpen(true);
        const newQuery = e.target.value;
        // setSearchQuery(newQuery)
        // console.log(newQuery)
        setQuery(newQuery);
        setSearchParams({
            query: newQuery,
        });

        // console.log(location)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setRecOpen(false);
        // const newQuery = e.target.value
        // setCurrKeyword(newQuery)
        // setSearchParams({
        //   query: newQuery,
        // })
        // console.log(location)
        fetchSearch();
    };

    const fetchSearch = async () => {
        setLoading(true);
        // console.log(query);
        try {
            let currQuery = query ? query : location.state.homeQuery;

            const res = await axios.get(
                `http://localhost:5000/api/search?query=${currQuery}`,
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );
            setSearchResults(res.data);
            // console.log(searchResults)
        } catch (error) {
            console.log(error);
            setError(error);
        }
        setLoading(false);
    };

    const fetchSearchRec = async () => {
        setLoading(true);
        // console.log(query);
        try {
            let currQuery = query ? query : null;

            const res = await axios.get(
                `http://localhost:5000/api/search?query=${currQuery}`,
                {
                    headers: {
                        Accept: "application/json",
                    },
                }
            );
            setSearchRec(res.data);
            console.log(searchRec);
        } catch (error) {
            console.log(error);
            setError(error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchSearchRec();
    }, [query]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
        fetchSearch();
    }, []);

    return (
        <div>
            <NavBar />
            <div
                id="container"
                className="flex flex-col items-center min-h-screen"
            >
                <div
                    id="search-title--and-bar"
                    className="pt-16 h-[50vh] flex flex-col justify-center items-center w-full bg-cover bg-bottom"
                    style={{ backgroundImage: `url(${bgSearch})` }}
                >
                    <h1 className="mb-2 text-h-sm lg:text-h-lg font-bold text-center text-teal-700">
                        Ada yang dapat kami bantu kembali?
                    </h1>
                    {/* searchbar and recommendation - start*/}

                    <Searchbar
                        className=""
                        placeholder="Telusuri..."
                        value={query}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        // onBlur={handleSearchBlur}
                    />
                    <SearchRecom
                        query={query}
                        setQuery={setQuery}
                        searchRec={searchRec}
                        recOpen={recOpen}
                        setRecOpen={setRecOpen}
                    />
                </div>

                <main className="mt-8 mb-20 max-w-5xl w-11/12 flex flex-col items-center">
                    <h2 className="self-start text-h-sm font-bold text-neutral-900">
                        Hasil pencarian yang relevan
                    </h2>
                    <div className="md:ml-5">
                        <SearchList
                            data={searchResults ? searchResults : null}
                            // category={searchResults[0].category}
                        />
                    </div>
                </main>
            </div>
            <JSSLiveChat />
            <Footer />
        </div>
    );
};
