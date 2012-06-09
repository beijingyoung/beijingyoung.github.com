---
layout: post
title: 使用CSS3 Selection替换鼠标选择域默认颜色
categories:
- CSS
---



Selection属性属于 CSS3 pseudo-element. 该属性高亮用户使用鼠标的选择区域. 当然也可以使用暗淡的颜色.

目前支持该属性的浏览器 : Safari 3.1+ , Opera 9.5+ , Chrome 2.0+ , Firefox 3.6+ . 本页默认Selection属性 : 
	
	::-moz-selection {
		background: #EDEDED;
		color: #FF00FF;
	}
	::-webkit-selection {
		background: #EDEDED;
		color: #FF00FF;
	}
	::selection {
		background: #EDEDED;
		color: #FF00FF;
	}

Selection属性也支持特定HTML元素设置, 例如<blockquote>标签使用私有属性 : 
	
	
	blockquote::-moz-selection {
		background: #B2DFDA;
		color: #FFF;
	}
	blockquote::-webkit-selection {
		background: #B2DFDA;
		color: #FFF;
	}
	blockquote::selection {
		background: #B2DFDA;
		color: #FFF;
	}
	

<style>
::-moz-selection {
	background: #EDEDED;
	color: #FF00FF;
}
::-webkit-selection {
	background: #EDEDED;
	color: #FF00FF;
}
::selection {
	background: #EDEDED;
	color: #FF00FF;
}

blockquote::-moz-selection {
	background: #B2DFDA;
	color: #FFF;
}
blockquote::-webkit-selection {
	background: #B2DFDA;
	color: #FFF;
}
blockquote::selection {
	background: #B2DFDA;
	color: #FFF;
}
</style>