import React, { useEffect, useRef, useState } from "react";
import useComponentVisible from "../../hooks/useComponentVisible";

export default function Tooltip({ children, content, delay }) {
    return (
        <div className="relative inline-block group">
            <div className="flex items-center group">{children}</div>
            <div
                className={`absolute w-24 z-30 left-1/2 top-[150%] -ml-12 rounded-md bg-neutral-100 py-2 drop-shadow-[0_0_50px_rgba(0,0,0,0.15)]  
                invisible opacity-0 
                group-hover:visible group-hover:opacity-100 transition-all
                before:content-['_'] before:left-1/2 before:bottom-full  before:h-0 before:w-0 before:absolute before:border-transparent
                 before:border-4 before:-ml-1 before:border-b-neutral-100`}
            >
                <p className="text-b-sm text-neutral-500 block text-center">
                    {content}
                </p>
            </div>
        </div>
    );
}
