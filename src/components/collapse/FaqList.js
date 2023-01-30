import React, { useState } from "react";
import FaqItem from "./FaqItem";
import { Icon } from "@iconify/react";
import PopupCategory from "../Category/PopupCategory";
import useComponentVisible from "../../hooks/useComponentVisible";
import Empty from "../empty/Empty";

export default function FaqList({ data, category, cats }) {
    return (
        <div>
            <h3 className="hidden md:block text-bold font-bold text-b-xl text-neutral-900">
                {category}
            </h3>
            <div className={category ? "sm:ml-4 px-6 md:px-0" : null}>
                {data.length > 0 ? (
                    data.map(
                        ({ question, answer, category, tag, _id }, idx) => (
                            <div
                                style={{
                                    animationDuration: `${300 + idx * 50}ms`,
                                }}
                                className="fade"
                            >
                                <FaqItem
                                    title={question}
                                    content={answer}
                                    category={category}
                                    tag={tag}
                                    _id={_id}
                                />
                            </div>
                        )
                    )
                ) : (
                    <div
                        style={{
                            animationDuration: `300ms`,
                        }}
                        className="w-full h-full min-h-[300px] grid place-items-center fade"
                    >
                        <Empty />
                    </div>
                )}
            </div>
        </div>
    );
}
