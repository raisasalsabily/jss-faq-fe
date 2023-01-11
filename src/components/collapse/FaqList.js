import React from "react";
import FaqItem from "./FaqItem";

export default function FaqList({ data, category }) {
    return (
        <div>
            {category && <h4 className="text-h-sm font-bold">{category}</h4>}

            <div className={category && "sm:ml-4"}>
                {data.map(({ title, article }) => (
                    <FaqItem title={title} content={article} />
                ))}
            </div>
        </div>
    );
}
