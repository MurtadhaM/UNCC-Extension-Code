// // Initialize butotn with users's prefered color
// let currentState = document.getElementById("state");

// chrome.storage.sync.get("state", ({ currentState }) => {
//   currentState.toggleAttribute("checked", currentState);
// });

// // When the button is clicked, inject setPageBackgroundColor into current page
// currentState.addEventListener("change", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: setState,
//   });
// });

// // The body of this function will be execuetd as a content script inside the
// // current page
// function setState() {
  

// }
