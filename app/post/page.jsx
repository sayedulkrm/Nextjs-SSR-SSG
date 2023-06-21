import React from "react";
import { getAllPost } from "../utils/features";

const page = async () => {
    const posts = await getAllPost();

    return (
        <div>
            {" "}
            {posts?.map((item) => (
                <div key={item.userId}>
                    <h2>{item.userId}</h2>
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

export default page;
