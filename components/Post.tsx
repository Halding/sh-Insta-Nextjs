import React, {useEffect, useState} from 'react';

import {
    BookmarkIcon,
    ChatBubbleLeftIcon,
    EllipsisHorizontalIcon,
    PaperAirplaneIcon,
    FaceSmileIcon,
    HeartIcon
} from "@heroicons/react/24/outline";
import {HeartIcon as HeartIconFilled} from "@heroicons/react/24/solid"
import {PostsData} from "./Posts";
import {useSession} from "next-auth/react";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    setDoc
} from "@firebase/firestore";
import {db} from "../firebase";
import Moment from "react-moment";

function Post({id, username, userImg, img, caption}: PostsData) {
    const {data: session} = useSession();
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(
        () =>
            onSnapshot(
                query(collection(db, "posts", id, "comments"), orderBy("timestamp", "desc")),
                (snapshot) => {
                    return setComments(snapshot.docs);
                }), [db, id]);

    useEffect(
        () =>
            onSnapshot(collection(db,"posts", id, "likes"),(snapshot) =>
            setLikes(snapshot.docs)
            ),
        [db, id]
    );

    useEffect(() =>
        setHasLiked(
            likes.findIndex((like) => like.id === session?.user?.name) !== -1
        ),
     [likes]
    );

    const likePost = async () => {
        if (hasLiked) {
            console.log("testtttt")
            await deleteDoc(doc(db, "posts", id, "likes", session?.user?.name));
        } else {
        await setDoc(doc(db,"posts", id, "likes", session?.user?.name), {
            username: session?.user?.name,
        });

        }
    };


    const sendComment = async (e: any) => {
        e.preventDefault();


        const commentToSend = comment
        setComment('');

        await addDoc(collection(db, "posts", id, "comments"), {
            comment: commentToSend,
            username: session?.user?.name,
            userImage: session?.user?.image,
            timestamp: serverTimestamp(),
        })
    }

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

            {session && (

                <div className="flex justify-between px-4 py-4">
                    <div className="flex space-x-4">
                        {hasLiked ? (<HeartIconFilled onClick={likePost} className="btnIcon text-red-600"/>)
                            : (
                            <HeartIcon onClick={likePost} className="btnIcon"/>
                        )}
                        <ChatBubbleLeftIcon className="btnIcon"/>
                        <PaperAirplaneIcon className="btnIcon"/>
                    </div>
                    <BookmarkIcon className="btnIcon"/>
                </div>


            )}
            {/*    captions */}
            <div>
                <p className="p-5 truncate">
                    {likes.length > 0 && (
                        <p className="font-bold mb-1">{likes.length} likes</p>
                    )}
                    <span className="font-bold mr-1">{username}: </span>
                    {caption}
                </p>
            </div>
            {/*    comments*/}
            {comments?.length > 0 && (
                <div className="ml-10 h-20 overflow-y-scroll
                 scrollbar-thumb-black scrollbar-thin">
                    {comments?.map((comment) => (
                        <div key={comment.id} className="flex items-center
                         space-x-2 mb-3">
                            <img
                                className="h-7 rounded-full"
                                src={comment.data().userImage}
                                alt=""
                            />
                            <p className="text-sm flex-1">
                                <span className="font-bold mr-2">
                                {comment.data().username} :
                                </span>
                                {comment.data().comment}
                            </p>

                            <Moment fromNow className="pr-5 text-xs">
                                {comment.data().timestamp?.toDate()}
                            </Moment>
                        </div>
                    ))}
                </div>
            )}

            {/*    input box*/}
            {session && (

                <form className="flex items-center space-x-4 p-4">
                    <FaceSmileIcon className="h-7"/>
                    <input type="text"
                           value={comment}
                           onChange={e => setComment(e.target.value)}
                           placeholder="Add a comment..."
                           className="border-none flex-1 focus:ring-0 outline-none"/>
                    <button type="submit" onClick={sendComment} disabled={!comment?.trim()}
                            className="border font-semibold text-blue-500 rounded-md border-none hover:bg-gray-100 p-2">Post
                    </button>
                </form>
            )}


        </div>
    );
}

export default Post;