import { useQuery } from "react-query";
import {GET} from '../api/index'

import { GET_STOREMAIN , GET_STOTE_BYID } from "../api/api_route";

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

