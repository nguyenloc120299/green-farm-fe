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