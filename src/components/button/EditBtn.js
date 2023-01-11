import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default function EditBtn({ className = "" }) {
    return (
        <button
            className={`${className} bg-yellow-50 text-yellow-700 p-1 rounded-md hover:drop-shadow-lg hover:-translate-y-1 transition`}
        >
            <div className="w-4 h-4 grid place-content-center">
                <FontAwesomeIcon icon={faPen} />
            </div>
        </button>
    );
}
