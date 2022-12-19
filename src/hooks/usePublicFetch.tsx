import React, { useEffect } from 'react'
import axios from 'axios'
interface useFetch {
    link: string;
}


const usePublicFetch = ({link}:useFetch) => {
    const [data, setData] = React.useState([])
    
    useEffect(() => {
        async ()=> {
            const res = await axios.get(link)
            setData(res.data)
        }
    }, [])
    
    return data
}

export default usePublicFetch