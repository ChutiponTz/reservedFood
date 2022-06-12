import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    posts:{}
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPost:(state,action)=>{
            state.posts = action.payload
        }
    }
})

export const {setPost} = postSlice.actions

export default postSlice.reducer