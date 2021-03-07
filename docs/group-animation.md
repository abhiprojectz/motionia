This section describes how you would animate elements in a group that it rather than using javascript to autoanimate elements.

You may achieve the same using `data-group` attribute which will auto-animate the element in series via given array of names of animation classes.

Suppose you chose to animate a element first to appear in and then tilt a way after it rotate it. 

`data-group='fade,tilt,rotateIn'` utility would do it.

## What is it?

pass animations names list upto any of number to `data-group` and trigger it when the element appear in the view!

You don't require any scrolling library infact motionia will only animate elements as they comes in the viewport.

All the animations will trigger after the other finishes up.
