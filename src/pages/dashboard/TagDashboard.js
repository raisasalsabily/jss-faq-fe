import axios from "axios";
import React, { useEffect, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import DefaultLayout from "../../components/layout/DefaultLayout";
import DashboardTitle from "../../components/dashboard/DashboardTitle";
import FaqTable from "../../components/table/FaqTable";
import AddDataBtn from "../../components/button/AddDataBtn";

const TagDashboard = () => {
    const [tags, setTags] = useState([]);
    const [dataTable, setDataTable] = useState([]);

    const getTags = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/tags/?table=true"
            );
            setTags(res.data);
            setDataTable(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteTag = async (id) => {
        try {
            await axios.delete("http://localhost:5000/api/tags/" + id);
            getTags();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTags();
    }, []);

    const handleSearch = (e) => {
        const key = e.target.value.toLowerCase();

        const searchRes = tags.filter((obj) => {
            let isInclude = false;
            for (const prop in obj) {
                if (obj[prop].toString().toLowerCase().includes(key))
                    isInclude = true;
            }
            return isInclude;
        });

        setDataTable(searchRes);
    };

    return (
        <DefaultLayout>
            <DashboardLayout>
                <div className="flex justify-between">
                    <DashboardTitle
                        id="index-data-title"
                        title="Tag"
                        subTitle={
                            dataTable
                                ? dataTable.length + " data ditemukan"
                                : ""
                        }
                    />
                    <Link to="create">
                        <AddDataBtn />
                    </Link>
                </div>

                <div className={`w-96 relative self-end`}>
                    <input
                        className="w-full py-1 px-4 border-2 border-neutral-300 rounded-full text-b-md text-neutral-600 focus:outline-none focus:ring-teal-50 focus:border-teal-50"
                        type="text"
                        name="search"
                        placeholder="Telusuri..."
                        onChange={handleSearch}
                        required
                    />
                    <button className="absolute right-0 top-2 mr-4 flex">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="text-neutral-600"
                        />
                    </button>
                </div>

                {/* Table */}
                {dataTable && (
                    <div data-aos="fade">
                        <FaqTable
                            data={dataTable}
                            rowsPerPage="5"
                            lstProp={[{ attribute: "tag", label: "Tag" }]}
                            onDelete={deleteTag}
                        />
                    </div>
                )}
            </DashboardLayout>
        </DefaultLayout>
    );
};

export default TagDashboard;
