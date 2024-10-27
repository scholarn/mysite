---
title: "Mock Test"
ql: true
---
Mock tests are very important for preparation, and Scholarn offers a variety of subjects to help you succeed. Our mock tests give you the practice you need for exams, making it easier to learn and improve. By using our mock tests, you can build confidence and understand key topics better before the real exam.

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
