import { useRef } from "react"

export const useDebounce = (callback, ms = 500) => {
    const debounceTimeout = useRef(0)

    return [
        (...fnParams) => {
            console.log('test', fnParams)
            const functionCall = () => {
                callback(...fnParams)
            }

            clearTimeout(debounceTimeout.current)

            debounceTimeout.current = setTimeout(functionCall, ms)
        },
        () => {
            clearTimeout(debounceTimeout.current)
        }
    ]
}