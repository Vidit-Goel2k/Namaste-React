import { useState, useEffect } from 'react';

// understood that its not mandatory to name custom hooks starting with 'use' but it is the recommended naming convention
const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(true)

    useEffect(()=>{
        window.addEventListener('online', ()=>{
            setIsOnline(true)
        })
        window.addEventListener('offline', ()=>{
            setIsOnline(false)
        })
    }, [])

    return isOnline
}

export default useOnlineStatus