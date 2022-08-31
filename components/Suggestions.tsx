import React, {useEffect, useState} from 'react';
import {Suggestion} from "./Stories";

function Suggestions() {

    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

    useEffect(() => {
        const suggestionsList: Suggestion[] = [...Array(5)].map((_, i) => (
            {
                id: i,
                name: "Hairy Potter",
                company: "Onlimited ApS",
                img: "https://links.papareact.com/d0c",
            }));
        setSuggestions(suggestionsList);
    }, [])

    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggstions for you</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>

            {suggestions.map(profile => (
                <div key={profile.id} className="flex items-center justify-between mt-3">
                    <img className="h-10 w-10 rounded-full border p-[px]" src={profile.img} alt=""/>

                    <div className="flex-1 ml-1">
                        <h2 className="font-semibold text-sm"/>{profile.name}
                        <h3 className="text-gray-400 text-xs">Works at {profile.company}</h3>
                    </div>

                    <button className="text-blue-400 font-bold text-sm">Follow</button>

                </div>
            ))}

        </div>
    );
}

export default Suggestions;