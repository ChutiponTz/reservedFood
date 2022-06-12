import { useMutation } from "react-query";
import {GET,POST,DELAY} from '../api/index'
import { useAppDispatch } from "../store/store";
import { setPost } from "../store/slices/postSlice";
import { message } from "antd";

export const usePosts=()=>{
    const dispatch = useAppDispatch()
    return useMutation('posts',async(data:object)=>await POST('https://jsonplaceholder.typicode.com/posts',data),{
        onSuccess:(data)=>{
            dispatch(setPost(data))
        },
        onError:(error)=>{
            console.log('error',error)
            
        }
    })
}