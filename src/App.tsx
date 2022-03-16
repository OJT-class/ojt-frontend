import React, {  useState } from 'react';
import MainBar from './components/main/MainBar';
import {GlobalState,AppState,Context} from "./Context/State"

function App() {

  const [appState,setAppState] = useState<AppState>({
    Auto:{
      userId:"test",
      jst:"fadfa"
    }
  })
   return (
    <div>
    <GlobalState.Provider value= {{appState:appState,setAppState:setAppState as  any}}>
      <MainBar/>
    </GlobalState.Provider>
    </div>
  );
}

export default App;
