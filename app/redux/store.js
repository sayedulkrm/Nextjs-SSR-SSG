"use client";

import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./Features/Users/userSlice";

const store = configureStore({
    reducer: {
        users: userSlice,
    },
});

export default store;
