The main motive behind to build that library is to make developers task easy.

That is we often face problems animating the elements at the frontend specially for UI/UX developers who tends to be more designers.

Writing page long CSS Keyframes besomes difficult to deal with and consumes a lot of time.

Using tools too becomes messy so, to overcome this common problem motionia.js is build.

Whatever the reason you are interested in the area, it's important to stay up-to - date to stay on top of your game. 

Instead of wasting hours scouring the internet to educate yourself on industry news and techniques, keeping tabs on credible animation forums can help in a fraction of the time keep a pulse on the industry.

## Let's see how it saves

our time as a frontend developers.

> To animate a bounce animation when a user clicks a button.

You would first write up the markup and then animate using css classes & keyframes.

```html

<button id='btn' class='bouce'>bounce btn</button>
```

and the styling part would be so 

```css
.bounce{ animation: bouncing 0.5s cubic-bezier(0.1,0.25,0.1,1) 0s infinite alternate both;}

@keyframes bouncing{
  0%  { bottom: 0; box-shadow: 0 0 5px rgba(0,0,0,0.5);}
  100%{ bottom: 50px; box-shadow: 0 50px 50px rgba(0,0,0,0.1);}
}
```

and futher to make the animation delay by 2 sec you would chose javascript for that!

```js

document.querySelector('#btn).animationDelay = '2s';
```

Just see how much it takes to write all these lines of codes with you could achieve in just 2 lines of codes.

Even the customizing process can be done just right inside the main 1 file only!

> Using motionia.js

```html

<button data-motionia='bounce-max' data-delay='2s'>bounce btn</button>
```

That's done!

Alright keep exploring motionia.js docs & you can learn this library within an hour!

## More easy?

Well, there's much more motionia can also be used using single attribute that is class.

Yeah using utility classes to animate elements quickly and customize it using utility classes.

Below shows how to achieve that:

```html

<div class='bouce-max del-2'></div>
```

Easy! refer straight towards the utilia (aka motionia part-2)!

