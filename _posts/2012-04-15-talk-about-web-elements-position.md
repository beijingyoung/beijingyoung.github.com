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
如果设置某个元素位置为相对 { position: relative; } 这时就可以选择使用上下左右 { top, bottom, left, right } 设置该元素的相对位置。[相对位置实例](/articles/web-elements-position/position-relative.html)，您看到当 #two 设置位置为相对并向下移动 80 像素，向左移动 40 像素时， #three 的位置并没有移动，因为 #two 仍然**占据原始位置空间**。

## 绝对
如果设置某个元素位置为绝对 { position: absolute; }, 而没有设置位置关系（[绝对位置实例一](/articles/web-elements-position/position-absolute-1.html)），可以看到 #two 与 #three 重叠在一起，由此可以确定，**被设置为绝对定位的元素不会占据原始位置空间**。添加位置关系后（[绝对位置实例一](/articles/web-elements-position/position-absolute-2.html)），当 #two 的父类没有设置任何位置关系，这时 #two 的位置关系相对于整个文档。