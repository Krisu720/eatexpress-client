import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuth, { useAuthStore } from './useAuth'

const useRefreshToken = () => {
    const {setUser,user} = useAuth()

    const refresh = async () => {
        const res = await axios.get('',{withCredentials: true})
        setUser(()=> {
            console.log(JSON.stringify(user))
            console.log(res.data.accessToken)
            return {...user, accessToken: res.data.accessToken}
        })
        return res.data.accessToken
}
    return {refresh}
}
export default useRefreshToken