const show = document.querySelector("#show-menu");
const clickbars = document.querySelector("#clickbars");
const xmark = document.querySelector(".xmark");
const menu = document.querySelector("#menubar");

const showMenu = () => {
  menu.style.display = "block";
};
const hidemenu = () => {
  menu.style.display = "none";
};
show.addEventListener("click", showMenu);
xmark.addEventListener("click", hidemenu);
