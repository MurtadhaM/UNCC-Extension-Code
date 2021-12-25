/* eslint-disable no-undef */

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
   
    var state = (chrome.storage.sync.get('state', function (result) {
      console.log(result);
      return result;
    }
    ));

    if (state === true) {
      sendResponse({ state: true });
    } else {
      sendResponse({ state: false });
    }
  });

    
    console.log(request);
    
chrome.runtime.addEventListener('onload', function (state) {
  console.log(state);
}
);


