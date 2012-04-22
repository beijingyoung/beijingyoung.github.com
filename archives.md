---
layout: default
title: Beijing Young Studios Weblog Archives
---

<div id="main" role="main">

    <h3>Weblog Posts</h3>
    <ul class="posts">
        {% for post in site.posts %}
        <li><time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date_to_string }}</time> ⌦ <a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endfor %}
    </ul>
	
	<h3>Older Posts</h3>
	<ul class="posts">
		<li><time datetime="2011-07-29">29 Jul 2011</time> &#x2326; <a href="/articles/rgba-argb-converter/">RGBa for Internet Explorer</a></li>
		<li><time datetime="2011-06-24">24 Jun 2011</time> &#x2326; <a href="/project/chinese-font-usability-test/">中文字体可用性测试</a></li>
		<li><time datetime="2011-05-30">30 May 2011</time> &#x2326; <a href="/articles/third-party-font-browser-support-status.html">浏览器自定义字体支持状态表单</a></li>
		<li><time datetime="2011-05-30">30 May 2011</time> &#x2326; <a href="/articles/non-cd-hard-disk-install-ubuntu/">硬盘安装Ubuntu</a></li>
		<li><time datetime="2011-04-18">18 Apr 2011</time> &#x2326; <a href="/articles/pab/">你是否具有侵略性被动行为？</a></li>
		<li><time datetime="2011-04-17">17 Apr 2011</time> &#x2326; <a href="/articles/android-adb/">Android ADB 操作指南</a></li>
		<li><time datetime="2011-02-19">19 Feb 2011</time> &#x2326; <a href="/articles/a-cup-of-tea/">Font - A Cup Of Tea</a></li>
		<li><time datetime="2011-02-19">19 Feb 2011</time> &#x2326; <a href="/articles/please-let-me-have-a-little-world/">Font - Please let me have a little world</a></li>
	</ul>
	
</div>