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
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-26328299-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-26328299-2');
</script>


</head>

<body class="resources" onload="startClock()">

<header>
<div class="mobile-nav header-copy">
<div class="mobile-copy">
<div class="title">

<div class="mask-on">
<h1 class="title"> <a href="https://maskon.zone/">mask on zone</a></h1>
</div>

<div id="clock"> </div>

<div class="mask-on">
<h2 class="subtitle"> anti surveillance protest guide </h2>
</div>

</div>
</div>
</div>
</header>



<div class="about-copy">

<!-- readings section -->
{% assign resources = site.resources | where: 'type', 'reading' | sort: 'date' %}

  {% for reading in resources %}
   {% if reading %}
   {% if forloop.first == true %}
   <p>Readings:</p>
   {% endif %}
   <a href="{{reading.url}}">{{reading.title}}</a>, 
   {% endif %}
{% endfor %}
<br><br>

<!-- tools section -->
{% assign resources = site.resources | where: 'type', 'tool' | sort: 'date' %}

  {% for tool in resources %}
   {% if tool %}
   {% if forloop.first == true %}
  <p>Tools:</p>
   {% endif %}
   <a href="{{tool.url}}">{{tool.title}}</a>, 
   {% endif %}
{% endfor %}
<br><br>

<!-- graphics section -->
{% assign resources = site.resources | where: 'type', 'graphic' | sort: 'date' %}

  {% for img in resources %}
   {% if img %}
   {% if forloop.first == true %}
  <p>Graphics to download:</p>
     <div class="img-container">
   {% endif %}
   <img src="/assets/resources/{{img.filename}}">
   {% endif %}
      {% if forloop.last == true %}
</div>
   {% endif %}
{% endfor %}

</div>





<footer>
  <div class="footer-copy">
    <a class="button bg" href="/about/">About Us</a>
    <a class="footer-imglink selected" href="/resources/">
    <svg xmlns="http://www.w3.org/2000/svg" alt ="resources"  viewBox="0 0 16.31 5.88" class="footer-svg selected">
<path d="M.84,5.88A.83.83,0,0,1,0,5a.86.86,0,0,1,.25-.6A.85.85,0,0,1,0,3.84.83.83,0,0,1,.84,3a.86.86,0,0,1,.6.25A.86.86,0,0,1,2,3,.84.84,0,0,1,2,4.68a.82.82,0,0,1-.6-.25h0a.86.86,0,0,1,.25.6A.83.83,0,0,1,.84,5.88ZM3.24,4.2A.84.84,0,1,1,2.4,5,.83.83,0,0,1,3.24,4.2Z"/><path d="M10.62.84A.84.84,0,0,1,12.06.25a.86.86,0,0,1,.6-.25.83.83,0,0,1,.84.84.83.83,0,0,1-.84.84.82.82,0,0,1-.6-.25.81.81,0,0,1-.6.25A.84.84,0,0,1,10.62.84Z"/><path d="M10.35,3.77a.83.83,0,0,1-.84.84.86.86,0,0,1-.6-.25h0a.82.82,0,0,1,.25.6.84.84,0,1,1-1.42-.6h0a.84.84,0,1,1,0-1.18h0a.81.81,0,0,1-.26-.6.84.84,0,1,1,1.68,0,.81.81,0,0,1-.25.6h0a.86.86,0,0,1,.6-.25A.83.83,0,0,1,10.35,3.77Z"/><rect x="1.3" y="1.43" width="0.02" height="0.02" transform="translate(-0.63 1.35) rotate(-45)"/><path d="M3.43,2a.84.84,0,1,1,.84.84A.84.84,0,0,1,3.43,2Z"/><path d="M4.63.84a.84.84,0,0,1,1.68,0,.84.84,0,0,1-1.68,0Z"/><path d="M16.31,5a.83.83,0,0,1-.84.84.81.81,0,0,1-.6-.25.82.82,0,0,1-.6.25A.83.83,0,0,1,13.43,5a.86.86,0,0,1,.25-.6A.84.84,0,0,1,14.27,3a.83.83,0,0,1,.6.26.81.81,0,0,1,.6-.26.84.84,0,0,1,.59,1.44A.86.86,0,0,1,16.31,5Zm-1.43-.6h0v0Z"/></svg>
Resources
</a>
  </div>
</footer>


<script src="{{site.baseurl}}/js/clock.js"></script>
<script src="{{site.baseurl}}/js/layout.js"></script>

