chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({ pageUrl: { pathContains: 'zxkp-admin' } }),
          new chrome.declarativeContent.PageStateMatcher({ pageUrl: { pathContains: 'zxkp-car-admin' } }),
          new chrome.declarativeContent.PageStateMatcher({ pageUrl: { hostContains: 'localhost' } }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});
