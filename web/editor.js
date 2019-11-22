function changeCode(params) {
    let code = params;
    console.log('Code: ' + code);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let codeScript = `
            let element = document.querySelector("user-code-editor");
            console.log('Code Editor: ' + element + ' ' + element.innerText);
            var editor = CodeMirror.fromElement(element, {
                lineNumbers: false
            });
        `;
        chrome.tabs.executeScript(tabs[0].id, { code: codeScript });
    });
}
