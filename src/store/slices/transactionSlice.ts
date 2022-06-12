import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    balance:null
}

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    reducers: {
        getBalance:(state,action)=>{
            state.balance = action.payload.result
        }
    }
})

export const {getBalance} = transactionSlice.actions

export default transactionSlice.reducer