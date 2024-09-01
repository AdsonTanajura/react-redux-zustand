import React from "react";
import { useAppSelector } from "../store";

const TodoList:React.FC = () =>{
    const todos = useAppSelector(sotre => {
        return sotre.todo
    });

    console.log(todos);

    return (
        <ul>
            {todos.map(todo => <li key={todo}>{todo}</li>)}
        </ul>
    )
};

export default TodoList;