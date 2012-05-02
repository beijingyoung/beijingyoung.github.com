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
如果设置某个元素位置为绝对 { position: absolute; }, 而没有设置位置关系（[绝对位置实例一](/articles/web-elements-position/position-absolute-1.html)），可以看到 #two 与 #three 重叠在一起，由此可以确定，**被设置为绝对定位的元素不会占据原始位置空间**。添加位置关系后（[绝对位置实例二](/articles/web-elements-position/position-absolute-2.html)），当 #two 的父类没有设置任何位置关系，这时 #two 的位置关系相对于整个文档。添加父类属性（body）为相对属性 { position: relative } （[绝对位置实例三](/articles/web-elements-position/position-absolute-3.html)）后，可以看到 #two 的绝对位置关系是基于父类位置空间内的。

## 浮动
当您想让某个元素居左或居右显示，可以使用 `float: left;` 或者 `float: right;`。很简单不是吗，人们喜欢简单，对于现代浏览器按照标准你可以很舒服的使用该属性，不过这个属性在异类（IE）中存在很多问题, 不然就不会有大量关于这个问题的讨论论文，通过添加一些代码这个问题还是可以修复的。

概括性的说明：**如果在某个元素的样式表 (css) 使用浮动，那与该元素的同级别的下一个元素将采用填充父类的方式显示（未设置绝对像素的宽高），如果不想使用填充方式，这时需要清除浮动 { clear: both; }**

* [绝对宽度居左浮动](/articles/web-elements-position/float-1.html)
* [清除绝对宽度居左浮动](/articles/web-elements-position/float-2.html)

## 居中显示
这是一个大框架，存在很多种不同的情况。同**父类**，**显示宽度**，**位置**，**间距** 等等诸多因素有关。

几种常用实例：

* [绝对宽度居中显示 实例一](/articles/web-elements-position/position-absolute-1.html)