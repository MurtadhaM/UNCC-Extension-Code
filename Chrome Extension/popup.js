


addEventListener('click',  ()  => {
  console.log('state is ' + toggle.checked);
  toggle.style.backgroundColor = toggle.checked ? 'red' : 'blue';
  chrome.tabs.insertCSS ({ file: "SSB.css" });
});

