import React from 'react';
import Image from "next/image";
import {
    MagnifyingGlassIcon,
    Bars3Icon,
    HomeIcon
} from "@heroicons/react/24/solid";
import {
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/24/outline";


function Header() {
    return (
        <div className="border-b shadow-md bg-white fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto">


                {/*Left*/}

                <div className="hidden lg:inline-grid relative w-24 cursor-pointer">
                    <Image src="https://links.papareact.com/ocw"
                           layout="fill"
                           objectFit="contain"
                    ></Image>
                </div>

                <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image src="https://links.papareact.com/jjm"
                           layout="fill"
                           objectFit="contain"
                    ></Image>
                </div>


                {/*Middle Searchinput*/}

                <div className="max-w-xs">
                    <div className="mt-1 relative p-3 rounded-md">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-500"/>
                        </div>
                        <input
                            className=" bg-gray-50 block w-full pl-10 sm:text-sm focus:ring-black focus:border-black rounded-md border-gray-300"
                            type="text" placeholder="Search"/>
                    </div>
                </div>


                {/*Right*/}
                <div className="flex items-center justify-end gap-4">
                    <HomeIcon className="navBtn"></HomeIcon>
                    <Bars3Icon className="md:hidden h-6 cursor-pointer"></Bars3Icon>

                    <div className="relative navBtn">
                        <PaperAirplaneIcon className="navBtn -rotate-45"/>
                        <div className="absolute -top-2 -right-2 bg-red-500 rounded-full h-5 w-5 text-xs
                    flex items-center justify-center animate-pulse text-white">3

                        </div>
                    </div>

                    <PlusCircleIcon className="navBtn"/>
                    <UserGroupIcon className="navBtn"/>
                    <HeartIcon className="navBtn"/>

                    <Image
                        className="rounded-full h-10 w-10"
                        src="https://i.postimg.cc/t4MXsBYx/IMG-20220317-222355-2.jpg"
                        width="40"
                        height="40"
                        layout="fixed"
                        objectFit="fill"
                    ></Image>

                </div>

            </div>
        </div>
    );
}

export default Header;