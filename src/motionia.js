function motionia(t, a, e) {
    var n;
    switch (t.slice(0, 1)) {
        case "#":
            var i = $("#" + t.substr(1));
            break;
        case ".":
            i = $("." + t.substr(1));
            break;
        default:
            i = $(t)
    }
    switch (e || (e = "100px"), a) {
        case "fadeIn":
            n = "fadeIn";
            break;
        case "rollIn":
            n = "rollIn";
            break;
        case "scaleIn":
            n = "scaleIn";
            break;
        case "slideIn":
            n = "slideIn";
            break;
        case "slitIn":
            n = "slitIn";
            break;
        case "swirlIn":
            n = "swirlIn";
            break;
        case "flipIn":
            n = "flipIn";
            break;
        case "bounceIn":
            n = "bounceIn";
            break;
        case "presIn":
            n = "presIn";
            break;
        case "presentIn":
            n = "presentIn";
            break;
        case "parosIn":
            n = "parosIn";
            break;
        case "flickerIn":
            n = "flickerIn";
            break;
        case "slideOut":
            n = "slideOut";
            break;
        case "fadeOut":
            n = "fadeOut";
            break;
        case "slitOut":
            n = "slitOut";
            break;
        case "rollOut":
            n = "rollOut";
            break;
        case "bounceOut":
            n = "bounceOut";
            break;
        case "flickerOut":
            n = "flickerOut";
            break;
        case "rotateIn":
            n = "rotateIn";
            break;
        case "swirlOut":
            n = "swirlOut";
            break;
        case "rotateOut":
            n = "rotateOut";
            break;
        case "flipOut":
            n = "flipOut";
            break;
        case "swingIn":
            n = "swingIn";
            break;
        case "swingOut":
            n = "swingOut";
            break;
        case "tiltIn":
            n = "tiltIn";
            break;
        case "tiltOut":
            n = "tiltOut";
            break;
        case "presIn":
            n = "presIn";
            break;
        case "scaleOut":
            n = "scaleOut";
            break;
        case "slideX":
            n = "slide", $(i).html("<style> ." + t.substr(1) + "{\n    -webkit-animation: slideX 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n        \n}\n\n\n@-webkit-keyframes slideX {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n  100% {\n            transform: translateX(" + e + ");\n  }\n}     \n                    </style>"), n = t.substr(1);
            break;
        case "slideY":
            $(i).html("<style> ." + t.substr(1) + "{\n    -webkit-animation: slideY 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n        \n}\n\n\n@-webkit-keyframes slideY {\n  0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  100% {\n            transform: translateY(" + e + ");\n  }\n}     \n                    </style>"), n = t.substr(1);
            break;
        case "rotate":
            $(i).html("<style> ." + t.substr(1) + "{\n      \n    -webkit-animation: rotate  0.6s ease-in-out both;\n            animation: rotate  0.6s ease-in-out both;\n}\n\n\n\n@-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n  }\n  100% {\n    -webkit-transform: rotate(" + e + ");\n            transform: rotate(" + e + ");\n  }\n}\n\n                    </style>"), n = t.substr(1);
            break;
        case "flip":
            $(i).html("<style> ." + t.substr(1) + "{\n                  \n    -webkit-animation: flip 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;\n            animation: flip 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;\n}\n\n@-webkit-keyframes flip {\n  0% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n  }\n  100% {\n    -webkit-transform: rotateX(" + e + ");\n            transform: rotateX(" + e + ");\n  }\n}\n\n </style>"), n = t.substr(1);
            break;
        case "swing":
            $(i).html("<style> ." + t.substr(1) + "{\n                   \n                   \n    -webkit-animation: swing 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n            animation: swing 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;\n}\n\n@-webkit-keyframes swing {\n  0% {\n    -webkit-transform: rotateX(0);\n            transform: rotateX(0);\n    -webkit-transform-origin: top;\n            transform-origin: top;\n  }\n  100% {\n    -webkit-transform: rotateX(" + e + ");\n            transform: rotateX(" + e + ");\n    -webkit-transform-origin: top;\n            transform-origin: top;\n  }\n}\n </style>"), n = t.substr(1);
            break;
        default:
            n = "slideIn"
    }
    $(i).addClass(n).delay(1e3).queue(function(t) {
        "Out" === n.substr(-3) || $(this).removeClass(n), t()
    }), i.hasClass(n) && i.addClass(n)
}! function() {
    var t = document.createElement("style");
    t.innerHTML = "\n         .fadeIn{-webkit-animation:fade-in 1.2s cubic-bezier(.39,.575,.565,1) both;animation:fade-in 1.2s cubic-bezier(.39,.575,.565,1) both}@-webkit-keyframes fade-in{0%{opacity:0}100%{opacity:1}}@keyframes fade-in{0%{opacity:0}100%{opacity:1}}.rollIn{-webkit-animation:roll-in-top .6s ease-out both;animation:roll-in-top .6s ease-out both}@-webkit-keyframes roll-in-top{0%{-webkit-transform:translateY(-800px) rotate(-540deg);transform:translateY(-800px) rotate(-540deg);opacity:0}100%{-webkit-transform:translateY(0) rotate(0);transform:translateY(0) rotate(0);opacity:1}}@keyframes roll-in-top{0%{-webkit-transform:translateY(-800px) rotate(-540deg);transform:translateY(-800px) rotate(-540deg);opacity:0}100%{-webkit-transform:translateY(0) rotate(0);transform:translateY(0) rotate(0);opacity:1}}.scaleIn{-webkit-animation:scale-in-center .5s cubic-bezier(.25,.46,.45,.94) both;animation:scale-in-center .5s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes scale-in-center{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes scale-in-center{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}.slitIn{-webkit-animation:slit-in-vertical .45s ease-out both;animation:slit-in-vertical .45s ease-out both}@-webkit-keyframes slit-in-vertical{0%{-webkit-transform:translateZ(-800px) rotateY(90deg);transform:translateZ(-800px) rotateY(90deg);opacity:0}54%{-webkit-transform:translateZ(-160px) rotateY(87deg);transform:translateZ(-160px) rotateY(87deg);opacity:1}100%{-webkit-transform:translateZ(0) rotateY(0);transform:translateZ(0) rotateY(0)}}@keyframes slit-in-vertical{0%{-webkit-transform:translateZ(-800px) rotateY(90deg);transform:translateZ(-800px) rotateY(90deg);opacity:0}54%{-webkit-transform:translateZ(-160px) rotateY(87deg);transform:translateZ(-160px) rotateY(87deg);opacity:1}100%{-webkit-transform:translateZ(0) rotateY(0);transform:translateZ(0) rotateY(0)}}.flipIn{-webkit-animation:flip-in-hor-bottom .5s cubic-bezier(.25,.46,.45,.94) both;animation:flip-in-hor-bottom .5s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes flip-in-hor-bottom{0%{-webkit-transform:rotateX(80deg);transform:rotateX(80deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes flip-in-hor-bottom{0%{-webkit-transform:rotateX(80deg);transform:rotateX(80deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}.rotateIn{-webkit-animation:rotate-in-center .6s cubic-bezier(.25,.46,.45,.94) both;animation:rotate-in-center .6s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes rotate-in-center{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotate-in-center{0%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}.swirlIn{-webkit-animation:swirl-in-fwd .6s ease-out both;animation:swirl-in-fwd .6s ease-out both}@-webkit-keyframes swirl-in-fwd{0%{-webkit-transform:rotate(-540deg) scale(0);transform:rotate(-540deg) scale(0);opacity:0}100%{-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1);opacity:1}}@keyframes swirl-in-fwd{0%{-webkit-transform:rotate(-540deg) scale(0);transform:rotate(-540deg) scale(0);opacity:0}100%{-webkit-transform:rotate(0) scale(1);transform:rotate(0) scale(1);opacity:1}}.presIn{-webkit-animation:rotate-in-2-cw .5s cubic-bezier(.25,.46,.45,.94) both;animation:rotate-in-2-cw .5s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes rotate-in-2-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}@keyframes rotate-in-2-cw{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}100%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}}.parosIn{-webkit-animation:slit-in-horizontal .45s ease-out both;animation:slit-in-horizontal .45s ease-out both}@-webkit-keyframes slit-in-horizontal{0%{-webkit-transform:translateZ(-800px) rotateX(90deg);transform:translateZ(-800px) rotateX(90deg);opacity:0}54%{-webkit-transform:translateZ(-160px) rotateX(87deg);transform:translateZ(-160px) rotateX(87deg);opacity:1}100%{-webkit-transform:translateZ(0) rotateX(0);transform:translateZ(0) rotateX(0)}}@keyframes slit-in-horizontal{0%{-webkit-transform:translateZ(-800px) rotateX(90deg);transform:translateZ(-800px) rotateX(90deg);opacity:0}54%{-webkit-transform:translateZ(-160px) rotateX(87deg);transform:translateZ(-160px) rotateX(87deg);opacity:1}100%{-webkit-transform:translateZ(0) rotateX(0);transform:translateZ(0) rotateX(0)}}.bounceIn{-webkit-animation:bounce-in-top 1.1s both;animation:bounce-in-top 1.1s both}@-webkit-keyframes bounce-in-top{0%{-webkit-transform:translateY(-500px);transform:translateY(-500px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}38%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1}55%{-webkit-transform:translateY(-65px);transform:translateY(-65px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}72%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}81%{-webkit-transform:translateY(-28px);transform:translateY(-28px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}90%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}95%{-webkit-transform:translateY(-8px);transform:translateY(-8px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}@keyframes bounce-in-top{0%{-webkit-transform:translateY(-500px);transform:translateY(-500px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}38%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;opacity:1}55%{-webkit-transform:translateY(-65px);transform:translateY(-65px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}72%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}81%{-webkit-transform:translateY(-28px);transform:translateY(-28px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}90%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}95%{-webkit-transform:translateY(-8px);transform:translateY(-8px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}100%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}}.presentIn{-webkit-animation:slide-in-elliptic-top-fwd .7s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-elliptic-top-fwd .7s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes slide-in-elliptic-top-fwd{0%{-webkit-transform:translateY(-600px) rotateX(-30deg) scale(0);transform:translateY(-600px) rotateX(-30deg) scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% 1400px;transform-origin:50% 1400px;opacity:1}}@keyframes slide-in-elliptic-top-fwd{0%{-webkit-transform:translateY(-600px) rotateX(-30deg) scale(0);transform:translateY(-600px) rotateX(-30deg) scale(0);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;opacity:0}100%{-webkit-transform:translateY(0) rotateX(0) scale(1);transform:translateY(0) rotateX(0) scale(1);-webkit-transform-origin:50% 1400px;transform-origin:50% 1400px;opacity:1}}.swingIn{-webkit-animation:swing-in-top-fwd .5s cubic-bezier(.175,.885,.32,1.275) both;animation:swing-in-top-fwd .5s cubic-bezier(.175,.885,.32,1.275) both}@-webkit-keyframes swing-in-top-fwd{0%{-webkit-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:top;transform-origin:top;opacity:1}}@keyframes swing-in-top-fwd{0%{-webkit-transform:rotateX(-100deg);transform:rotateX(-100deg);-webkit-transform-origin:top;transform-origin:top;opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);-webkit-transform-origin:top;transform-origin:top;opacity:1}}.tiltIn{-webkit-animation:tilt-in-top-1 .6s cubic-bezier(.25,.46,.45,.94) both;animation:tilt-in-top-1 .6s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes tilt-in-top-1{0%{-webkit-transform:rotateY(30deg) translateY(-300px) skewY(-30deg);transform:rotateY(30deg) translateY(-300px) skewY(-30deg);opacity:0}100%{-webkit-transform:rotateY(0) translateY(0) skewY(0);transform:rotateY(0) translateY(0) skewY(0);opacity:1}}@keyframes tilt-in-top-1{0%{-webkit-transform:rotateY(30deg) translateY(-300px) skewY(-30deg);transform:rotateY(30deg) translateY(-300px) skewY(-30deg);opacity:0}100%{-webkit-transform:rotateY(0) translateY(0) skewY(0);transform:rotateY(0) translateY(0) skewY(0);opacity:1}}.flickerIn{-webkit-animation:flicker-in-1 2s linear both;animation:flicker-in-1 2s linear both}@-webkit-keyframes flicker-in-1{0%{opacity:0}10%{opacity:0}10.1%{opacity:1}10.2%{opacity:0}20%{opacity:0}20.1%{opacity:1}20.6%{opacity:0}30%{opacity:0}30.1%{opacity:1}30.5%{opacity:1}30.6%{opacity:0}45%{opacity:0}45.1%{opacity:1}50%{opacity:1}55%{opacity:1}55.1%{opacity:0}57%{opacity:0}57.1%{opacity:1}60%{opacity:1}60.1%{opacity:0}65%{opacity:0}65.1%{opacity:1}75%{opacity:1}75.1%{opacity:0}77%{opacity:0}77.1%{opacity:1}85%{opacity:1}85.1%{opacity:0}86%{opacity:0}86.1%{opacity:1}100%{opacity:1}}@keyframes flicker-in-1{0%{opacity:0}10%{opacity:0}10.1%{opacity:1}10.2%{opacity:0}20%{opacity:0}20.1%{opacity:1}20.6%{opacity:0}30%{opacity:0}30.1%{opacity:1}30.5%{opacity:1}30.6%{opacity:0}45%{opacity:0}45.1%{opacity:1}50%{opacity:1}55%{opacity:1}55.1%{opacity:0}57%{opacity:0}57.1%{opacity:1}60%{opacity:1}60.1%{opacity:0}65%{opacity:0}65.1%{opacity:1}75%{opacity:1}75.1%{opacity:0}77%{opacity:0}77.1%{opacity:1}85%{opacity:1}85.1%{opacity:0}86%{opacity:0}86.1%{opacity:1}100%{opacity:1}}.scaleOut{-webkit-animation:scale-out-center .5s cubic-bezier(.55,.085,.68,.53) both;animation:scale-out-center .5s cubic-bezier(.55,.085,.68,.53) both}@-webkit-keyframes scale-out-center{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);opacity:1}}@keyframes scale-out-center{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(0);transform:scale(0);opacity:1}}.flipOut{-webkit-animation:flip-out-hor-top .45s cubic-bezier(.55,.085,.68,.53) both;animation:flip-out-hor-top .45s cubic-bezier(.55,.085,.68,.53) both}@-webkit-keyframes flip-out-hor-top{0%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}100%{-webkit-transform:rotateX(70deg);transform:rotateX(70deg);opacity:0}}@keyframes flip-out-hor-top{0%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}100%{-webkit-transform:rotateX(70deg);transform:rotateX(70deg);opacity:0}}.rotateOut{-webkit-animation:rotate-out-center .6s cubic-bezier(.55,.085,.68,.53) both;animation:rotate-out-center .6s cubic-bezier(.55,.085,.68,.53) both}@-webkit-keyframes rotate-out-center{0%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);opacity:0}}@keyframes rotate-out-center{0%{-webkit-transform:rotate(0);transform:rotate(0);opacity:1}100%{-webkit-transform:rotate(-360deg);transform:rotate(-360deg);opacity:0}}.bounceOut{-webkit-animation:bounce-out-top 1.5s both;animation:bounce-out-top 1.5s both}@-webkit-keyframes bounce-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}5%{-webkit-transform:translateY(-30px);transform:translateY(-30px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}15%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}25%{-webkit-transform:translateY(-38px);transform:translateY(-38px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}38%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}52%{-webkit-transform:translateY(-75px);transform:translateY(-75px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}70%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}85%{opacity:1}100%{-webkit-transform:translateY(-800px);transform:translateY(-800px);opacity:0}}@keyframes bounce-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}5%{-webkit-transform:translateY(-30px);transform:translateY(-30px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}15%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}25%{-webkit-transform:translateY(-38px);transform:translateY(-38px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}38%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}52%{-webkit-transform:translateY(-75px);transform:translateY(-75px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}70%{-webkit-transform:translateY(0);transform:translateY(0);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}85%{opacity:1}100%{-webkit-transform:translateY(-800px);transform:translateY(-800px);opacity:0}}.slitOut{-webkit-animation:slit-out-vertical .5s ease-in both;animation:slit-out-vertical .5s ease-in both}@-webkit-keyframes slit-out-vertical{0%{-webkit-transform:translateZ(0) rotateY(0);transform:translateZ(0) rotateY(0);opacity:1}54%{-webkit-transform:translateZ(-160px) rotateY(87deg);transform:translateZ(-160px) rotateY(87deg);opacity:1}100%{-webkit-transform:translateZ(-800px) rotateY(90deg);transform:translateZ(-800px) rotateY(90deg);opacity:0}}@keyframes slit-out-vertical{0%{-webkit-transform:translateZ(0) rotateY(0);transform:translateZ(0) rotateY(0);opacity:1}54%{-webkit-transform:translateZ(-160px) rotateY(87deg);transform:translateZ(-160px) rotateY(87deg);opacity:1}100%{-webkit-transform:translateZ(-800px) rotateY(90deg);transform:translateZ(-800px) rotateY(90deg);opacity:0}}.fadeout{-webkit-animation:fade-out 1s ease-out both;animation:fade-out 1s ease-out both}@-webkit-keyframes fade-out{0%{opacity:1}100%{opacity:0}}@keyframes fade-out{0%{opacity:1}100%{opacity:0}}.rollOut{-webkit-animation:roll-out-left .6s ease-in both;animation:roll-out-left .6s ease-in both}@-webkit-keyframes roll-out-left{0%{-webkit-transform:translateX(0) rotate(0);transform:translateX(0) rotate(0);opacity:1}100%{-webkit-transform:translateX(-1000px) rotate(-540deg);transform:translateX(-1000px) rotate(-540deg);opacity:0}}@keyframes roll-out-left{0%{-webkit-transform:translateX(0) rotate(0);transform:translateX(0) rotate(0);opacity:1}100%{-webkit-transform:translateX(-1000px) rotate(-540deg);transform:translateX(-1000px) rotate(-540deg);opacity:0}}.slideOut{-webkit-animation:slide-out-top .5s cubic-bezier(.55,.085,.68,.53) both;animation:slide-out-top .5s cubic-bezier(.55,.085,.68,.53) both}@-webkit-keyframes slide-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}}@keyframes slide-out-top{0%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}100%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}}.slideIn{-webkit-animation:slide-in-top .5s cubic-bezier(.25,.46,.45,.94) both;animation:slide-in-top .5s cubic-bezier(.25,.46,.45,.94) both}@-webkit-keyframes slide-in-top{0%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slide-in-top{0%{-webkit-transform:translateY(-1000px);transform:translateY(-1000px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}", document.head.append(t);
    var a = document.createElement("script");
    a.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js", document.head.prepend(a)
}();