import { fetchUserPost, getJSONUsersDetails } from "@/app/utils/features";
import React, { Suspense } from "react";
import Post from "./post";

export const generateMetadata = async ({ params }) => {
    const userId = params.id;

    const user = await getJSONUsersDetails(userId);

    return {
        title: `${user.name}'s page`,
    };
};

const page = async ({ params }) => {
    const userId = params.id;

    const user = await getJSONUsersDetails(userId);
    // const posts = await fetchUserPost(userId);
    const postsPromise = fetchUserPost(userId);

    return (
        <div>
            <h1>User page</h1>
            <hr />

            <>
                <h1>{user.name}</h1>
                <h1>{user.email}</h1>
            </>
            <hr />
            <hr />
            <Suspense fallback={<div>Loading...</div>}>
                <Post userId={userId} />
            </Suspense>
        </div>
    );
};

export default page;
