function runCode() {
    var content = document.getElementById('codeEditor').value;
    var iframe = document.getElementById('bormaa_site');
    iframe = (iframe.contentWindow)?iframe.contentWindow:(iframe.contentDocument)? iframe.contentDocument.document: 
    iframe.contentDocument;
    
    iframe.document.open();
    iframe.document.write(content);
    iframe.document.close();
    return false;
    }
    runCode();