import React,{useContext} from 'react';
import {GlobalState}from '../../Context/State'
function MainBar() {
  // To use Context Global you need To Improt GlobalState 
  //The appState Save the Last State And setAppState Update the State
const {appState,setAppState} = useContext(GlobalState)
console.log(appState.Auto?.jst);

  return (
    <div>
      {appState.Auto?.jst}

    </div>
  );
}

export default MainBar;
