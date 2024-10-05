---
title: Courses
ql: true
---
<ul>
  {% for course in site.courses %}
  <li>
    <h3><a href="{{ course.url }}">{{ course.title }}</a></h3>
    <p>{{ course.description }}</p>
  </li>
  {% endfor %}
</ul>
