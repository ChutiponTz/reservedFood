import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: ''
}

const statusSlice = createSlice({
    name: 'status',
    initialState,
    reducers: {
        fetchStart: (state, action) => {
            return {
                ...state,
                loading: true
            }
        },
        fetchEnd: (state, action) => {
            return {
                ...state,
                loading: false
            }
        },
        fetchError: (state, action) => {
            return {
                ...state,
                error: action.payload
            }
        }
    }
})

export const { fetchStart, fetchEnd, fetchError } = statusSlice.actions

export default statusSlice.reducer