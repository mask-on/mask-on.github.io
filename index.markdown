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

  <link href="{{site.baseurl}}/css/index.css" rel="stylesheet">

</head>

<body onload="startClock()">
  <div class="page-content">

<header>
<div class="mobile-nav header-nav">
<div class="mobile-copy">
<div class="title">

<div class="mask-on">
<h1 class="title"> <a href="{{site.baseurl}}/#">mask on zone</a></h1>
</div>

<div id="clock"> </div>

<div class="mask-on">
<h2 class="subtitle"> anti surveillance protest guide </h2>
</div>

</div>


<div class="mobile-scenario">
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
</div>
</div>
</header>

<div class="protect-yourself-while-you">

<div class="choose-your-adventure-left">
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


<div class="choose-your-adventure-right">
  <div class="scroll"  id="before" >
<div class="tips">
<!-- before -->
  <a class="time">before
</a>


<!-- before - clothing table -->
{% assign before = site.before | where: 'category', 'clothing' | sort: 'date' %}

  {% for tip in before %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse"> clothing <span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}


<!-- before - social media table -->
{% assign before = site.before | where: 'category', 'social media' | sort: 'date' %}

  {% for tip in before %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse"> social media <span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}


<!-- before - photography and video table -->
{% assign before = site.before | where: 'category', 'photography and video' | sort: 'date' %}

  {% for tip in before %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">photography and video<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}

<!-- before - devices table -->
{% assign before = site.before | where: 'category', 'devices' | sort: 'date' %}

  {% for tip in before %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">devices<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}


<!-- before - transportation table -->
{% assign before = site.before | where: 'category', 'transportation' | sort: 'date' %}

  {% for tip in before %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">transportation<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}

<!-- before - donations table -->
{% assign before = site.before | where: 'category', 'donations' | sort: 'date' %}

  {% for tip in before %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">donations<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}

<!-- before - counter-surveillance table -->
{% assign before = site.before | where: 'category', 'counter-surveillance' | sort: 'date' %}

  {% for tip in before %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">counter-surveillance<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}
























<!-- during -->
<a id="during" class="time">
during
</a>

<!-- during - clothing table -->
{% assign during = site.during | where: 'category', 'clothing' | sort: 'date' %}

  {% for tip in during %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse"> clothing <span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}


<!-- during - social media table -->
{% assign during = site.during | where: 'category', 'social media' | sort: 'date' %}

  {% for tip in during %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse"> social media <span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}


<!-- during - photography and video table -->
{% assign during = site.during | where: 'category', 'photography and video' | sort: 'date' %}

  {% for tip in during %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">photography and video<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}

<!-- during - devices table -->
{% assign during = site.during | where: 'category', 'devices' | sort: 'date' %}

  {% for tip in during %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">devices<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}


<!-- during - transportation table -->
{% assign during = site.during | where: 'category', 'transportation' | sort: 'date' %}

  {% for tip in during %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">transportation<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}

<!-- during - donations table -->
{% assign during = site.during | where: 'category', 'donations' | sort: 'date' %}

  {% for tip in during %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">donations<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}

<!-- during - counter-surveillance table -->
{% assign during = site.during | where: 'category', 'counter-surveillance' | sort: 'date' %}

  {% for tip in during %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">counter-surveillance<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}



<!-- after -->
<a id="after" class="time">
after
</a>

<!-- after - clothing table -->
{% assign after = site.after | where: 'category', 'clothing' | sort: 'date' %}

  {% for tip in after %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse"> clothing <span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}


<!-- after - social media table -->
{% assign after = site.after | where: 'category', 'social media' | sort: 'date' %}

  {% for tip in after %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse"> social media <span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}


<!-- after - photography and video table -->
{% assign after = site.after | where: 'category', 'photography and video' | sort: 'date' %}

  {% for tip in after %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">photography and video<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}

<!-- after - devices table -->
{% assign after = site.after | where: 'category', 'devices' | sort: 'date' %}

  {% for tip in after %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">devices<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}


<!-- after - transportation table -->
{% assign after = site.after | where: 'category', 'transportation' | sort: 'date' %}

  {% for tip in after %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">transportation<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}

<!-- after - donations table -->
{% assign after = site.after | where: 'category', 'donations' | sort: 'date' %}

  {% for tip in after %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">donations<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}

<!-- after - counter-surveillance table -->
{% assign after = site.after | where: 'category', 'counter-surveillance' | sort: 'date' %}

  {% for tip in after %}
    {% if tip %}

{% if forloop.first == true %}
<button class="collapse">counter-surveillance<span class="collapse"> - </span> </button>
<div class="content">
{% endif %}



  {% if tip.advisory == "don't" %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% else %}
<div class="tip-container">
<h4 class="do-dont"> {{tip.title}} </h4>
<ul class="tip">
<li class="tip flex-row">
{% if tip.advisory == "do" %}
<img class="advisory-svg" src="assets/check-mark.svg">
{% else %}
<img class="advisory-svg" src="assets/cross.svg">
{% endif %}
{{tip.tip}} 
</li>
</ul>
</div>
{% if forloop.last == false %}
<div class="border-bottom"></div>
{% endif %}
{% endif %}

{% if forloop.last == true %}
</div>
{% endif %}
{% endif %}
{% endfor %}


</div>

</div>
</div>

</div>
</div>

<footer>
  <a class="button bg" href="/about/">About Us</a>
</footer>


<script src="{{site.baseurl}}/js/clock.js"></script>
<script src="{{site.baseurl}}/js/layout.js"></script>

</body>
</html>