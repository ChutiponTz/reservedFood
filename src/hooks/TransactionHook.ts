import { useMutation, useQuery } from "react-query";
import {GET,POST,DELAY} from '../api/index'
import { signIn } from "../store/slices/authSlice";
import { url } from "../api/url";
import { RESERVED } from "../api/api_route";
import { SuccessModal,ErrorModal } from "../components/AppModal";


export const useReserved:any=()=>{
    return useMutation('transaction',async(data:object)=>await POST(RESERVED,data,{headers: {
        Authorization:localStorage.getItem('token')
      }}),{
        onSuccess:()=>{
            SuccessModal();
            setTimeout(()=>{window.location.href = '/' },1000)
        },
        onError:(error:any)=>{
            ErrorModal({title:error.message});
            console.log('error', error)
        }
    } )
}
