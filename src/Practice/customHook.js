import { useEffect, useState } from "react"

export function useLocalStorage(key,initialValue){
    const [value, setValue] = useState(initialValue)

    useEffect(()=>{
        const saved = localStorage.getItem(key)
        if(saved){
            setValue(JSON.parse(saved))
        }
    },[])
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value,key])
    return [value,setValue]
}
