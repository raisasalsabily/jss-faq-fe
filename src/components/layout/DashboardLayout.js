import React, { useEffect, useState } from "react";
import DashboardTitle from "../dashboard/DashboardTitle";
import ContentSidebar from "../dashboard/ContentSidebar";
import DefaultLayout from "./DefaultLayout";
import AddDataBtn from "../button/AddDataBtn";
import FaqTable from "../table/FaqTable";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardLayout = ({ entityName, data, sidebarContent }) => {
    const [dataTable, setDataTable] = useState(data);

    const handleSearch = (e) => {
        const key = e.target.value.toLowerCase();

        const searchRes = data.filter((obj) => {
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
            <div id="container" className="min-h-screen pt-16 bg-neutral-100">
                <div className="mx-auto max-w-7xl w-11/12 flex pt-12">
                    {/* sidebar */}
                    <aside className="border-r border-neutral-200 w-3/12 py-2">
                        <ContentSidebar content={sidebarContent} />
                    </aside>

                    {/* start - right side - form group */}
                    <main className="py-2 px-8 flex flex-col gap-6 w-full">
                        {/* title */}
                        <div className="flex justify-between">
                            <DashboardTitle
                                id="create-data-title"
                                title={entityName}
                                subTitle={dataTable.length + " data ditemukan"}
                            />
                            <AddDataBtn />
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
                        <div data-aos="fade">
                            <FaqTable data={dataTable} rowsPerPage="3" />
                        </div>
                    </main>
                    {/* end - right side - form group */}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default DashboardLayout;
