---
title: "MediaText"
description: "Best for combining images with longer descriptions"
head: "MediaText | Components"
thumbnail: /img/work/image-halfwidth.png
order: 1
online: true
---

::Tags-{:list='["Tag 1","Tag 2","Tag 3"]'}
::

::Spacer-{size=sm}
::






::MediaText-{column=true text=top}
#image
<display src="/img/half_size_169.png" src-width="2000" src-height="2250"> </display>
#caption
<p class="mt-8">
MediaText is interesting, has some options, let's explore
</p>
::
::Spacer
::

::MediaText-{column=true reverse=true}
#image
<display src="/img/half_size_169.png" src-width="2000" src-height="2250"> </display>
#caption
By default, text is aligned to left and center. It can be anchored to the top or bottom, and right aligned.
::
::Spacer
::


::MediaText-{column=true textAlign=top cap=60vh scroll=true}
#image
<display src="/img/half_size_169.png" src-width="2000" src-height="2250"> </display>
<display src="/img/half_size_169.png" src-width="2000" src-height="2250"> </display>
<display src="/img/half_size_169.png" src-width="2000" src-height="2250"> </display>
<display src="/img/half_size_169.png" src-width="2000" src-height="2250"> </display>
#caption
MediaText with text on top and height capped at 60vh
::
::Spacer
::

::MediaText-{reverse=true width=wid textAlign=bottom}
#image
<display src="/img/half_size_169.png" src-width="2000" src-height="2250"> </display>
#caption
MediaText component reversed, set to wide 
::
::Spacer
::
