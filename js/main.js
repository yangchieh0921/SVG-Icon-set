// this is an IIFE (Immediately Invoked Function Expression)
// also called the Module pattern
//
(() => { // shorthand function declaration (also called a fat arrow function)
  console.log('fired');

//select elements Here
let theBadge = document.querySelector(".Layer_1");
let svgBadge = document.querySelector(".Layer_2");
let svgBadge2 = document.querySelector(".Layer_3");
let svgBadge3 = document.querySelector(".Layer_4");
let svgBadge4 = document.querySelector(".Layer_5");
let svgBadge5 = document.querySelector(".Layer_6");
let svgBadge6 = document.querySelector(".Layer_7");
let svgBadge7 = document.querySelector(".Layer_8");
let svgBadge8 = document.querySelector(".Layer_9");
let svgBadge9 = document.querySelector(".Layer_10");
let svgBadge10 = document.querySelector(".Layer_11");
let svgBadge11 = document.querySelector(".Layer_12");
//fuction go in the middle
function logID() {
  console.log(this.id);
}

// event handling
theBadge.addEventListener("click",logID);
svgBadge.addEventListener("click",logID);
svgBadge2.addEventListener("click",logID);
svgBadge3.addEventListener("click",logID);
svgBadge4.addEventListener("click",logID);
svgBadge5.addEventListener("click",logID);
svgBadge6.addEventListener("click",logID);
svgBadge7.addEventListener("click",logID);
svgBadge8.addEventListener("click",logID);
svgBadge9.addEventListener("click",logID);
svgBadge10.addEventListener("click",logID);
svgBadge11.addEventListener("click",logID);

})();
