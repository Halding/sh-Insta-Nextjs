import React from 'react';

function Story({img,username}: {img:string, username:string}) {
    return (
        <div className="">
            <img className="h-14 w-14 p-[1.5px] rounded-full border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transform transition duration-200 ease-out" src={img} alt=""/>
            <p className="text-xs w-14 truncate text-center">{username}</p>
        </div>
    );
}

export default Story;