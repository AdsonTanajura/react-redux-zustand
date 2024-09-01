import React from "react";
import {useSelector} from "react-redux";

const TodoList:React.FC = () =>{
    const todos = useSelector(sotre => {
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