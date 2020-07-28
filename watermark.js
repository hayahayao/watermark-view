let mask

chrome.runtime.onMessage.addListener(
    function () {
        mask = document.querySelector('#mask')
        if (mask) {
            document.body.removeChild(mask)
        } else {
            mask = document.createElement('div')
            mask.id = 'mask'
            mask.style = 'height: 100%; width: 100%; background: black; z-index: 10000000; mix-blend-mode: color-burn; position: absolute; left: 0; top: 0;'
            document.body.appendChild(mask)
        }
    })