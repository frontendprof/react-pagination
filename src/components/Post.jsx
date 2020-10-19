
import React from 'react';

const Post = ({posts,loading}) => {

    if(loading){
        return <h2>Loading ...</h2>
    }


    return <ul className="list-group mb-4">
        {posts.map(post=>(
            <li className="list-group-item text-light w-80 p-3 bg-dark" key={post.id}>{post.title}</li>

        ))}
    </ul>
}


export default Post;