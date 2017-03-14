function getXML(url) {
var xhr = new XMLHttpRequest();
xhr.open("GET", url, false);
xhr.send(null);
return xhr.responseXML;}

function getTitles(url) {
var docXML = getXML(url);
var channelChildren = docXML.documentElement.children.item(0).children;
document.write("<p>", channelChildren.item(0).firstChild.nodeValue, "</p>");
document.write("<p>", channelChildren.item(8).childNodes[1].firstChild.nodeValue, "</p>");
document.write("<p>", channelChildren.item(9).childNodes[1].firstChild.nodeValue, "</p>");
document.write("<p>", channelChildren.item(10).childNodes[1].firstChild.nodeValue, "</p>");
document.write("<p>", channelChildren.item(11).childNodes[1].firstChild.nodeValue, "</p>");
}