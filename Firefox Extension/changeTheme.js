

var currentURL = window.location.href;
var EXPRESS_CSS_URL = chrome.runtime.getURL('49EXPRESS.css');
var SSB_CSS_URL = chrome.runtime.getURL('SSB.css');
var css;

// Check if the current URL is the one we want to change the theme
if (currentURL.includes('https://my.')) {
    css = EXPRESS_CSS_URL;
} else if (currentURL.includes('https://selfservice.')) {
    css = SSB_CSS_URL;
}


// Add the CSS to the page's head

var link = document.createElement('link'); 
           link.rel = 'stylesheet'; 
        link.type = 'text/css';      
         // Link the CSS to the page based on the current URL  
         link.href = css;
document.getElementsByTagName('HEAD')[0].appendChild(link);



