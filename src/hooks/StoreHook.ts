import { useMutation, useQuery } from "react-query";
import {GET,POST,DELAY} from '../api/index'
import { signIn } from "../store/slices/authSlice";
import { url } from "../api/url";
import { GET_STOREMAIN , GET_STOTE_BYID } from "../api/api_route";
import { SuccessModal,ErrorModal } from "../components/AppModal";

export const useGetDataStore:any=()=>{
    return useQuery('store',()=>GET(GET_STOREMAIN,{headers: {
        Authorization:localStorage.getItem('token')
      }}),{
        onSuccess:()=>{

        },
        // refetchInterval:2000
    })
}

export const useGetDataStoreDetail:any=(id:string)=>{
  return useQuery('store',()=>GET(GET_STOTE_BYID+"/"+id,{headers: {
      Authorization:localStorage.getItem('token')
    }}),{
      onSuccess:()=>{

      },
      // refetchInterval:2000
  })
}

