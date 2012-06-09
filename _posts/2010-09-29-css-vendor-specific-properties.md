---
layout: post
title: CSS - 浏览器生产商特定扩展属性
categories:
- CSS
---

从CSS 2.1规范开始, W3C(万维网联盟)开始尝试[属性扩展](www.w3.org/TR/CSS2/syndata.html#vendor-keywords), 一些新CSS属性, 在调试与测试阶段允许浏览器生产商为自己的产品定义特殊属性.

	两种格式 :
	'-' + 厂商识别码 + '-' + 有意义的名称
	'_' + 厂商识别码 + '-' + 有意义的名称

最新的 CSS3 属性, W3C草案确定后,一些属性最终也许会被否认. 毕竟对于互联网庞大的用户群体, 任何议案都要经过严格的讨论与实验. 目前大部分浏览器只支持部分 CSS3 新属性, 所以通过浏览器生产商特定扩展属性, 将未确定属性与标准属性进行区别, 当最终议案确定后, 采用标准属性覆盖厂商扩展属性.

<table>
	<caption>
		部分厂商扩展词头表
	</caption>
	<tr>
		<th>
			词头
		</th>
		<th>
			组织名称
		</th>
	</tr>
	<tr>
		<td>
			-moz-
		</td>
		<td>
			Mozilla (Gecko Engine)
		</td>
	</tr>
	<tr>
		<td>
			-webkit-
		</td>
		<td>
			Apple (WebKit Engine)
		</td>
	</tr>
	<tr>
		<td>
			-o-, -xv-
		</td>
		<td>
			Opera Software
		</td>
	</tr>
	<tr>
		<td>
			-ms-
		</td>
		<td>
			Microsoft
		</td>
	</tr>
	<tr>
		<td>
			mso-
		</td>
		<td>
			Microsoft Office (<strong>未遵循W3C标准</strong>)
		</td>
	</tr>
	<tr>
		<td>
			-wap-
		</td>
		<td>
			The WAP Forum
		</td>
	</tr>
	<tr>
		<td>
			-khtml-
		</td>
		<td>
			KDE Community
		</td>
	</tr>
	<tr>
		<td>
			-ah-
		</td>
		<td>
			Antenna House Inc
		</td>
	</tr>
	<tr>
		<td>
			-atsc-
		</td>
		<td>
			Advanced Television Standards Committee
		</td>
	</tr>
	<tr>
		<td>
			-hp-
		</td>
		<td>
			Hewlett Packard
		</td>
	</tr>
	<tr>
		<td>
			-ro-
		</td>
		<td>
			Real Objects
		</td>
	</tr>
	<tr>
		<td>
			-rim-
		</td>
		<td>
			Research In Motion
		</td>
	</tr>
	<tr>
		<td>
			prince-
		</td>
		<td>
			YesLogic (<strong>未遵循W3C标准</strong>)
		</td>
	</tr>
</table>