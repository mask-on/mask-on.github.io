---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: index

---

<html>


<head>

<meta charset="utf-8" />
<meta http-equiv="x-ua-compatible" content="ie=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<title> mask on — anti surveillance protest guide </title>

<link rel="stylesheet" type="text/css" href="index.css">

</head>

<body onload="startClock()">

<div class="support">

<div class="title">

<div class="mask-on">
<h1 class="title"> mask on zone</h1>
</div>

<div id="clock"> </div>

<div class="mask-on">
<h2 class="subtitle"> anti surveillance protest guide </h2>
</div>

</div>

<div class="protect-yourself-while-you">

<div class="choose-your-adventure">
<h3 class="scenario"> select scenario: </h3>
<ul class="scenario">
<li class="scenario">
<a href="#before">
I'm going to a protest.
<span> <img src="assets/star.svg" class="star" /> </span>
</a>
</li>
<li class="scenario">
<a href="#during">
I'm at a protest.
<span> <img src="assets/star.svg" class="star" /> </span>
</a>
</li>
<li class="scenario">
<a href="#after">
I'm returning from a protest.
<span> <img src="assets/star.svg" class="star" /> </span>
</a>
</li>
</ul>
</div>


<div class="choose-your-adventure">
<div class="tips">
<!-- before -->
<a id="before" class="time">
before
</a>
<button class="collapse"> clothing <span class="collapse"> - </span> </button>
<div class="content">

{% assign before = site.before | where: 'category', 'clothing' %}

  {% for tip in before %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.advisory}} </h4>
<ul class="tip">
<li class="tip"> {{tip.tip}} </li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
    {% endif %}
  {% endfor %}
</div>

<button class="collapse"> mask </button>
<div class="content">
{% assign before = site.before | where: 'category', 'clothing' %}

  {% for tip in before %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.advisory}} </h4>
<ul class="tip">
<li class="tip"> {{tip.tip}} </li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
    {% endif %}
  {% endfor %}
</div>

<!-- during -->
<a id="during" class="time"> during </a>
<button class="collapse"> photography <span class="collapse"> - </span> </button>
<div class="content">
{% assign before = site.before | where: 'category', 'clothing' %}

  {% for tip in before %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.advisory}} </h4>
<ul class="tip">
<li class="tip"> {{tip.tip}} </li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
    {% endif %}
  {% endfor %}
</div>


<!-- after -->
<a id="after" class="time"> after </a>
<button class="collapse"> donations <span class="collapse"> - </span> </button>
<div class="content">
{% assign before = site.before | where: 'category', 'clothing' %}

  {% for tip in before %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.advisory}} </h4>
<ul class="tip">
<li class="tip"> {{tip.tip}} </li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
    {% endif %}
  {% endfor %}
</div>

</div>

</div>

</div>

</div>


<script src="clock.js"></script>
<script src="layout.js"></script>

</body>
</html>