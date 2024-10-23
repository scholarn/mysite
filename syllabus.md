---
title: Syllabus
ql: true
---

you can find detailed information about the syllabus for various competitive examinations. Click on the links below to access the syllabus for each exam.
<div>
{% for syllabus in site.syllabus %}
<ul>
<li><a href="{{ syllabus.url }}">{{ syllabus.title }}</a></li>
</ul>
{% endfor %}
</div>
