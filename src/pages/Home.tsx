import Header from "../components/Header";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../components/Header";

function Home(){
    const [count, setCount] = useState(0);
    const user = useContext(UserContext)

    useEffect(()=> {
        let timer = setTimeout(()=>{
            setCount((c) => c+1);
        },1000)

        return()=> clearTimeout(timer)
    }, [])
    return (
        <>
            <Header />
            <h1>Home page</h1>
            <span>Hello {user}</span>
            <p>I've rendered {count} Times !</p>
        </>
    )
}

export default Home