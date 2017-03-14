/*function getXML(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);        // Initializes the request
    xhr.send(null);
    return xhr.responseXML; //  Document containing nodes resulting from parsing XML...received using XMLHttpRequest, or null
}*/

function getXML(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Action to be performed when the document is read;
        document.write("OK OK OK")
        }
    };
    xhttp.open("GET", "url", true);
    xhttp.send();
    return xhttp.responseText;
}


function getTitles() {
    var doc = getXML("rss-fragment.xml");
    //var docElement = doc.documentElement;
    //var docString = doc.responseText;
    document.write(doc);
    //var children = docElement.childNodes;
    /*document.write("no of children = " + children.length);
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
    }*/
    document.write("HELLO THERE");
}
