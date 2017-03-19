function getXML(myUrl) {
    var xhr = $.ajax({
        url:      myUrl,
        datatype: "xml",
        async:    false
    });
    return xhr.responseXML;
}

function remakesTable() {
    $('#results').empty();
    var xmlDoc = getXML("remakes.xml");
    var stylesheet = getXML("remakes.xsl");

    var title = document.getElementById("remakeTitle").value;
    var year = document.getElementById("remakeYear").value;
    var fraction = document.getElementById('fraction').value;

    var titlePredicate = title ? "rtitle = '" + title + "'" : "*";

    var yearOperator = $('input[type=radio][name=year]:checked').val();
    var yearOp = yearOperator === "equals" ? "=" : (yearOperator === "lessThan" ? "<" : ">");
    var yearPredicate = year ? "ryear " + yearOp + " '" + year + "'" : "*";

    var fractionOperator = $('input[type=radio][name=fraction]:checked').val();
    var fractionOp = fractionOperator === "equals" ? "=" : (fractionOperator === "lessThan" ? "<" : ">");
    var fractionPredicate = fraction ? "fraction " + fractionOp + " '" + fraction + "'" : "*";

    var selection = "remake[" + titlePredicate + " and " + yearPredicate + " and " + fractionPredicate + "]";
    $(stylesheet).find("xsl\\:for-each, for-each").attr("select", selection);
    
    if (typeof (XSLTProcessor) != "undefined") {
        var processor = new XSLTProcessor();
        processor.importStylesheet(stylesheet);
        var result = processor.transformToFragment(xmlDoc, document);
        document.getElementById("results").appendChild(result);
    } else
        window.alert("Your browser does not support the XSLTProcessor object");
}