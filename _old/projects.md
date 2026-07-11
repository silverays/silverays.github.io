---
title: Portfolio
permalink: /projects/
layout: page
---

<div class="card-columns">
  {% for project in site.projects reversed %}
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">
        {% if project.link %}
        <a href="{{ project.link }}" target="_blank" rel="noopener">{{ project.title }}</a>
        {% else %}
        {{ project.title }}
        {% endif %}
      </h5>
      <h6 class="card-subtitle mb-2 text-muted">
        <small>{{ project.technologies }}</small>
      </h6>
      <p class="card-text">{{ project.description }}</p>
      <p class="card-text"><small class="text-muted">{{ project.content | strip_html | truncatewords: 30 }}</small></p>
    </div>
  </div>
  {% endfor %}
</div>
