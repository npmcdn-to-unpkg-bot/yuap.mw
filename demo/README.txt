A Pen created at CodePen.io. You can find this one at http://codepen.io/simeydotme/pen/zGKJdG.

 Based on this sexy UI concept: https://dribbble.com/shots/2071319-GIF-of-the-Tapbar-Interactions

I've not seen much/many navigations done like this in CSS, so I tried to recreate the effect.

One thing is that CSS seems unable to properly set the % of a `linear-gradient` with `background-position: fixed;` to the real pixel value, resulting in a pretty rubbish overflow of the next item's color :(  -- even when the menu 100% width, the linear gradient has incorrect pixels.