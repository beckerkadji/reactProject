import {memo} from "react";

function TodoList(props : any){
    return(
        <>
            {console.log("toto list component")}
            <h1>Welcome to my Todo list</h1>
            <ol>
                {props.list.map((item: any, index: any)=>{
                    return <li key={index}>{item}</li>
                })}
            </ol>

        </>
    )
}

export default memo(TodoList)