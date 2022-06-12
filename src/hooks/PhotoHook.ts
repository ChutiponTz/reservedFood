import { useQuery } from "react-query";
import {GET,DELAY} from '../api/index'
import { Photo } from "../types";

export function usePhotos(){
    return useQuery('photos',()=> GET('https://jsonplaceholder.typicode.com/photos'))
}