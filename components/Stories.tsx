import React, {useEffect, useState} from 'react';
import faker from "@faker-js/faker"
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import Story from './Story';
import {session} from "next-auth/core/routes";
import {useSession} from "next-auth/react";

export type Suggestion ={
    id: number
    name: string
    company: string
    img: string
}

function Stories() {
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const { data: session } = useSession()

    useEffect(() => {
        const suggestionsList: Suggestion[] = [...Array(30)].map((_, i) => (
            {
                id: i,
                name: "Mickey Mouse",
                company: "Onlimited ApS",
                img: "https://links.papareact.com/3ke",
            }));
        setSuggestions(suggestionsList);
    }, [])



    return (
        <div className="flex space-x-2 p-6 mt-24
         bg-white border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
            {session && (
                <Story img={session.user?.image! as string} username={session.user?.name as string} />
            )}

                {suggestions.map((user) =>(
                    <Story key={user.id} img={user.img} username={user.name}/>
                ))}
            {/*    Story    */}
            {/*    Story    */}
            {/*    Story    */}
            {/*    Story    */}
            {/*    Story    */}
            {/*    Story    */}
        </div>
    );
}

export default Stories;