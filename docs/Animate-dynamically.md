This section shows how to animate dynamically like as a result of a function or by some reasons using javscript.

First of all initialize the motionia.js class.

```js
var myAnim = new motionia() 
// initialize motionia.js

```

And then animate by taking a instance and passing out the required parameters such as:

## Below are complete parameters:

- `targets` can be any html parametric elements.

- `anim` denotes animation names for complete list refer towards [animations](animations.md)

- `duration` denotes animation duration.

- `delay` denotes animation delay.

- `iteration` denotes animation iteration-count.

- `direction` denotes direction of the animation alternate, forwards etc.

- `mode` denotes count that is repeat, infinite integer etc.

- `state` denotes animation play state running|stoped etc.

Now these can be configured as follows:

```js
myAnim.mo({
targets: '#div',
anim: 'rollLeft'
duration: '5s'
})
// targets can be any html parametric element and 
// then customize according to your needs!
// using simple JSON like structure.

```

The `.mo({})` method quite works as a timeline feature.

You only need to initialize the class only once and adds the parameters any of times using `.mo({})` method.