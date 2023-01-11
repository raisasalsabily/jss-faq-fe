import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function DeleteBtn({ className = "" }) {
    return (
        <button
            className={`${className} bg-red-50 text-red-700 p-1 rounded-md hover:drop-shadow-lg hover:-translate-y-1 transition`}
        >
            <div className="w-4 h-4 grid place-content-center">
                <FontAwesomeIcon icon={faTrash} />
            </div>
        </button>
    );
}
