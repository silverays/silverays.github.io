---
title: Blog
layout: page
---

<ul class="list-unstyled">
  {% for post in site.posts %}
  <li class="mb-4">
    <h3>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </h3>
    <small class="text-muted">{{ post.date | date: "%B %d, %Y" }}</small>
    <p>{{ post.excerpt | remove: '<p>' | remove: '</p>' | strip_html | truncatewords: 50 }}</p>
  </li>
  {% endfor %}
</ul>
