console.log("Background Started ...");

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}
/*
let tab = await getCurrentTab();

chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content-script.js']
});
*/

