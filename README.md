
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/3bfrcyaaf6vbbq913zyu.png)
---
<p align='center'> The  Ultimate & smart JS animation library! <br><a href="https://github.com/abhiprojectz/motionia/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/abhiprojectz/motionia?style=for-the-badge"></a>   <a href="https://github.com/abhiprojectz/motionia/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/abhiprojectz/motionia?style=for-the-badge"></a> </p>

---
[![](https://img.shields.io/twitter/follow/abhiprojectz.svg?style=social)](https://twitter.com/abhiprojectz)

> Simple fast , flexible  & easy to integrate.
> No need to write page long CSS Keyframes that consumes a lot of time and no need to waste a lot on their customizations.

# Give us your feedback

[![](https://gitrate.herokuapp.com/happy?ref=abhiprojectz.motionia)](https://gitrate.herokuapp.com/happy/done?ref=abhiprojectz.motionia)

[![](https://gitrate.herokuapp.com/unhappy?ref=abhiprojectz.motionia)](https://gitrate.herokuapp.com/unhappy/done?ref=abhiprojectz.motionia)

> Created using [https://gitrate.herokuapp.com/](https://gitrate.herokuapp.com/) Gitrate tool 

Just use motionia.js it contains 100+ pre-built animations with a tons of customizations.

No need of using any kind of **Scroll** library, motionia is independent => No dependencies.

Alright, so explain me in 30 secs what it is actually?

Wanna  save time? then just animate elements by  adding `data attributes`.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/j4ym5lke7w6imat5h7fe.JPG)

```html
<div data-motionia='fadeIn'> hi!, i am a fading in text! :)
 </div>
```
With a tons of customizations to elements such as delay , duration , repeat , easing , direction etc parameters.

all by using `data attributes` to html parametric elements itself.

Need to animate elements using js for some reasons?
then just use like:

```js
var myAnim = new motionia() 
// initialize motionia.js

myAnim.mo({
targets: '#div',
anim: 'rollLeft'
duration: '5s'
})
// targets can be any html parametric element and 
// then customize according to your needs!
// using simple JSON like structure.
```

# Where to get?

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/qhgghdtuxxxtvl9axbrr.png)

[Motionia on github](https://github.com/abhiprojectz/motionia)


[Experiment with it here](https://anicode.in/motionia/try/)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/j4ym5lke7w6imat5h7fe.JPG)

# Examples 

Visit my codepen for motionia.js examples and demos and to grasp easily what motionia can actually do.

 +  [Abhiprojectz on Codepen](https://codepen.io/abhiprojectz)

 + [Motionia.js - animating the door](https://codepen.io/abhiprojectz/pen/BajyQPq)

 + [Animating backgrounds](https://codepen.io/abhiprojectz/pen/OJMPWbG)

  + [Animating lists](https://codepen.io/abhiprojectz/pen/KKVwoNp)

 + [Animating Loaders](https://codepen.io/abhiprojectz/pen/MWKYVMo)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/j4ym5lke7w6imat5h7fe.JPG)

# Installations 

Just add a script path of motionia via **JSDELIVR** into the head of your project

```html
<script src="https://cdn.jsdelivr.net/gh/abhiprojectz/motionia@latest/dist/motionia.js" defer></script>
```
# Usage

We have a svg with id as `mysvg` now we wanna animate it such that animations triggers when it appears in viewport.


![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/nrt1kdmskno8r8ajemu7.png)

add a rolling effect from left `rollleft`


![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/j4ym5lke7w6imat5h7fe.JPG)


##  Set a delay of 5s 

This is just a small example.

The animation will be triggered as soon as the element appers inside the viewport.

> Note: if you want to trigger element using js then refer the section below.

```html
<div data-mationia='rollLeft' data-delay='5s'> rolling from
 left </div>
```

The supported animation property is a shorthand property which can be accessed for:

animation-name
animation-duration
animation-timing-function
animation-delay
animation-iteration-count
animation-direction
animation-fill-mode
animation-play-state

Refer documentations for more details.

## Sliding a element right by 200px

> No keyframes straight forward text parameters.

use anim name **slide** as `data-motionia='slide'` then specify amount that is `data-right='200px'` & over!

```html
<div data-motionia='slide' data-right='200px'>i slide by 200px right</div>
```

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/j4ym5lke7w6imat5h7fe.JPG)

# Using js syntax for advanced usage.

You can also trigger animation inside a function like `onclick` , `ontouch` etc or maybe as a result of a function.

Pre-built anims , which uses simple syntax makes it easy to decorate our project easily & without any dependencies.

First of all initialize `motionia.js`a

```js
var myAnim = new motionia() 
// initialize motionia.js
```

Now you can create a object and pass parameters in it to customize the anim.

use `.mo` method to pass parameters 

```js
myAnim.mo({
targets: '#div',
anim: 'rollLeft'
duration: '5s'
})
```

You can also **overrides** targets on every object no need to initialize motionia more than once.


![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/j4ym5lke7w6imat5h7fe.JPG)


# Ideas

Many other animation library doesn't provide us built animations but `motionia.js` do.

Trigger it when elements visible in viewport or trigger on a click using easy JS setup.

The `.mo({})` method quite works as a timeline feature.

So, keep going animating by a line.

For brief explanation refer docs.


![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/j4ym5lke7w6imat5h7fe.JPG)


# Documentation

grab the docs here: [docs of motionia](https://anicode.in/motionia/docs)

# BONUS!

Now comes the **MAIN** part!

The best thing of motionia.js is **mixing up of anims**.

So , it totally depends on your creativity of how you mix the animations.

To rotate & then make a element bigger in size use:

**data-motionia='rotateScaleIn'** we just mixed the animations name.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/j4ym5lke7w6imat5h7fe.JPG)


# Features at a glance

 + 30+ base animations.
 + Animation property customizations.
 + Easy Scroll builtin animation triggering.
 + Mixing Of animations increases the no. of built-in animations thus, makes it lightweight.
 + JSON structure customization.
 + NO dependencies 
 + Tested on all major browsers.


![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/j4ym5lke7w6imat5h7fe.JPG)


# Contribute

This is very important do fork it right now and come up with your ideas!

[![Stargazers repo roster for @abhiprojectz/motionia](https://reporoster.com/stars/abhiprojectz/motionia)](https://github.com/abhiprojectz/motionia/stargazers)

[![Forkers repo roster for @abhiprojectz/motionia](https://reporoster.com/forks/abhiprojectz/motionia)](https://github.com/abhiprojectz/motionia/network/members)

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/j4ym5lke7w6imat5h7fe.JPG)
