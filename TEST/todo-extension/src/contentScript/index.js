/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */


import css from 'css';
const currentURL = window.location.href;
var url = '';
var express = chrome.runtime.getURL('styles/49EXPRESS.css')
var SSB = chrome.runtime.getURL('styles/SSB.css')
var domains =["my.uncc.edu","selfservice.uncc.edu", 'my.charlotte.edu', "selfservice.charlotte.edu"];



if (currentURL.includes('https://my.')) {
  url = express;
} else if (currentURL.includes('https://selfservice.')) {
  url = SSB;
}





const embed_style = (url) => {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.getElementsByTagName('HEAD')[ 0 ].appendChild(link);

}



const remove_comments = (text) => {
  return text.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, ''); 
}

const downloadFile = () => {
  if (url.includes('49EXPRESS')) {
    var s = 'styles/49EXPRESS.css';
    console.log(s);

    return s;
  } else if (url.includes('SSB')) {
     s = 'styles/SSB.css'
    console.log(s);

    return s;
  }
  
    return s
}

var css_rules =  '';
console.log(css_rules);
var css_rules_cleaned = remove_comments(css_rules);
console.log(css_rules_cleaned);

const save_style = (css_rules_parsed) => {
  chrome.storage.sync.set({ 'css_rules_parsed': css_rules_parsed }, function () {
    console.log('saved');
  });

  return css_rules_parsed;
}







const isdisabled = () => {
  

  

chrome.runtime.sendMessage("state"  , function(response) {
  if (response === false) {

    console.log('disabled');

  } else {
    console.log('enabled');
    console.log(response);
    
    embed_style(url);
    
  
  }


});
  
   
   
}


isdisabled();



 


