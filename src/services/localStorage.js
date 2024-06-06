export const storeUserInfo=(token,userId,email)=>{
    if(!token || !userId || !email){
        return 
    }
    localStorage.setItem('token',JSON.stringify(token))
    localStorage.setItem('userId',JSON.stringify(userId))
    localStorage.setItem('email',JSON.stringify(email))
    return {token,email,userId}
}