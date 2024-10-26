---
title: "Mock Test"
ql: true
---

{% assign subjects = site.mocktests | map: 'subject' | uniq %}

{% for subject in subjects %}
  <h2>{{ subject }}</h2>
  <ul>
    {% for mocktest in site.mocktests %}
      {% if mocktest.subject == subject %}
        <li>
          <a href="{{ mocktest.url }}">{{ mocktest.title }}</a> - <em>{{ mocktest.topic }}</em>
        </li>      {% endif %}
    {% endfor %}
  </ul>
{% endfor %}
