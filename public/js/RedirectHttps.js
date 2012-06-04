(function() {

	var domain[0] = "google";
	var domain[1] = "youtube";
	var domain[2] = "facebook";
	var domain[3] = "twitter";
	var domain[4] = "wikipedia";
	var domain[5] = "appspot";
	
//   var protocol = window.location.protocol;
//   var hostname = window.location.hostname;
//   var pathname = window.location.pathname;
	
	var protocol = document.location.protocol;
	var hostname = document.location.hostname;
	var pathname = document.location.pathname;

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

	for(i = 0; i < domain.length; i++) {
		if(hostname.indexOf(domain[i]) && protocol == "http:") {
			document.location = "https://" + hostname + pathname;
		}
	}

})(document);