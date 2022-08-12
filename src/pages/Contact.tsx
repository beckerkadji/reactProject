import MyForm from "../components/Form";
import Header from "../components/Header";
import {UserContext} from "../components/Header";
import {useContext} from "react";
function Contact(){
    const user = useContext(UserContext)
    return (
        <>
            <Header/>

            <h1>Contact page</h1>
            <p>Hello {user}</p>
            <MyForm />
        </>
    )
}

export default Contact