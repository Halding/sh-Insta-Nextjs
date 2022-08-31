import React, {useEffect, useState} from 'react';
import faker from "@faker-js/faker"
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;
import Story from './Story';

export type Suggestion ={
    id: number
    name: string
    company: string
    img: string
}

function Stories() {
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

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