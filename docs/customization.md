This section shows you how to customize pre built animations easily without much headache.

> Note: All the customizations takes place right through the data-attributes.

Unlike other animation javascript libraries , motionia.js doesn't require any tuning up nor it needs much to start with.

Motionia.js supports all the CSS animation properties to tune with up.

These can be change or accessed via data-attributes right through your html markup.

## List of all the parameters:

They are 8 in total.

- animation-name 
- animation-duration 
- animation-timing-function 
- animation-delay 
- animation-iteration-count 
- animation-direction 
- animation-fill-mode 
- animation-play-state

You can use them with `data-delay`, `data-mode` , `data-direction` , `data-iteration` etc.

## How to use.

It's quite easy just memorize how you would do it with javascript.

You would change the animation duration of a element using ja as below:

```js

document.querySelector('#elem).animationDuration = '2s';

```

Motionia.js does the same but through an easy way that you need not to define the above tuning to all of your animations as it becomes too hard to type all that long js.

Use it the motionia way:

```html

<div data-duration='2s'></div>
```

# Schema

Setting data-attribute to one element only customizes particulary that element.

This may help to trigger different element's configuration at a time easily without initializing multiples time the  elements.

Thus, this will helps to keep your documents light in size.

Nice!

## Bonus feature

Worry about the fact of conflicting of animations with other animations?

Well, you need not to as, motionia.js doesn't change the animation duration for all elements configured with rather it only that element.