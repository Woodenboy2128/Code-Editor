function runCode() {
    // Get the content of the HTML, CSS, and JS editors
    var html = document.getElementById('html-editor').value;
    var css = document.getElementById('css-editor').value;
    var js = document.getElementById('js-editor').value;

    // Create an iframe to display the output
    var iframe = document.getElementById('output');
    var iframeDoc = iframe.contentWindow.document;

    // Write the HTML content into the iframe
    iframeDoc.open();
    iframeDoc.write(html);

    // Add CSS styles to the iframe
    var style = iframeDoc.createElement('style');
    style.textContent = css;
    iframeDoc.head.appendChild(style);

    // Add JS to run in the iframe
    var script = iframeDoc.createElement('script');
    script.textContent = js;
    iframeDoc.body.appendChild(script);

    iframeDoc.close();
}
