import axios from "axios";
import React, { useEffect, useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Outlet } from "react-router-dom";

import DashboardLayout from "../../components/layout/DashboardLayout";
import DefaultLayout from "../../components/layout/DefaultLayout";
import DashboardTitle from "../../components/dashboard/DashboardTitle";
import FaqTable from "../../components/table/FaqTable";
import AddDataBtn from "../../components/button/AddDataBtn";

const CategoryDashboard = () => {
    const [cats, setCats] = useState([]);
    const [dataTable, setDataTable] = useState([]);

    const convertShow = (data) => {
        if (data.show) data.show = "✅";
        else data.show = "❌";
        return data;
    };

    const getCats = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/categories/?table=true"
            );

            let data = res.data;
            data = data.map(convertShow);
            setCats(res.data);
            setDataTable(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteCat = async (id) => {
        try {
            await axios.delete("http://localhost:5000/api/categories/" + id);
            getCats();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCats();
    }, []);

    const handleSearch = (e) => {
        const key = e.target.value.toLowerCase();

        const searchRes = cats.filter((obj) => {
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
        <>
            <DefaultLayout>
                <DashboardLayout>
                    <div className="flex justify-between">
                        <DashboardTitle
                            id="index-data-title"
                            title="Kategori"
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
                                lstProp={[
                                    {
                                        attribute: "category",
                                        label: "Kategori",
                                    },
                                    { attribute: "show", label: "Ditampilkan" },
                                ]}
                                onDelete={deleteCat}
                            />
                        </div>
                    )}
                </DashboardLayout>
            </DefaultLayout>
            <Outlet />
        </>
    );
};

export default CategoryDashboard;
