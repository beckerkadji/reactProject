import {useState} from "react";
import TodoList from "../components/Todo";
import Header from "../components/Header";

function TodoPage(){
    const [todos, setTodos] = useState(['todo 1', 'todo 2'])
    const [count, setCount] = useState(todos.length)

    const increment = ()=>{
        setCount((c) => c+1)
        setTodos((values) =>[...values, `todo ${todos.length }`])
    }
    return(
        <>
            <Header />
            <TodoList list={todos}/>
            <hr />
            <div>
                Count : {count}
                <button onClick={increment} style={{backgroundColor: "black", padding: "5px 10px", color: "white", border: "none", marginLeft:"5px"}}>+</button>
            </div>
        </>
    )
}

export default TodoPage