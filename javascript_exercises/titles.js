function getXML(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    return xhr.responseXML;
}

function getTitles(url) {
    var xmlDoc = getXML(url);
    var docElement = xmlDoc.documentElement;
    var children = docElement.childNodes
    document.write("no of children = " + children.length)
    //document.write(docElement.firstChild.nodeName)
    for ( i = 0; i < children.length; i++ ) {
        //document.write("<p>", titleElements[i].firstChild.nodeValue, "</p>");
        //document.write("<p>" + "</p>")
        document.write("<p>nodeName " + children[i].nodeName + "</p>")
        grandchildren = children[i].childNodes
        for (j=0; j < grandchildren.length; j++) {
            document.write("<p>grandchild: " + grandchildren[j].nodeName + " parent is " + grandchildren[j].parentNode.nodeName + "</p>");
            if (grandchildren[j].nodeType == "title") {
               document.write("TITLE: ")
            } else {}
        }
    }
}

