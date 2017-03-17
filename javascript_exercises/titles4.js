window.onload = function() {
    document.getElementById("hey-button").onclick = hey; };
    
function hey() {
    document.getElementById("hey-button").innerHTML = "Hey hey hey!";
}

function getXML(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send(null);
    return xhr.responseXML;}

function getTitles(url) {
    var docXML = getXML(url);
    var grandchildren = docXML.documentElement.childNodes[1].childNodes;
    for (j = 0; j < grandchildren.length; j++) {
        if (grandchildren[j].nodeName == "title") {
            document.write("<p>", grandchildren[j].firstChild.nodeValue, "</p>")
        }
        var greatgrandchildren = grandchildren[j].childNodes;
        for (k = 0; k < greatgrandchildren.length; k++) {
            if (greatgrandchildren[k].nodeName == "title") {
                document.write("<p>", greatgrandchildren[k].firstChild.nodeValue, "</p>")
            }
        }
    }
}

function textIntoDoc(someText) {
    var num = window.prompt("Enter an integer", "0");
    document.getElementById("someID").innerHTML = someText + " number entered = " + num;
}