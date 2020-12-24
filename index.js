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


