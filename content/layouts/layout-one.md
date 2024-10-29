---
title: "Layout example one"
description: "Easy to use and customise layout for a project presentation"
head: "something for the head"
thumbnail: /img/work/image-halfwidth.png
order: 8
online: true
---

::Text-{columns}
::Tags-{:list='["Tag one","Tag two","Tag three","Tag four"]'}
::
::Spacer-{size= md}
::
::Text-{columns=2}
Introduction text sets the scene for the project story. What was the starting point, the problem? What kind of task was set, how was it applied and to what result?
This story can be told and assisted with set of images, slides further down or here in the intro text. It looks alright split into two columns and I think it's fairy understandable how to read that.
::
::Spacer-{size= md}
::

::Media-{width= wide}
#image
<display alt="project image" src="/img/full_size_169.png" src-width="4000" src-height="2250">
#caption
Full width image makes a big impact
::
::Spacer
::

::MediaText-{reverse= true}
#image
<display alt="project image" src="/img/half_size_169.png" src-width="2000" src-height="2250"> </display>
#caption
Follow up image can demonstrate an alternative state, or an asset used
::
::Spacer
::

::MediaText-{text-align= bottom}
#image
<display alt="project image" src="/img/half_size_169.png" src-width="2000" src-height="2250"> </display>
#caption
Here a similar figure, text position at the bottom, helps direct the eye
::
::Spacer
::

::Media-{width=wide}
#image
<display alt="project image" src="/img/half_size_169.png" src-width="2000" src-height="2250"> </display>
<display alt="project image" src="/img/half_size_169.png" src-width="2000" src-height="2250"> </display>
<display alt="project image" src="/img/half_size_169.png" src-width="2000" src-height="2250"> </display>
#caption
Multiple screen presentation
::
::Spacer
::

::Text
# Mobile layout presentation
::::Spacer-{size= sm}
::::
You can add text without an image too, introduce sections or highlight information
::

::Spacer
::

::MediaText-{cap=50vh scroll= true media-size= 5/12}
#image
<box width="425px" height="650px" max-height="650px">
    <display alt="project image" src="/img/long_9x32.png" src-width="1125" src-height="4000"> </display>
</box>
#caption
Since the first campaign, the application has been fully adopted by the agency and become a crucial tool in the planning and production of their guilerra marketing campaigns.
::
