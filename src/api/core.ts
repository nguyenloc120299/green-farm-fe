export enum StatusCode {
  SUCCESS = "10000",
  FAILURE = "10001",
  RETRY = "10002",
  INVALID_ACCESS_TOKEN = "10003",
}
export enum ResponseStatus {
  SUCCESS = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

export interface RESPONSE_DATA{
    data?:any,
    message:string,
    statusCode:string
}

export const getAuhorization=()=>{
    const accessToken = localStorage.getItem('accessToken') || ''
    const refreshToken = localStorage.getItem("refreshToken") || ''
    return{
        accessToken,
        refreshToken
    }
}

export const getApiKey=()=>{
    const apiKey = process.env.REACT_APP_API_KEY
    return apiKey
}


