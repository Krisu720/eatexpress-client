import React, { useDebugValue } from 'react'
import create from 'zustand'

interface AuthStore {
    user: any
    setUser: (user: any) => void
}


export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    setUser: (user) => set({user}),
}))


const useAuth = () => {
    const {user} = useAuthStore()
    useDebugValue(user, user ? user.name : 'no user')
    return(useAuthStore())
}

export default useAuth