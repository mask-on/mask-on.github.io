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
<div class="copy flex-row">

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
<a href="#before">
I'm going to a protest,
</a>
<a href="#during">
I'm at a protest, 
</a>
<a href="#after">
I'm returning from a protest.
</a>

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
  <div class="scroll">
<div class="tips">
<!-- before -->
<div class="time-heading"><a class="time"    id="before" >before
</a></div>


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
<button class="collapse">photography & video<span class="collapse"> - </span> </button>
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
<div class="time-heading"><a class="time"    id="during" >during
</a></div>

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
<button class="collapse">photography & video<span class="collapse"> - </span> </button>
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
<div class="time-heading"><a class="time"    id="after" >after
</a></div>

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
<button class="collapse">photography & video<span class="collapse"> - </span> </button>
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
  <div class="footer-copy">
    <a class="button bg" href="/about/">About Us</a>
    <a class="footer-imglink" href="/resources/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.31 5.88" class="footer-svg">
<path d="M.84,5.88A.83.83,0,0,1,0,5a.86.86,0,0,1,.25-.6A.85.85,0,0,1,0,3.84.83.83,0,0,1,.84,3a.86.86,0,0,1,.6.25A.86.86,0,0,1,2,3,.84.84,0,0,1,2,4.68a.82.82,0,0,1-.6-.25h0a.86.86,0,0,1,.25.6A.83.83,0,0,1,.84,5.88ZM3.24,4.2A.84.84,0,1,1,2.4,5,.83.83,0,0,1,3.24,4.2Z"/><path d="M10.62.84A.84.84,0,0,1,12.06.25a.86.86,0,0,1,.6-.25.83.83,0,0,1,.84.84.83.83,0,0,1-.84.84.82.82,0,0,1-.6-.25.81.81,0,0,1-.6.25A.84.84,0,0,1,10.62.84Z"/><path d="M10.35,3.77a.83.83,0,0,1-.84.84.86.86,0,0,1-.6-.25h0a.82.82,0,0,1,.25.6.84.84,0,1,1-1.42-.6h0a.84.84,0,1,1,0-1.18h0a.81.81,0,0,1-.26-.6.84.84,0,1,1,1.68,0,.81.81,0,0,1-.25.6h0a.86.86,0,0,1,.6-.25A.83.83,0,0,1,10.35,3.77Z"/><rect x="1.3" y="1.43" width="0.02" height="0.02" transform="translate(-0.63 1.35) rotate(-45)"/><path d="M3.43,2a.84.84,0,1,1,.84.84A.84.84,0,0,1,3.43,2Z"/><path d="M4.63.84a.84.84,0,0,1,1.68,0,.84.84,0,0,1-1.68,0Z"/><path d="M16.31,5a.83.83,0,0,1-.84.84.81.81,0,0,1-.6-.25.82.82,0,0,1-.6.25A.83.83,0,0,1,13.43,5a.86.86,0,0,1,.25-.6A.84.84,0,0,1,14.27,3a.83.83,0,0,1,.6.26.81.81,0,0,1,.6-.26.84.84,0,0,1,.59,1.44A.86.86,0,0,1,16.31,5Zm-1.43-.6h0v0Z"/></svg>
Resources
</a>
  </div>
</footer>


<script src="{{site.baseurl}}/js/clock.js"></script>
<script src="{{site.baseurl}}/js/layout.js"></script>

</body>
</html>