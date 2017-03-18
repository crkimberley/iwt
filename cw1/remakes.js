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
    var title = document.getElementById("remakeTitle").value;
    var year = document.getElementById("remakeYear").value;
    var fraction = document.getElementById('fraction').value;
    var titlePredicate = title ? "rtitle = '" + title + "'" : "*";
    var yearPredicate = year ? "ryear > '" + year + "'" : "*";
    var fractionPredicate = fraction ? "fraction > '" + fraction + "'" : "*";
    var selection = "remake[" + titlePredicate + " and " + yearPredicate + " and " + fractionPredicate + "]";
    $(stylesheet).find("xsl\\:for-each, for-each").attr("select", selection);
    if (typeof (XSLTProcessor) != "undefined") {
        var processor = new XSLTProcessor();
        processor.importStylesheet(stylesheet);
        var result = processor.transformToFragment(xmlDoc, document);
        document.getElementById("tableLocation").appendChild(result);
    } else
        window.alert("Your browser does not support the XSLTProcessor object");
}