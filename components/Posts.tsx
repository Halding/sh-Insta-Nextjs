import React from 'react';
import Post from "./Post";

export type DataDummy = {
    id: number
    username: string
    userImg: string
    img: string
    caption: string
}

const DUMMY_DATA = [
    {
        id: 123,
        username: "DJ John",
        userImg: "https://links.papareact.com/3ke",
        img: "https://i.postimg.cc/wT9xZtC7/IMG-20210503-220304.jpg",
        caption: "this is dope"
    },
    {
        id: 123,
        username: "DJ John",
        userImg: "https://links.papareact.com/3ke",
        img: "https://links.papareact.com/3ke",
        caption: "this is dope"
    },
];

function Posts() {
    return (
        <div>
            {DUMMY_DATA.map((post) => (
                <Post key={post.id} id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}/>
            ))}

        </div>
    );
}

export default Posts;