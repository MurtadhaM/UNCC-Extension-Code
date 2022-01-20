const custom_entry_point = document.createElement('div');
let reactJS_script = document.createElement('script');

custom_entry_point.id = 'Custom';
reactJS_script.src = 'custom.bundle.js';

custom_entry_point.appendChild(reactJS_script);

document.querySelector("body").appendChild(custom_entry_point);