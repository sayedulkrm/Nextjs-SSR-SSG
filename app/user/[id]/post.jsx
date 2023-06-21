import { fetchUserPost } from "@/app/utils/features";
import React from "react";

const Post = async ({ userId }) => {
    const posts = await fetchUserPost(userId);

    // const posts = await postsPromise;
    return (
        <div>
            <h1>User Post</h1>

            {posts?.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <br />
                    <br />
                    <h4>{item.body}</h4>

                    <br />
                    <br />
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default Post;
