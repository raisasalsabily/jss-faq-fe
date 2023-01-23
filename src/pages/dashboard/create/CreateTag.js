import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SaveBtn from "../../../components/button/SaveBtn";
import DashboardTitle from "../../../components/dashboard/DashboardTitle";
import InputLabel from "../../../components/input/InputLabel";
import TxtInput from "../../../components/input/TxtInput";
import DashboardLayout from "../../../components/layout/DashboardLayout";
import DefaultLayout from "../../../components/layout/DefaultLayout";

export default function CreateTag() {
    const [tag, setTag] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios
                .post("http://localhost:5000/api/tags", {
                    tag,
                })
                .then(function (response) {
                    //setAlert
                    navigate("/dashboard/tag");
                });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <DefaultLayout>
            <DashboardLayout>
                {/* title */}
                <div className="">
                    <DashboardTitle
                        id="create-data-title"
                        title="Menambah Data"
                        subTitle="Tag"
                    />
                </div>
                <form
                    className="w-full bg-white rounded-lg p-8 flex flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    {/* Nama tag */}
                    <div>
                        <InputLabel label="Nama tag" />
                        <TxtInput
                            placeholder="Tulis tag baru..."
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                        />
                    </div>

                    {/* button */}
                    <SaveBtn />
                </form>
            </DashboardLayout>
        </DefaultLayout>
    );
}
