import Header from "../components/Header";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../components/Header";

function Blogs(){
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0);
    const user = useContext(UserContext)

    useEffect(()=>{
        setValue( () => count * 2)
    },[count])
    return (
        <>
            <Header />
            <h1>Blog Page hello {user} </h1>
            <p>Change on <button onClick={()=> setCount((c) => c+1)}>Double </button>: {count}</p>
            <p> We have calculate {value} times</p>
        </>
    )
}

export default Blogs