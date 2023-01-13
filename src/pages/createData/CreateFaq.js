import React, { useState } from "react";
import DashboardTitle from "../../components/dashboard/DashboardTitle";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navbar/Navbar";
import InputLabel from "../../components/input/InputLabel";
import TxtInput from "../../components/input/TxtInput";
import DropInput from "../../components/input/DropInput";
import MultiInput from "../../components/input/MultiInput";
import TextEditor from "../../components/input/TextEditor";
import SaveBtn from "../../components/button/SaveBtn";
import ContentSidebar from "../../components/dashboard/ContentSidebar";
import DefaultLayout from "../../components/layout/DefaultLayout";
import DashboardCreateLayout from "../../components/layout/DashboardCreateLayout";

const CreateFaq = () => {
    const [value, setValue] = useState(""); // state untuk TextEditor

    const sidebarContent = [
        {
            value: "Pertanyaan",
            url: "/dashboard-faq",
        },
        {
            value: "Kategori",
            url: "/dashboard-category",
        },
        {
            value: "Tag",
            url: "/dashboard-tag",
        },
    ];

    return (
        <DefaultLayout>
            <DashboardCreateLayout
                entityName="FAQ"
                sidebarContent={sidebarContent}
            >
                <form className="w-full bg-white rounded-lg p-8 flex flex-col gap-4">
                    {/* Pertanyaan */}
                    <div>
                        <InputLabel label="Pertanyaan" />
                        <TxtInput placeholder="Tulis pertanyaan..." />
                    </div>

                    {/* Route URL dan Kategori */}
                    <div className="grid grid-cols-2 gap-8">
                        {/* Route URL */}
                        <div>
                            <InputLabel label="Route URL" />
                            <TxtInput placeholder="Generate url..." />
                        </div>

                        {/* Kategori */}
                        <div>
                            <InputLabel label="Kategori" />
                            <DropInput />
                        </div>
                    </div>

                    {/* Tag */}
                    <div>
                        <InputLabel label="Tag" />
                        <MultiInput />
                    </div>

                    {/* Jawaban */}
                    <div>
                        <InputLabel label="Jawaban" />
                        <TextEditor setValue={setValue} />
                        {/* <div>
                Hasil: <br />
                {value}
              </div> */}
                    </div>
                    <SaveBtn />
                </form>

                {/* button */}
            </DashboardCreateLayout>
        </DefaultLayout>
    );
};

export default CreateFaq;
