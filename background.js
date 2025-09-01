chrome.action.onClicked.addListener((tab) => {
    chrome.storage.sync.get("showCompleted", function(data) {
        if (data.showCompleted === undefined) {
            chrome.storage.sync.set({"showCompleted": false});
        } else {
            chrome.storage.sync.set({"showCompleted": !data.showCompleted})
        }
    })
    chrome.tabs.reload(tab.id);
//   chrome.scripting.executeScript({
//     target: {tabId: tab.id},
//     files: ['content.js']
//   });
});