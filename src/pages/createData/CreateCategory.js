import React, { useState } from "react";
import SaveBtn from "../../components/button/SaveBtn";
import InputLabel from "../../components/input/InputLabel";
import TxtInput from "../../components/input/TxtInput";
import DashboardCreateLayout from "../../components/layout/DashboardCreateLayout";
import DefaultLayout from "../../components/layout/DefaultLayout";

const CreateCategory = () => {
    const [name, setName] = useState("");
    const entityName = "Kategori";

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // try {
        //     await axios
        //         .post("http://localhost:5000/api/categories", {
        //             name,
        //         })
        //         .then(function (response) {
        //             //setAlert
        //         });
        // } catch (err) {
        //     console.log(err);
        // }
    };

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
                entityName="Kategori"
                sidebarContent={sidebarContent}
            >
                {/* form */}
                <form
                    className="w-full bg-white rounded-lg p-8 flex flex-col gap-4"
                    onSubmit={handleSubmit}
                >
                    {/* Nama kategori */}
                    <div>
                        <InputLabel
                            label={"Nama " + entityName.toLowerCase()}
                        />
                        <TxtInput
                            placeholder={`Tulis ${entityName} baru...`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* button */}
                    <SaveBtn />
                </form>
            </DashboardCreateLayout>
        </DefaultLayout>
    );
};

export default CreateCategory;
