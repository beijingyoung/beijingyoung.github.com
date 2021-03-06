/*
Correctly handle PNG transparency in Win IE 5.5 & 6.
http://homepage.ntlworld.com/bobosola. Updated 18-Jan-2006.

Use in <HEAD> with DEFER keyword wrapped in conditional comments:
<!--[if lt IE 7]>
<script defer type="text/javascript" src="pngfix.js"></script>
<![endif]-->
*/

var DetermineBrowser = navigator.appVersion.split("MSIE");
var DetermineVersion = parseFloat(DetermineBrowser[1]);

if(DetermineVersion >= 5.5 && (document.body.filters)) {
	
	for(var n=0; n<document.images.length; n++) {
		
		var img = document.images[n];
		var imgName = img.src.toUpperCase();
		
		if(imgName.substring(imgName.length-3, imgName.length) == "PNG") {
			
			var imgID = (img.id) ? "id='" + img.id + "' " : "";
			var imgClass = (img.className) ? "class='" + img.className + "' " : "";
			
			var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' ";
			
			var imgStyle = "display:inline-block;" + img.style.cssText;
			
			if (img.align == "left") imgStyle = "float:left;" + imgStyle;
			if (img.align == "right") imgStyle = "float:right;" + imgStyle;
			if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle;
			
			var strNewHTML = "<span " + imgID + imgClass + imgTitle + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";" + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";
			
			img.outerHTML = strNewHTML;
			n = n-1;
			
		}
		
	}
	
}