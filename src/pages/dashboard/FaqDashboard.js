import React, { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import DefaultLayout from "../../components/layout/DefaultLayout";

const FaqDashboard = () => {
    const faqData = [
        {
            id: 1,
            title: "Bagaimana cara menginstall aplikasi JSS di android/iphone saya?",
            category: "Akun",
        },
        {
            id: 2,
            title: "Bagaimana cara mendaftar JSS menggunakan WhatsApp?",
            category: "Akun",
        },
        {
            id: 3,
            title: "Bagaimana cara mendaftar JSS menggunakan email?",
            category: "Akun",
        },
        {
            id: 4,
            title: "Link aktivasi tidak terkirim ke WhatsApp saya",
            category: "Akun",
        },
        {
            id: 5,
            title: "Username dan/atau password saya dinyatakan salah",
            category: "Akun",
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
                entityName="Pertanyaan"
                data={faqData}
                sidebarContent={sidebarContent}
                addLink="/createfaq"
            />
        </DefaultLayout>
    );
};

export default FaqDashboard;
