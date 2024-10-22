---
title: "Image Text"
description: "Component test"
head: "Image Text | Components"
thumbnail: /img/work/image-halfwidth.png
order: 1
---

::Tags-{:list='["Tag 1","Tag 2","Tag 3"]'}
::

::Spacer-{size=sm}
::

::TextColumns
<p>
text columns, column one, will remove this
</p>
<p>
text columns, column two, will remove this
</p>
::

::Spacer
::

::FullWidth-{caption=right}
#image
<display alt="project image" src="/img/full_size_169.png" width="4000" height="2250">
#caption
full width image example, will stretch to content max defined width
::

::Spacer
::


::ImageText-{column=true text=top}
#image
<display src="/img/half_size_169.png" width="2000" height="2250"> </display>
#caption
<p class="mt-8">
Image text is interesting, has some options, let's explore
</p>
::
::Spacer
::

::ImageText-{column=true reverse=true}
#image
<display src="/img/half_size_169.png" width="2000" height="2250"> </display>
#caption
<p class="mt-8">
By default, text is aligned to left and center. It can be anchored to the top or bottom, and right aligned.
</p>
::
::Spacer
::


::ImageText-{column=true text=top cap=60vh scroll=true}
#image
<display src="/img/half_size_169.png" width="2000" height="2250"> </display>
<display src="/img/half_size_169.png" width="2000" height="2250"> </display>
<display src="/img/half_size_169.png" width="2000" height="2250"> </display>
<display src="/img/half_size_169.png" width="2000" height="2250"> </display>
#caption
image text with text on top and height capped at 60vh
::
::Spacer
::

::ImageText-{reverse=true width=wide}
#image
<display src="/img/half_size_169.png" width="2000" height="2250"> </display>
<display src="/img/half_size_169.png" width="2000" height="2250"> </display>
#caption
ImageText component reversed, set to wide 
::
::Spacer
::

::ImageText
#image
<display src="/img/half_size_169.png" width="2000" height="2250"/> </display>
<display src="/img/half_size_169.png" width="2000" height="2250"/> </display>
#caption
ImageText component in the default flow
::
::Spacer
::

