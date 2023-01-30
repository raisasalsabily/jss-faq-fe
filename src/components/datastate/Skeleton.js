import React from "react";

export default function Skeleton() {
    return (
        <div
            className="w-full flex flex-col gap-4 animate-pulse my-4"
            data-aos="fade"
        >
            <div className="w-3/12 h-6 bg-neutral-100 rounded-md"></div>
            <div className="w-11/12 h-6 bg-neutral-100 rounded-md"></div>
            <div className="w-12/12 h-6 bg-neutral-100 rounded-md"></div>
            <div className="w-6/12 h-6 bg-neutral-100 rounded-md"></div>
            <div className="w-8/12 h-6 bg-neutral-100 rounded-md"></div>
            <div className="w-12/12 h-6 bg-neutral-100 rounded-md"></div>
        </div>
    );
}
