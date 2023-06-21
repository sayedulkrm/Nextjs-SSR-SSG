const api = "https://jsonplaceholder.typicode.com/users";
const api2 = "https://jsonplaceholder.typicode.com/posts";

export const getJSONUsers = async () => {
    try {
        const res = await fetch(api, {
            cache: "no-cache",
        });

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export const getJSONUsersDetails = async (id) => {
    try {
        const res = await fetch(`${api}/${id}`, {
            cache: "no-cache",
        });

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export const fetchUserPost = async (userId) => {
    try {
        const res = await fetch(`${api2}?userId=${userId}`, {
            cache: "no-cache",
        });

        const data = res.json();

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data);
            }, 5000);
        });
    } catch (error) {
        console.log(error);
    }
};

export const getAllPost = async () => {
    try {
        const res = await fetch(api2);

        const data = res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
