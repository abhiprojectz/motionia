# Welcome to motionia.js

A built-in yet super customizable 1 stop solution to animations in CSS.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/3bfrcyaaf6vbbq913zyu.png)
---
<p align='center'> The  Ultimate & smart JS animation library! <br><a href="https://github.com/abhiprojectz/motionia/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/abhiprojectz/motionia?style=for-the-badge"></a>   <a href="https://github.com/abhiprojectz/motionia/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/abhiprojectz/motionia?style=for-the-badge"></a> </p>

---
[![](https://img.shields.io/twitter/follow/abhiprojectz.svg?style=social)](https://twitter.com/abhiprojectz)

> Simple fast , flexible  & easy to integrate.
> No need to write page long CSS Keyframes that consumes a lot of time and no need to waste a lot on their customizations.

you might have seen many tons of library that offer to animate using javascript , but you would need to first define them a lot even for a small piece of animation.

In motionia.js the concept or core utility is entirely different as compared to others.

# Core concept

The main motive or core concept is to find a way to animate DOM elements easily without much configuration and to deal with repeating typo of codes that we face as a frontend developer while building applications.

In technical terms , using `data-attrbutes` to animate elements rather than traditional way.

Simple type in one of the built-in animation name and pass it to `data-motionia` attribute and let the browser render the js behind it.

> The library contains more than 40 built-in animations.

You can easily customize any of the animation property via prefixing `data-` behind them inside markup.

> Below snippet shows how you would slide a element to right side by 100 px or any amount.

Example:

```js

<div data-motionia='slide' data-right='100px'></div>
```

Simply further read [customizations](customization.md) 

If you wanna animate elements in group proceeds to [group animating](group-animation.md)


