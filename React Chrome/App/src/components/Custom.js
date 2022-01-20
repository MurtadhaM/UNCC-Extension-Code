import React from 'react';
import customCSS from './custom.css';
import { useState } from 'react';



function Custom({props}) {
    console.log("props is " + props);

    const [ state, setState ] = useState(true);
    

    const fileUpdate = (input) => {
        try {
            setState(true);
            
            console.log("input is " + input);
        } catch (e) {
            setState(false);
            console.log("error is " + e);
        }

    }

    return (

        <div >
            <h1>Custom CSS</h1>

           
            <textarea id="customCSS" placeholder='Input your custom CSS HERE' >
                
                </textarea>
            <button  onClick={() => { fileUpdate(document.getElementById("customCSS").value) }}> 
                Apply
            </button>

        </div>
    )

}

 

// const styles = {
//     main: {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         zIndex: '1000',
//         fontSize: '80px',
//         pointerEvents: 'none'
//     },
//     textarea: {
//         backgroundColor: '#fff',
//         border: '1px solid #ccc',
//         borderRadius: 5,
//         boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
//         fontSize: '14px',
//         margin: '0 0 10px',
//         padding: '10px',


//     }
//     ,
//     button: {
//         backgroundColor: '#00ff00',
//         color: '#fff',
//         border: 'none',
//         padding: '10px 20px',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         position: 'absolute',
//     }


// }

export default Custom;