import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import {store} from "./store/index";

const App:React.FC = () => {

  return (
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  )
}

export default App
