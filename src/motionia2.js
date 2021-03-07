function visible(el) {

  var position = el.getBoundingClientRect();

    if(position.top < window.innerHeight && position.bottom >= 0) {
    
    return true
  } else {

    return false
  }
}


// select data elements 

var elem = document.querySelectorAll('[data-motionia]');



var arr = [];


// for each function

elem.forEach(function(data) {

    data.style.opacity = '0.0';

    // custom onload css animation changes begins
    // animation duration

    data.style.animationDuration = data.dataset.duration;
    // animation repeat 


    data.style.animationIterationCount = data.dataset.repeat;


    // animation timing function 

    data.style.animationTimingFunction = data.dataset.easing;

    // animation delay

    data.style.animationDelay = data.dataset.delay;


    // animation direction
    data.style.animationDirection = data.dataset.direction;


    // animation fillmode
    data.style.animationFillMode = data.dataset.mode;


    // animation playstate
    data.style.animationPlayState = data.dataset.state;



    // animate down etc by some amount 

    if (data.dataset.down) {

        function name() {

            return data.dataset.down
        }

        var style = document.createElement('style');
        style.innerHTML = `
 @keyframes slide {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(` + name() + `);
  }
}
  `;
        document.head.appendChild(style);

    }

    // animate slide left 
    if (data.dataset.left) {

        function name() {

            return data.dataset.left
        }

        var style = document.createElement('style');
        style.innerHTML = `
 @keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-` + name() + `);
  }
}
  `;
        document.head.appendChild(style);

    }


    // animate slide right 

    if (data.dataset.right) {

        function name() {

            return data.dataset.right
        }


        var style = document.createElement('style');
        style.innerHTML = `
 @keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(` + name() + `);
  }
}
  `;
        document.head.appendChild(style);

    }

    // animate slide up

    if (data.dataset.up) {

        function name() {

            return data.dataset.up
        }


        var style = document.createElement('style');
        style.innerHTML = `
 @keyframes slide {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-` + name() + `);
  }
}
  `;
        document.head.appendChild(style);

    }


    // background color change anim

    if (data.dataset.bg) {

        function colors() {

            var color = data.dataset.bg;


            return color
        }

        data.classList.add('bgColor');

        var style = document.createElement('style');
        style.innerHTML = `
 @keyframes bgcolor {
  0% {
    background: ` + colors().split(',')[0] + `;
  }
  50% {
    background: ` + colors().split(',')[1] + `;
  }
  100% {
    background: ` + colors().split(',')[2] + `;
  }
}
  `;
        document.head.appendChild(style);

    }

    // custom css changes ends.......

    arr.push(data.dataset.motionia);

})

// onscroll + visible

window.onscroll = function() {


    for (let i = 0; i < arr.length; i++) {

        var el = document.querySelector("[data-motionia='" + arr[i] + "']");


        if (visible(el)) {

            el.style.opacity = 1.0;
            el.classList.add(arr[i]);

        } else {


            el.style.opacity = 0.0;
            el.classList.remove(arr[i]);

        }


    }

}