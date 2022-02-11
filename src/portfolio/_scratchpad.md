---
layout: layouts/scratchpad.njk
---

**Button Styles**

<button>Test</button>

<div>
{%- for work in collections.sortedWork %}
  {% include "components/work-card.njk" %}
{%- endfor %}
</div>
