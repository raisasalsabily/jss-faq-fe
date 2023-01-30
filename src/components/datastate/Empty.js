import React from "react";
import EmptyIcon from "../../assets/images/empty.png";

export default function Empty({ message = "Tidak ada data" }) {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <img src={EmptyIcon} style={{ width: 150 }} />
            <h4 className="mt-4 text-neutral-600 font-medium text-b-lg">
                {message}
            </h4>
        </div>
    );
}
