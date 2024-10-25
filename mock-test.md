---
title: "Mock Test"
ql: true
---
<div>
{% for mocktest in site.mock_tests %}
<ul>
<li><a href ="{{ mocktest.url }}">{{ mocktest.title }}</a></li>
</ul>
{% endfor %}
</div>
