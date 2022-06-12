import axios from 'axios'
import {url} from './url'

const GET = async (path:string,config?:Object):Promise<any> => {
    return new Promise((resolve,reject)=>{
        axios({
            method:'GET',
            url:`${url}${path}`,
            ...config
        })
        .then(res=>resolve(res.data))
        .catch(error=>reject(error.response.data))
    })
}

const POST = async (path:string,data:{},config?:Object) => {

    return new Promise((resolve,reject)=>{
        axios({
            method:'POST',
            url:`${url}${path}`,
            data:data,
            ...config
        })
        .then(res=>{resolve(res.data)})
        .catch(error=>reject(error.response.data))
    })
}

const DELAY = (fn:any,t:number)=>{
    setTimeout(()=>{
        fn()
    },t)
    
}

export {GET,POST,DELAY}