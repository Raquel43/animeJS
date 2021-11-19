/* Using Targets */
//===================

/* Single Html Element*/
const page = document.getElementById('page');

/* CSS Selector */
const circle = '.page #circle';

/* Html Collection */
const boxes = document.getElementsByClassName('js-box');

/*Query Selector: NodeList */
const AllBoxes = document.querySelectorAll('.js-box');

const myAnim = anime({
    targets: circle,
    scale: 1.3,
    autoplay: false,
})