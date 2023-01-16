import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import DefaultLayout from "../../components/layout/DefaultLayout";

const CategoryDashboard = () => {
    const categoryData = [
        {
            id: 1,
            name: "Akun",
        },
        {
            id: 2,
            name: "Dukcapil",
        },
        {
            id: 3,
            name: "Kesehatan",
        },
        {
            id: 4,
            name: "Pelayanan",
        },
        {
            id: 5,
            name: "Pengaduan",
        },
    ];

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
            <DashboardLayout
                entityName="Kategori"
                data={categoryData}
                sidebarContent={sidebarContent}
                addLink="/createcategory"
            />
        </DefaultLayout>
    );
};

export default CategoryDashboard;