---
layout: layouts/_base.njk
---

<div>
{%- for work in collections.sortedWork %}
{% include "components/work-card.njk" %}
{%- endfor %}
</div>
