import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    user:null,
    token_id:''
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn:(state,action)=>{
                state.user = action.payload.result.user;
                state.token_id = action.payload.result.tokenId;
                localStorage.setItem('token',action.payload.result.tokenId);
                localStorage.setItem('accountId',action.payload.result.user._id);
        },
        signUp:(state,action)=>{
            state.user = action.payload.result.account;
                state.token_id = action.payload.result.tokenId;
                localStorage.setItem('token',action.payload.result.tokenId);
                localStorage.setItem('accountId',action.payload.result.account._id);
        },
        signOut:(state)=>{
            state.user = null;
            state.tokenId ='';
            localStorage.removeItem('token');
            localStorage.removeItem('accountId');
        },
        getInfo:(state,action)=>{
            state.user = action.payload.result.account;
            
        }
    }
})

export const {signIn,signOut,signUp,getInfo} = authSlice.actions

export default authSlice.reducer