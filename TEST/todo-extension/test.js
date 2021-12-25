/* eslint-disable no-undef */
const css =require(  'css');
const fs = require('fs');
const re = require('re');


const remove_comments = (text) => {
    return text.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, ''); 
}

 
const read_file = (file_path) =>     {
    var s =  fs.readFileSync('./src/contentScript/49EXPRESS.css', 'utf8', (err, data) => {
        return data;
    });
    return  s;
 }


    var css_rules = read_file('./src/contentScript/49EXPRESS.css');
var css_rules_cleaned = remove_comments(css_rules);
var css_rules_parsed = css.parse(css_rules_cleaned, {
    source: '<textarea>'
    , compress: false
});


console.log(css_rules_parsed.stylesheet.rules); 



const save_style = (css_rules_parsed) => {
    chrome.storage.local.set({ 'css_rules_parsed': css_rules_parsed }, function () {
        console.log('saved');
    }   );
}




