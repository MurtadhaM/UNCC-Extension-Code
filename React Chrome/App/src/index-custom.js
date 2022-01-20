import React from 'react';
import { render } from 'react-dom';

import Custom from './components/Custom.js';

const saveCustom = (input) => {
    storage.local.set({ customCSS: input }, function () {
        console.log('saved');
    });
    state = {
		title: '',
		priority: '0',
		tasks: [],
	}

	setStorage = (tasks) => {
		chrome.storage.sync.set({ tasks: tasks ? tasks : this.state.tasks })
	}

	getTasks = () => {
		chrome.storage.sync.get('tasks', (results) => {
			if (results.tasks) {
				this.setState({
					tasks: results.tasks,
				})
			}
		})
	}

}
 
chrome.storage.local.get(['customCSS'], function (customCSS) {
    console.log("CSS is " + customCSS);
// you can use the variable or set to any state variable from here
});

render(
    
    
    <Custom />, document.querySelector('#custom')
        
    
    




);
    
 export default saveCustom;