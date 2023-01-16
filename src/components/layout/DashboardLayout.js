import React, { useEffect, useState } from "react";
import ContentSidebar from "../dashboard/ContentSidebar";
// import DefaultLayout from "./DefaultLayout";
// import AddDataBtn from "../button/AddDataBtn";
// import FaqTable from "../table/FaqTable";
const DashboardLayout = ({ children }) => {
    const sidebarContent = [
        {
            value: "Pertanyaan",
            url: "/dashboard/faq",
        },
        {
            value: "Kategori",
            url: "/dashboard/category",
        },
        {
            value: "Tag",
            url: "/dashboard/tag",
        },
    ];

    return (
        <div id="container" className="min-h-screen py-16 bg-neutral-100">
            <div className="mx-auto max-w-7xl w-11/12 flex pt-12">
                {/* sidebar */}
                <aside className="border-r border-neutral-200 w-3/12 py-2">
                    <ContentSidebar content={sidebarContent} />
                </aside>

                {/* start - right side - form group */}
                <main className="py-2 px-8 flex flex-col gap-6 w-full">
                    {children}
                </main>
                {/* end - right side - form group */}
            </div>
        </div>
    );
};

export default DashboardLayout;
