import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (param1, reduxParams) => {
    try {
        // await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return response.data
        // return []
    } catch {
        // throw error
        return reduxParams.rejectWithValue({
            status: "error",
            message: "Error in fetching post"
        })
    }
})

const postSlice = createSlice({
    name: "posts",
    initialState: {
        data: [],
        isLoading: false,
        error: ""
    }, reducers: {

    }, extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true;
        }).addCase(fetchPosts.rejected, (state, action) => {

            state.error = action.payload;
            state.isLoading = false;
        }).addCase(fetchPosts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
        })
    }
})

export default postSlice.reducer;