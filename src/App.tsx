import React, {  useState } from 'react';
import { Box, Container, CssBaseline, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
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
    <CssBaseline />
   
    <Container fixed>
       
        <MainBar></MainBar>
      
 
      </Container>
    </GlobalState.Provider>
    </div>
  );
}

export default App;
