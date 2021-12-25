/* eslint-disable no-undef */
import './App.css';
  import Switch from '@mui/material/Switch';
import { useState } from 'react';

function App() {
var state =   chrome.storage.sync.get('state', function (result) {
    console.log(result);
    return result;
  }
  );

  const [ checked, setChecked ] = useState(state);

  const changeStorage = () => {

      if(!checked){
      chrome.storage.sync.set({ 'state': !checked }, function () {
        localStorage.state = 1;
        localStorage.status = 1;
        

      });

    } else  if (checked){
        chrome.storage.sync.set({ 'state': !checked }, function () {
          localStorage.state = 0;
          localStorage.status = 0;


      });
    }
  }

  const update_Value = () => {
    
    if (checked) {
      setChecked(false);
      changeStorage();
      console.log("off");
    } else {
      setChecked(true);
      changeStorage();
      
      console.log("on");
    }
  } 


  
 


  return (
    <div className="Popup">
      <header className="App-header">
        <p>
          <button id="button" onClick={ () => update_Value() } variant="contained">{{ checked } ? 'ON' : 'OFF'}</button>
          

          <sComponent props={checked}  />
        </p>
          

        
      </header>
    </div>
  );
}
function sComponent({ props }) {
 

  return (
    <div>
      <Switch
        id="switch"
        checked={props.checked}
        inputProps={{ 'aria-label': 'State Button' }}
      />
    </div>
  );
 
  
}
    
export default App;
