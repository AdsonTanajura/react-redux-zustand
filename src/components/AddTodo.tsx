import React, {FormEvent, useState} from "react";

const AddTodo: React.FC = () => {
    const [newTodo, setNewTodo] = useState('')

    const handleNewtodo = (e: FormEvent) => {
        e.preventDefault()

        console.log(newTodo);
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