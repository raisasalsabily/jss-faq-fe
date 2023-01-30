import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

export default function FaqItem({
    title,
    content,
    category,
    tag,
    _id,
    faqRoute,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLong, setIsLong] = useState(false);

    useEffect(() => {
        if (content?.length > 250) setIsLong(true);
    }, [content]);

    return (
        <div className="mt-8 pb-8 border-b border-neutral-200">
            <div
                className="flex justify-around w-full"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="w-11/12 text-b-md md:text-b-lg text-neutral-800">
                    {title ? title : null}
                </p>
                <button className="w-1/12 text-right">
                    {isOpen ? "-" : "+"}
                </button>
            </div>

            <div
                className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-96" : "max-h-0"
                }`}
            >
                <p
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(content),
                    }}
                    className="mt-4 text-b-sm sm:text-b-md text-neutral-600 line-clamp"
                />
                {isLong ? (
                    <Link to={`/post/${_id}#article`}>
                        <button className="mt-2 text-b-sm sm:text-b-md text-teal-500 hover:text-teal-700 transition">
                            Baca selengkapnya
                        </button>
                    </Link>
                ) : null}
            </div>
        </div>
    );
}
