import { useState } from 'react'

// Extract token from local storage.

export default function useToken() {
    const getToken = () => {
        const tokenString = localStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        return userToken?.token
    }
    const [token, setToken] = useState(getToken)

    function saveToken(userToken) {
        localStorage.setItem('token', JSON.stringify(userToken))
        setToken(userToken.token)
      }
    return {
        setToken: saveToken,
        token
    }  
}