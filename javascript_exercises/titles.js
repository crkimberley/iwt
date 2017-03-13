function getXML(url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send(null);
  return xhr.responseXML;
}

function getTitles(url) {
	//var docXML = getXML(url);
	//var docChildren = docXML.documentElement.childNodes;
	document.write("DEBUGGING");
  // ...
}