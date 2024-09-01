import React from "react";
import { Provider as ReduxProvider } from "react-redux";


import {store} from "./store/index";

const App:React.FC = () => {

  return (
    <ReduxProvider store={store}>

    </ReduxProvider>
  )
}

export default App
