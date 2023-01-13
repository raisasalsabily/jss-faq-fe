import React, { useState } from "react";
import DashboardTitle from "../../components/dashboard/DashboardTitle";
import InputLabel from "../../components/input/InputLabel";
import TxtInput from "../../components/input/TxtInput";
import SaveBtn from "../../components/button/SaveBtn";
import ContentSidebar from "../../components/dashboard/ContentSidebar.jsx";
import DefaultLayout from "../../components/layout/DefaultLayout";

const DashboardCreateLayout = ({ entityName, sidebarContent, children }) => {
    return (
        <div id="container" className="min-h-screen py-16 bg-neutral-100">
            <div className="mx-auto max-w-7xl w-11/12 flex pt-12">
                {/* sidebar */}
                <aside className="border-r border-neutral-200 w-3/12 py-2">
                    <ContentSidebar content={sidebarContent} />
                </aside>

                {/* start - right side - form group */}
                <main className="py-2 px-8 flex flex-col gap-6 w-full">
                    {/* title */}
                    <div className="">
                        <DashboardTitle
                            id="create-data-title"
                            title="Menambah Data"
                            subTitle={entityName}
                        />
                    </div>
                    {children}
                </main>
                {/* end - right side - form group */}
            </div>
        </div>
    );
};

export default DashboardCreateLayout;
