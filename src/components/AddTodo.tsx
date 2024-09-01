import React, {FormEvent, useState} from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/index";

const AddTodo: React.FC = () => {
    const [newTodo, setNewTodo] = useState('')
    const dispach = useDispatch();

    const handleNewtodo = (e: FormEvent) => {
        e.preventDefault()

        dispach(add({
            newTodo,
        }))

        setNewTodo('')

    };

    return (
        <form onSubmit={handleNewtodo}>
            <input
            type="text"
            placeholder="Novo to-do"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    )
};

export default AddTodo;