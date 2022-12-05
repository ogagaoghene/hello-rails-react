import React, { useEffect } from "react"
import { getGreeting } from "../store/greetingsStore.jsx"
import { useDispatch, useSelector } from "react-redux"

const Greeting = () => {
    const dispatch = useDispatch()
    const greet = useSelector(state => state.greeting)

    useEffect(() => {
        dispatch(getGreeting())
      }, [])
    
    console.log(greet);


    return (
        <h2>{greet.message}</h2>
    )
}

export default Greeting;