import React from 'react';
import Image from "next/image";
import {
    MagnifyingGlassIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    Bars3Icon

} from "@heroicons/react/24/solid";



function Header() {
    return (
        <div className="flex justify-between bg-white max-w-6xl">


            {/*Left*/}

            <div className="hidden lg:inline-grid relative h-24 w-24 cursor-pointer">
                <Image src="https://links.papareact.com/ocw"
                layout="fill"
                objectFit="contain"
                ></Image>
            </div>

            <div className="relative h-10 w-10 lg:hidden flex-shrink-0 cursor-pointer">
                <Image src="https://links.papareact.com/jjm"
                       layout="fill"
                       objectFit="contain"
                ></Image>
            </div>


            {/*Middle searchinput*/}

            <div>
                <div>
                    <MagnifyingGlassIcon></MagnifyingGlassIcon>
                </div>
                <input type="text" placeholder="Search"/>
            </div>

            {/*Right*/}

            <div></div>

            <div></div>


        </div>
    );
}

export default Header;