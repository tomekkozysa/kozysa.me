---
title: "MediaText"
description: "Best for combining images with longer descriptions"
head: "MediaText | Components"
thumbnail: /img/work/image-halfwidth.png
order: 1
online: true
---
::MediaText
#media
<display src="/img/half_size_169.png" :src-width=2000 :src-height=2250> </display>
#text
Default media text splits the space 50/50
::
::Spacer
::

::MediaText-{:reverse=true}
#media
<display src="/img/half_size_169.png" :src-width=2000 :src-height=2250> </display>
#text
By default, text is aligned to left and center. It can be anchored to the top or bottom, and right aligned.
::
::Spacer
::


::MediaText-{size=lg width=wide}
#media
<display src="/img/half_size_169.png" :src-width=2000 :src-height=2250> </display>
<display src="/img/half_size_169.png" :src-width=2000 :src-height=2250> </display>
<display src="/img/half_size_169.png" :src-width=2000 :src-height=2250> </display>
<display src="/img/half_size_169.png" :src-width=2000 :src-height=2250> </display>
#text
MediaText as a column with text on top and height 
::
::Spacer
::

::MediaText-{textAlign=center size=lg :column=true}
#media
<display src="/img/half_size_169.png" :src-width=2000 :src-height=2250> </display>
<display src="/img/half_size_169.png" :src-width=2000 :src-height=2250> </display>
#text
MediaText as a column with text on top and height 
::
::Spacer
::

::MediaText-{:reverse=true width=wide textAlign=bottom}
#media
<display src="/img/half_size_169.png" :src-width=2000 :src-height=2250> </display>
#text
MediaText component reversed, set to wide 
::
::Spacer
::

