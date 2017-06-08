function getClickHandler(number) {
  return function(info, tab) {
	  
var searchstring = info.selectionText;
var url;

switch (number) {
    case 1:
        url = "http://maps.google.com/maps?q=" + searchstring;
        break;
    case 2:
        url = "https://www.youtube.com/results?search_query=" + searchstring;
        break;
    case 3:
        url = "https://en.wikipedia.org/wiki/" + searchstring;
        break;
    case 4:
        url = "http://www.imdb.com/find?ref_=nv_sr_fn&q=" + searchstring;
        break;
}



chrome.tabs.create({ url: url, });
  };
};


chrome.contextMenus.create({
  "title" : "Google Maps",
  "type" : "normal",
  "contexts" : ["all"],
  "onclick" : getClickHandler(1)
});

chrome.contextMenus.create({
  "title" : "Youtube",
  "type" : "normal",
  "contexts" : ["all"],
  "onclick" : getClickHandler(2)
});

chrome.contextMenus.create({
    "title" : "Wikipedia",
    "type" : "normal",
    "contexts" : ["all"],
    "onclick" : getClickHandler(3)
});

chrome.contextMenus.create({
    "title" : "IMDb",
    "type" : "normal",
    "contexts" : ["all"],
    "onclick" : getClickHandler(4)
});