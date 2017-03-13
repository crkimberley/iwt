/**
 * Created by chris on 12/03/2017.
 */
function getTitles() {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/Users/chris/x/iwt/javascript_exercises/rss-fragment.xml", false);
  xhr.send(null);
  var doc = xhr.responseXML;
  docElement = documentElement;

  //document.write("Document element is: " + doc.documentElement.children.firstChild);
  document.write("HELLO")
}


