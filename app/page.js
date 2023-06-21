import React from "react";
import { getJSONUsers } from "./utils/features";
import Link from "next/link";

export const metadata = {
    title: `User page`,
};

const page = async () => {
    const users = await getJSONUsers();

    console.log(users);

    return (
        <div className="main-app">
            <h1>Hello</h1>

            {users?.map((item) => (
                // <p key={item.id}>{item.name}</p>
                <Link href={`/user/${item.id}`} key={item.id}>
                    {item.name}
                </Link>
            ))}
        </div>
    );
};

export default page;
