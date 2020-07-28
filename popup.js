chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    document.querySelector('#watermark').addEventListener('click', function () {
        chrome.tabs.sendMessage(tabs[0].id, {})
    })
})