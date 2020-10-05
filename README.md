# Motionia

## Welcome 

**Motionia** - a lightweight simplified on demand animation library.

[![](https://img.shields.io/twitter/follow/abhiprojectz.svg?style=social)](https://twitter.com/abhiprojectz)

![](https://raw.githubusercontent.com/abhiprojectz/motionia/master/assest/keyframe-challenge-large.gif)

With motionia, you can animate elements with just one line of code.

> lightweight, simple, fast & easy to integrate.

``` 

=> motionia("target", "anim");

```

# Where to get?

[Motionia on github](https://github.com/abhiprojectz/motionia)



[Experiment with it here](https://abhiprojectz.github.io/motionia/)

# Examples & Demos

Visit my codepen for motionia.js examples and demos and to grasp easily what motionia can actually do.

[Abhiprojectz on Codepen](https://codepen.io/abhiprojectz)

[Motionia.js - animating the door](https://codepen.io/abhiprojectz/pen/BajyQPq)

[Animating backgrounds](https://codepen.io/abhiprojectz/pen/OJMPWbG)

[Animating lists](https://codepen.io/abhiprojectz/pen/KKVwoNp)

[Animating Loaders](https://codepen.io/abhiprojectz/pen/MWKYVMo)


# Getting started

![](https://raw.githubusercontent.com/abhiprojectz/motionia/master/assest/animations.gif)

Just add a script path of motionia via **JSDELIVR** into the head of your project

```
<script src="https://cdn.jsdelivr.net/gh/abhiprojectz/motionia@v1.0/dist/motionia.js" defer></script>
```


Use motionia in inline script as:

``` 

=> motionia("target", "anim");

```

> Target can be any html element.

> Elements can be an `id` , `class` or `body`, `p`, etc. html parametric element.

> anim refers to the animation name.

# Features

There is a lot of potential in motionia; keep exploring it.

## Animations lists

There are 100+ built-in animations and the capability to create many more.

![](https://raw.githubusercontent.com/abhiprojectz/motionia/master/react-spring.gif)

### Appear In 

> Add `In` to make an "appearing" animation:

fadeIn

rollIn

slideIn

slitIn

bounceIn

swirlIn

rotateIn

presentIn

presIn

parosIn

flickerIn

tiltIn

swingIn

...and many more!

### Disappear Out 

> add `Out` to disappear an element

fadeOut

slideOut

rollOut

slitOut 

shadowIn

popIn

puffIn

blutIn

expandIn

explodeOut

...and more!

# Wanna customize?

![](https://raw.githubusercontent.com/abhiprojectz/motionia/master/assest/loader-2.gif)

You can customize above anim easily without writing long code all you need is **ONE LINE!!**

## Make an element slide right by some amount

> Use motionia("div", "slideX", "100px");

That's all!

```
motionia("target", "slideY" , "100px");
```

# Customize intensity of a anim!

Some anim can be minimized or maximized in order to meet our requirements as sometimes we need to gain more **ATTENTION** from users!


> Just append **Min** or **Max** to the end of an anim name!


## Create a vibrate anim for a element like a button:

```
motionia("#btn","vibrateMax")
motionia("#btn","vibrateMin")
```

### Following anims support min pr max feature:

blink

vibrate

bounce

shake

jelly

wobble

![](https://raw.githubusercontent.com/abhiprojectz/motionia/master/assest/unnamed%20(10).gif)

ripple

# Mixing 2 anims together!

![](https://raw.githubusercontent.com/abhiprojectz/motionia/master/assest/unnamed%20(9).gif)

Yeah, with motionia you can mix one anim to the other. its very simple just **mix anims** name which is one & first of a kind ,with each other and hola!

Why mix? No need to write long **CSS KEYFRAMES** for a cool animation -- a one or two word name is **ENOUGH!**

> Mix anims to make an element rotate and scale:
```
motionia("target", "rotateScaleIn")
```

This will make the object rotate first, then scale it.

> The **CONVERSE** is also possible: make an element scale *first*, then rotate:

```
motionia("target", "scaleRotateIn")
```

**In this way, you can multiply the number of above all anims by just adding Double**

Try out: `flipScaleIn` , `flipScaleOut` , `slideRotate` combinations (and more!).

# Prebuilt 3D anims

Suppose you want to animate an element to look like a door opening? **Imagine it** You can animate element by just its Name!

Visit this codepen demo: [Animate a door easily](https://codepen.io/abhiprojectz/pen/BajyQPq)

![](https://raw.githubusercontent.com/abhiprojectz/motionia/master/assest/unnamed%20(7).gif)

## Animate a element as a door opens in **UP** , **DOWN** , **LEFT** , **RIGHT**

Just add the directions parameters at the end of the anim name!

![](https://raw.githubusercontent.com/abhiprojectz/motionia/master/assest/unnamed%20(6).gif)

use:

```
motionia("#target", "doorUp")
motionia("#target", "doorDown")
motionia("#target", "doorLeft")
motionia("#target", "doorRight")
```

# Animate background of any element!

Animate background of any element by just using some basic parameters as direction parameters.

That is just add direction to **Move** the background in that direction often usefull in making **Landscape** anims easily by just ONE LINE OF CODE!!

visit this codepen demo , in that **gradients background is taken**.

[Animating backgrounds](https://codepen.io/abhiprojectz/pen/OJMPWbG)

use:

```
motionia("#target", "bgDown")
motionia("#target", "bgUp")
motionia("#target", "bgLeft")
motionia("#target", "bgRight")
```

# Animating document background!

![](https://raw.githubusercontent.com/abhiprojectz/motionia/master/assest/2d-video-game-bk-effect.3gif.gif)

Wanna animate background , you can use all the above **BASE** anims and also can make their combos + too add appearing in or out depends upon you.

Use:

```
motionia("body", "popZ")
```
or 
```
motionia("body", "scaleZ");
```

Wait... what's **Z** at the end? This will animate body's transformation in the z axis and can change upon your body's dimension automatically! 

> Remember **Z** parameter only works in anims where transformation in z axis works, that is have its actual meaning as for those anims which it doesn't work then don't worry just change your base anim's name!

# Animate color of a element quickly 

You can pass your  favourite colors upto 3 to motionia's color base anim.

use:

```
motionia("#target", "color", "red", "#000", "teal")

```

> Color will work in any typo that is hsl, hex , rgba , dex or predefined name etc.


# Animate a rotating effects that fits your need.

![](https://raw.githubusercontent.com/abhiprojectz/motionia/master/assest/svg_motion_trails_dribbble.gif)



There is a prebuilt anim for rotate motion that is **rotateIn** or **rotateOut** also you may built more by mixing that is scaleRotateIn etc but to make it adjustable just **customize it**

> Suppose you need turn a icon by 90 degrees

> You may also use it for **fliping**

use:

```

motionia("#icon", "rotate", "90deg")

```

Just specify the angle that 90deg, 100deg, etc.

# Adding blur effects to anim itself!

![](https://raw.githubusercontent.com/abhiprojectz/motionia/master/assest/MotionBlur_motionblur_example.gif)

The above anim is created by mixing **bounceMin** + **Blur**

Upto now we can add a blur effect to our elements using focusIn etc but what about adding this to **Anims** itself!

> Just add **Blur** at the anims name.

use:

```

motionia("#target", "scaleInBlur")

or 

motionia("#target", "rollInBlur")

```




## Up, Down , left & right parameters example

Selecting above anims correctly for your need is a **Art** just master it & add customization accordingly.

### Swinging a button with a id **#btn** 

```
motiona("#btn","swingUp")
motionia("#btn","swingRight")

```


```

// Animate a element to slide up by 10px

motionia("#div","slideY","10px") 

// px can be % em vh vw etc.

```

# The end 

i'll keep updating motionia.

![](https://raw.githubusercontent.com/abhiprojectz/motionia/master/assest/7SIR.gif)

 Don't forget to give motionia a **STAR** & a share thanks.

