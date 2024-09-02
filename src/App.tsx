import React from "react";
import { Provider as ReduxProvider } from "react-redux";

import Player from "./pages/Player";
import {store} from "./store/index";
import GlobalStlyes from "./styles/global.ts";

const App:React.FC = () => {

  return (
    <ReduxProvider store={store}>
      <Player />
      <GlobalStlyes />
    </ReduxProvider>
  )
}

export default App
