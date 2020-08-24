const navList = document.getElementById("items");
const menuBtn = document.getElementById("icon");
const menuIcon2 = document.getElementById("m-icon-2");
const menuIcon1 = document.getElementById("m-icon");
const menuIcon3 = document.getElementById("m-icon-3");


let menuClicked = false;

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("open");
  if (navList) {
    menuIcon2.classList.toggle('clicked');
    menuIcon1.classList.toggle('rotate-1');
    menuIcon3.classList.toggle('rotate-2');
  }
});
