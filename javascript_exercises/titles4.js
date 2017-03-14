function getXML(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    return xhr.responseXML;}

function getTitles(url) {
    var docXML = getXML(url);
    var channelChildren = docXML.documentElement.children.item(0).children;
    document.write("<p>", channelChildren.item(0).firstChild.nodeValue, "</p>");
    for (i = 0; i < channelChildren.length; i++) {
        if (channelChildren.item(i).childNodes.length > 1) {
            for (j = 0; j < channelChildren.item(i).childNodes.length; j++) {
                if (channelChildren.item(i).childNodes[j].nodeName == "title") {
                    document.write("<p>", channelChildren.item(i).childNodes[j].firstChild.nodeValue, "</p>");
                }
            }
        }
    }
}