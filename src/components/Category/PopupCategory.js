import React from "react";
import CategorySidebar from "./CategorySidebar";
import SingleList from "./SingleList";
import { Icon } from "@iconify/react";

function PopupCategory({ cats, setIsComponentVisible }) {
    return (
        <div
            className="w-full py-4 bg-white text-neutral-700 text-b-lg font-medium rounded-md
    "
        >
            <div className="px-10 py-4 md:px-6 md:py-2 mb-1 text-b-md font-bold flex items-center md:pl-0">
                <Icon icon="ic:outline-menu-open" className="w-6 h-6" />
                <p className="pl-1">KATEGORI</p>
            </div>
            <ul>
                {cats.map((c) =>
                    c.show ? (
                        <div onClick={() => setIsComponentVisible(false)}>
                            <SingleList
                                value={c.category}
                                to={`/?cat=${c.category}`}
                            />
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    );
}

export default PopupCategory;
