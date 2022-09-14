import React, {useEffect, useState} from 'react';
import Post from "./Post";
import {collection, onSnapshot, orderBy, query} from "@firebase/firestore";
import {db} from "../firebase";

export type PostsData = {
    key: string
    id: number
    username: string
    userImg: string
    img: string
    caption: string
}


function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(
        () =>
            onSnapshot(
                query(collection(db, "posts"), orderBy("timestamp", "desc")),
                (snapshot) => {
                    return setPosts(snapshot.docs);
                }), [db]);

    console.log(posts)

    return (
        <div>
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    username={post.data().username}
                    userImg={post.data().profileImg}
                    img={post.data().image}
                    caption={post.data().caption}/>
            ))}

        </div>
    );
}

export default Posts;