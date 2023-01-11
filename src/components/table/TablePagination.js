import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function TablePagination({ range, setPage, page, slice }) {
    useEffect(() => {
        if (slice.length < 1 && page !== 1) setPage(page - 1);
    }, [slice, page, setPage]);

    const onPrevClick = () => {
        if (page !== range[0]) setPage(page - 1);
    };

    const onNextClick = () => {
        if (page !== range[range.length - 1]) setPage(page + 1);
    };

    return (
        <div className="mt-4 flex gap-1 float-right">
            <button
                className="transition text-b-sm w-6 h-6 tabular-nums rounded text-neutral-700 hover:text-teal-500"
                onClick={onPrevClick}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            {range.map((el) => {
                return (
                    <button
                        key={el}
                        className={`transition text-b-sm w-6 h-6 tabular-nums rounded  ${
                            page === el
                                ? "text-teal-900 bg-teal-50"
                                : " text-neutral-700 hover:text-teal-500"
                        }`}
                        onClick={() => setPage(el)}
                    >
                        {el}
                    </button>
                );
            })}
            <button className="transition text-b-sm w-6 h-6 tabular-nums rounded text-neutral-700 hover:text-teal-500">
                <FontAwesomeIcon icon={faChevronRight} onClick={onNextClick} />
            </button>
        </div>
    );
}
