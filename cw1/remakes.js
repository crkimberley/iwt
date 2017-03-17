function getXML(myUrl) {
    var xhr = $.ajax({
        url:      myUrl,
        datatype: "xml",
        async:    false
    });
    return xhr.responseXML;
}

function remakesTable() {
    var xmlDoc = getXML("remakes.xml");
    var stylesheet = getXML("remakes.xsl");
    if (typeof (XSLTProcessor) != "undefined") {
        var processor = new XSLTProcessor();
        processor.importStylesheet(stylesheet);
        var result = processor.transformToFragment(xmlDoc, document);
        document.getElementById("tableLocation").appendChild(result);
    } else
        window.alert("Your browser does not support the XSLTProcessor object");
}
