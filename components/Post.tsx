import React from 'react';
import {DataDummy} from "./Posts";
import {
    BookmarkIcon,
    ChatBubbleLeftIcon,
    EllipsisHorizontalIcon,
    HeartIcon,
    PaperAirplaneIcon,
    FaceSmileIcon,
    HandThumbUpIcon

} from "@heroicons/react/24/outline";
import {HeartIcon as HeartIconFilled} from "@heroicons/react/24/solid"

function Post({id, username, userImg, img}: DataDummy) {
    return (
        <div className="bg-white my-7 border">

            {/*    Header  */}

            <div className="flex items-center p-5">
                <img className="rounded-full h-12 w-12 object-contain border p-1 mr-3" src={userImg} alt=""/>
                <p className="flex-1 font font-bold">{username}</p>
                <EllipsisHorizontalIcon className="h-5"/>
            </div>
            {/*    img     */}

            <img src={img} className="object-cover w-full" alt=""/>
            {/*   buttons  */}
            <div className="flex justify-between px-4 py-4">
                <div className="flex space-x-4">
                    <HeartIconFilled className="btnIcon text-red-600"/>
                    <ChatBubbleLeftIcon className="btnIcon"/>
                    <PaperAirplaneIcon className="btnIcon"/>
                </div>
                <BookmarkIcon className="btnIcon"/>
            </div>
            {/*    captions */}
            <div>
                <p className="p-5 truncate">
                    <span className="font-bold mr-1">{username}: </span>
                    Dette er en TEST til Caption så her står en lang besked, som kan virke MEGET VIGTIG - men slet ikke
                </p>
            </div>
            {/*    comments*/}
            {/*    input box*/}
            <form className="flex items-center space-x-4 p-4">
                <FaceSmileIcon className="h-7"/>
                <input type="text"
                       placeholder="Add a comment..."
                       className="border-none flex-1 focus:ring-0 outline-none"/>
                <button className="border font-semibold text-white bg-blue-400 rounded-md border-black p-2">Post</button>
            </form>

        </div>
    );
}

export default Post;