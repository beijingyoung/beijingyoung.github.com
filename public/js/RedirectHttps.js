(function() {

	var brand = ["google.com", "wikipedia.com", "ibm.com", "youtube.com", "facebook.com", "twitter.com", "appspot.com", "mozilla.org"];

	// var protocol = window.location.protocol;
	// var hostname = window.location.hostname;
	// var pathname = window.location.pathname;

	// var protocol = document.location.protocol;
	// var hostname = document.location.hostname;
	// var pathname = document.location.pathname;

	// window.location.search;
	// https://developer.mozilla.org/en/DOM/window.location

	// if (window.location.protocol == "http:") {
	// 	var restOfUrl = window.location.href.substr(5);
	// 	window.location = "https:" + restOfUrl;
	// }

	// if (protocol == "http:") {
	// 	protocol = "https:";
	// 	location.replace(protocol + "//" + hostname + pathname);
	// };

	// if (location.href.indexOf("https://") == -1) {
	// 	location.href = location.href.replace("http://", "https://");
	// }

	for(i = 0; i < brand.length; i++) {
		
        if(window.location.protocol.toLowerCase() == "http:") {
			
            if(window.location.hostname.toLowerCase().indexOf(brand[i]) > 0) {
                window.location = "https://" + window.location.hostname + window.location.pathname + window.location.search;
            }
			
        }
		
    }
	
})();