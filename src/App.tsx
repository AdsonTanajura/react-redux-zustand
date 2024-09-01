import React from "react"

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App:React.FC = () => {

  return (
    <div>
      <TodoList />
      <AddTodo />
    </div>
  )
}

export default App
