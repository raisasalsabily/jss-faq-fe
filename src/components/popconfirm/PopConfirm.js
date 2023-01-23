import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faExclamationCircle,
    faTrash,
} from "@fortawesome/free-solid-svg-icons";

function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] =
        useState(initialIsVisible);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    return { ref, isComponentVisible, setIsComponentVisible };
}

export default function PopConfirm({
    children,
    title = "",
    desc = "",
    onConfirm,
    onCancel = () => {},
}) {
    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible(false);

    const togglePopConfirm = () => {
        setIsComponentVisible(!isComponentVisible);
    };

    const onYes = () => {
        onConfirm();
        togglePopConfirm();
    };

    const onNo = () => {
        onCancel();
        togglePopConfirm();
    };

    return (
        <div className="relative inline-block transition">
            <span onClick={togglePopConfirm}>{children}</span>
            <div
                className={`transition-all absolute -top-32 left-1/2 rounded-md -translate-x-1/2 px-5 py-4 w-64 bg-white z-30 drop-shadow-[0_0_50px_rgba(0,0,0,0.15)] ${
                    isComponentVisible
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                } 
                before:content-['_'] before:left-1/2 before:h-0 before:w-0 before:absolute before:border-transparent
                 before:border-4 before:-ml-2 before:border-t-white before:top-full`}
                ref={ref}
            >
                <div className="text-red-900 flex items-center mb-1">
                    <FontAwesomeIcon
                        icon={faExclamationCircle}
                        className="mr-2"
                    />{" "}
                    <p className="text-b-sm font-medium">
                        Penghapusan permanen
                    </p>
                </div>
                <p className="text-b-sm text-neutral-600 mb-2">
                    Anda yakin akan menghapus?
                </p>
                <div className="w-full flex justify-around">
                    <button
                        className="w-1/2 py-1 bg-red-500 text-neutral-100 text-b-sm rounded hover:bg-red-700 transition"
                        onClick={onYes}
                    >
                        <FontAwesomeIcon icon={faTrash} /> Hapus
                    </button>
                    <button
                        onClick={onNo}
                        className="ml-2 w-1/2 py-1 border border-neutral-600 text-neutral-600 text-b-sm rounded hover:bg-neutral-600 hover:text-neutral-100 transition"
                    >
                        Batal
                    </button>
                </div>
            </div>
        </div>
    );
}
