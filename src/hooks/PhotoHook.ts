import { useQuery } from "react-query";
import {GET} from '../api/index'

export function usePhotos(){
    return useQuery('photos',()=> GET('https://jsonplaceholder.typicode.com/photos'))
}