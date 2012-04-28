---
layout: post
title: 谈网页元素位置
categories:
- Web
tags:
- CSS
---

## 静态
默认所有 HTML 元素位置默认值。

	* {
		position: static
	}

## 相对
如果设置某个元素位置为相对 { position: relative; } 这时就可以使用上下左右设置该元素的相对位置。[相对位置实例](/articles/web-elements-position/position-relative.html)，您看到当 #two 设置位置为相对并向下移动 60 像素，向左移动 30 像素时， #three 的位置并没有移动，因为 #two 仍然**占据原始位置空间**。
