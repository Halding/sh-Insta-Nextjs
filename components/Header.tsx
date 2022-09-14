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
import {signIn, signOut, useSession} from "next-auth/react";
import {modalState} from "../atoms/modalAtom"
import {useRouter} from "next/router";
import {useRecoilState, useRecoilValue} from "recoil";




function Header() {
    const {data : session} = useSession();
    const [open, setOpen] = useRecoilState(modalState)
    const openValue = useRecoilValue(modalState)
    const router = useRouter();


    return (

        <div className="border-b shadow-md bg-white fixed top-0 sticky left-0 right-0 z-50">
            <div className="flex justify-between bg-white max-w-6xl mx-5 xl:mx-auto">

                {/*Left*/}


                <div onClick={() => router.push('/')} className="hidden lg:inline-grid relative w-24 cursor-pointer">
                    <Image src="https://links.papareact.com/ocw"
                           layout="fill"
                           objectFit="contain"
                    ></Image>
                </div>

                <div onClick={() => router.push('/')} className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
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
                    <HomeIcon onClick={() => router.push('/')} className="navBtn"></HomeIcon>
                    <Bars3Icon className="md:hidden h-6 cursor-pointer"></Bars3Icon>

                    {session ? (
                        <>
                            <div className="relative navBtn">
                                <PaperAirplaneIcon className="navBtn -rotate-45"/>
                                <div className="absolute -top-2 -right-2 bg-red-500 rounded-full h-5 w-5 text-xs
                    flex items-center justify-center animate-pulse text-white">3

                                </div>
                            </div>

                        <PlusCircleIcon onClick={() => setOpen(true)} className="navBtn"/>
                        <UserGroupIcon className="navBtn"/>
                        <HeartIcon className="navBtn"/>

                        <img
                            onClick={() => signOut({callbackUrl: "/auth/signin"})}
                        className="rounded-full h-10 w-10 cursor-pointer"
                        src={session.user?.image! as string}
                        ></img>
                        </>
                    ): (
                        <button onClick={() => signIn()}>Sign In</button>
                    )}

                </div>

            </div>
        </div>
    );
}

export default Header;