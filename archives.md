---
layout: default
title: Beijing Young Studios Weblog Archives
---

<div id="main" role="main">

    <h3>Weblog Posts</h3>
    <ul class="posts">
        {% for post in site.posts %}
        <li><time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date_to_string }}</time> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
        {% endfor %}
    </ul>
	
	<h3>Older Posts</h3>
	<ul class="posts">
		<li><time datetime="2011-04-19">19 Apr 2011</time> &nbsp; <a href="/articles/android-adb/">Android ADB 操作指南</a></li>
		<li><time datetime="2011-02-19">19 Feb 2011</time> &nbsp; <a href="/articles/a-cup-of-tea/">Font - A Cup Of Tea</a></li>
	</ul>
	
</div>