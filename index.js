let menu_icon = document.getElementById("navBar");
let side_nav = document.getElementById("side_nav");
const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

side_nav.style.right = "-200px";

menu_icon.onclick = function () {
  if (side_nav.style.right == "-200px") {
    side_nav.style.right = "0";
  } else {
    side_nav.style.right = "-200px";
  }
};

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navTop").style.top = "0";
  } else {
    document.getElementById("navTop").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

var newsrc = "Xblack.png";

function changeImage() {
  if (newsrc == "Xblack.png") {
    document.images["menu_icon"].src = "Xblack.png";
    document.images["menu_icon"].alt = "X";
    newsrc = "menuIcon.png";
  } else {
    document.images["menu_icon"].src = "menuIcon.png";
    document.images["menu_icon"].alt = "Menu";
    newsrc = "Xblack.png";
  }
}

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

/**************************/

const resume = document.querySelector('.resume');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `resume 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(resume);

/**************************/

const cont3 = document.querySelector('.content3');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `content3 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(cont3);

/**************************/

const cont4 = document.querySelector('.content4');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `content4 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(cont4);

/**************************/

const cont5 = document.querySelector('.content5');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `content5 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(cont5);

/**************************/

const cont6 = document.querySelector('.content6');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `content6 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(cont6);

/**************************/

const cont7 = document.querySelector('.content7');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `content7 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(cont7);

/**************************/

const cont8 = document.querySelector('.content8');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `content8 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(cont8);

/**************************/

const cont9 = document.querySelector('.content9');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `content9 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(cont9);

/**************************/

const cont10 = document.querySelector('.content10');

observor = new IntersectionObserver((entries) => {
  console.log(entries);

  if(entries[0].intersectionRatio > 0) {
    entries[0].target.style.animation = `content10 1s forwards ease-out`;

  }else{
    entries[0].target.style.animation = 'none';
  }
})

observor.observe(cont10);

/***********Text Animation***************/

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Computer Science Student.", "Web Developer.", "Mobile Developer."];
const typingDelay = 50;
const erasingDelay = 75;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

/*===============================================================
  Various fixes for mobile devices
===============================================================*/

 /* Detect if mobile device */
 (function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);

 if(jQuery.browser.mobile){
     /* Adjust body class */
     $("body").addClass("mobile-fix");
 }