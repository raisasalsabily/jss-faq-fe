import React, { useState } from "react";
import FaqItem from "./FaqItem";
import { Icon } from "@iconify/react";
import PopupCategory from "../Category/PopupCategory";
import useComponentVisible from "../../hooks/useComponentVisible";

export default function FaqList({ data, category, cats }) {
    const { ref, isComponentVisible, setIsComponentVisible } =
        useComponentVisible(false);

    const togglePopup = () => {
        setIsComponentVisible(!isComponentVisible);
    };

    return (
        <div>
            <div className="flex flex-row">
                <button
                    className="px-5 md:hidden flex items-center py-4 text-b-xl w-full border-b md:border-b-0 border-neutral-300"
                    onClick={togglePopup}
                >
                    <span className="text-h-md">
                        <Icon icon="material-symbols:chevron-right-rounded" />
                    </span>
                    {category ? (
                        <h4 className="font-bold">{category}</h4>
                    ) : (
                        <h4 className="font-bold">Pilih Kategori</h4>
                    )}
                </button>
                <div
                    ref={ref}
                    className={`md:hidden absolute z-10 w-full left-0 drop-shadow-[0_0_35px_rgba(0,0,0,0.15)] top-20 transition-all  ${
                        isComponentVisible
                            ? "visible opacity-100"
                            : "invisible opacity-0"
                    }`}
                >
                    <PopupCategory
                        cats={cats}
                        setIsComponentVisible={setIsComponentVisible}
                    />
                </div>
            </div>

            <div className={category ? "sm:ml-4 px-6 md:px-0" : null}>
                {data.length > 0
                    ? data.map(({ question, answer, category, tag, _id }) => (
                          <FaqItem
                              title={question}
                              content={answer}
                              category={category}
                              tag={tag}
                              _id={_id}
                          />
                      ))
                    : null}
            </div>
        </div>
    );
}
