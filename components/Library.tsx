"use client";

import { BiLibrary } from "react-icons/bi"

const Library = () => {

    const onClick = () => {

    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-5">
                <div className="inline-flex items-center gap-x-2">
                    <BiLibrary size={26} className="text-neutral-400"/>
                    <p className="text-neutral-400 font-medium text-md">Your Library</p>
                </div>
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">list</div>
        </div>
    );
}

export default Library;