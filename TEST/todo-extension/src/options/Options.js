import Button from '@mui/material/Button';
import './Options.css';
 

const button_handler = (event) => {
  console.log('button clicked');
  // eslint-disable-next-line no-undef
  chrome.storage.sync.get('state', function (result) {
    console.log(result);
  }
  );
  

 
}
 


function Options() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <Button id="submit" onClick={button_handler}  variant="contained">Submit</Button>
        </p>
       
      </header>
    </div>
  );
}

export default Options;
