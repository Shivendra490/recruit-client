import { useEffect } from 'react'
import { getUserInfo } from './services/localStorage'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const navigate=useNavigate()
    const {token,email,userId}=getUserInfo()
    useEffect(()=>{
        if(!token || !email || !userId){
            navigate('/login')
        }
    })
   return children
  
}

export default ProtectedRoute
