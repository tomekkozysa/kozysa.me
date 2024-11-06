---
title: "Text"
description: "Manage text within the layout"
head: "Image Text | Components"
thumbnail: /img/work/image-halfwidth.png
order: 1
online: true
---
::Tags-{:list='["align","columns","width"]'}
::

::Spacer
::
::Text
A basic implementation with default settings allows to control of the width of the text, this is done by limiting max width to 60ch, *ch* unit represents the number of characters, which is very apt for this scenario
::
::Spacer
::


::Text-{:columns=2}
Text component supports multiple columns too. For longer passages it's worth considering splitting text into columns to use the available space better. Column number is reduced to a single one for smaller screens 

*exact breakpoint settings to be confirmed, there's an opportunity to implement ch based component mq*

You can suggest where the text should move to a new column, just by adding a break in the md, the browser will always try to align the height of the columns, perhaps adding more text will make sure it matches with the paragraphs in the md file
::

::Spacer
::
::Text-{align=left}
Text supports **left**, right and center alignment
::
::Text-{align=right :columns=1}
Text supports left, **right** and center alignment
::
::Text-{align=center :columns=1}
Text supports left, right and **center** alignment
::
::Spacer
::
::Text
Text is only a container, which means it can display 
## Headings, 

- lists
- of
- things

1. Also
2. this
::

::Text
 ## Prose components 
::
::Spacer
::
::Text-{:columns=1}
 ### Code

```js [file.js]{4-6,7} meta-info=val
  export default () => {
    console.log('Code block')
  }
  ```
::Spacer
::
::Text
you can refer to code using inline code `code inline`.

::