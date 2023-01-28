import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

export default function SlugButton({ onClick }) {
    return (
        <div
            className="right-1 top-2 flex items-center bg-white rounded-full p-1 absolute hover:cursor-pointer"
            onClick={onClick}
        >
            <FontAwesomeIcon
                icon={faUndo}
                className="text-neutral-700 drop-shadow-sm"
            />
        </div>
    );
}
