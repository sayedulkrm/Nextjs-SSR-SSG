import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://645a23b065bd868e9312083e.mockapi.io/reduxcurd";

export const getAllUsers = createAsyncThunk(
    "user/getAllUsers",
    async (arg, { rejectWithValue }) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.response.message);
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoading: false,
        users: [],
        error: null,
    },
    extraReducers: (builder) => {
        //
        //
        // <===========     Read    ==========>
        //
        //

        builder.addCase(getAllUsers.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
        });

        builder.addCase(getAllUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });

        //
        //
        // <===========     CREATE    ==========>
        //
        //
    },
});

export default userSlice.reducer;
