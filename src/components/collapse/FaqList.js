import React from "react";
import FaqItem from "./FaqItem";

export default function FaqList({ data }) {
    return (
        <div>
            {/* <h4 className="text-h-sm font-bold">{category}</h4> */}
            <div className="sm:ml-4">
                {data.map(({ title, article }) => (
                    <FaqItem title={title} content={article} />
                ))}
            </div>
        </div>
    );
}
