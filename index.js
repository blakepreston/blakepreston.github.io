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
