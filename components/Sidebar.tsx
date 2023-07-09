"use client";

import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { GoHome } from "react-icons/go";
import { BiSearch } from "react-icons/bi";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
    children: React.ReactNode;
}


const Sidebar: React.FC<SidebarProps> = ({children}) => {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            icon: GoHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search',
        }
    ], [])

    return (
        <div className="h-full">
            <div className="px-2">
                <Box className="flex w-full px-5 py-2 mt-2">
                    <img src="./favicon.ico" className="w-6 h-6"/>
                    <p className="px-2">Better Spotify</p>
                </Box>
            </div>
            <div className="flex h-full">
                <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
                    <Box>
                        <div className="flex flex-col gap-y-4 px-5 py-4">
                            {routes.map((item) => (
                                <SidebarItem 
                                    key={item.label}
                                    {...item}
                                />
                            ))}
                        </div>
                    </Box>
                    <Box className="h-full">
                        <Library/>
                    </Box>
                </div>
                <main className="flex-1 overflow-y-auto py-2">
                    {children}
                </main>
            </div>
        </div>
    );
}  

export default Sidebar;