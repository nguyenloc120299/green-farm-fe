import { FORM_REGISTER } from "types/auth"
import requestService from "./request"
import { RESPONSE_DATA } from "./core"


interface DATA_SIGN_UP{
    account_name: string,
    password:string
}

export const signUp= async(input:DATA_SIGN_UP): Promise<RESPONSE_DATA> =>{
    const {data:res} = await requestService.post('/signup/basic',{
        data:{
            ...input
        }
    })
    return res
}