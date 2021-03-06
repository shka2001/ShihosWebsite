const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#26302E";
  } else {
    header.style.backgroundColor = "#77898C";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

let inputName = document.getElementById("input-name");
let inputeEmail = document.getElementById("input-email");
let inputTextarea = document.getElementById("input-textarea");
let inputSubmit = document.getElementById("input-submit");

console.log(inputSubmit.value);

inputSubmit.addEventListener("click", function (e) {
  let is_empty = false;
  if (inputName.value == "") {
    inputName.style.border = "thick solid  #17c3b2";
    is_empty = true;
    console.log("Name is empty");
  } else {
    inputName.style.border = "thin solid black";
  }

  if (inputeEmail.value == "") {
    inputeEmail.style.border = "thick solid  #17c3b2";
    is_empty = true;
    console.log("Email is empty");
  } else {
    inputeEmail.style.border = "thin solid black";
  }

  if (inputTextarea.value == "") {
    inputTextarea.style.border = "thick solid  #17c3b2";
    is_empty = true;
    console.log("Textarea is empty");
  } else {
    inputTextarea.style.borderColor = "thin solid black";
  }

  if (!is_empty) {
    window.location.assign("/sent.html");
  }
});

let HangingCats = document.getElementById("HangingCats");
HangingCats.addEventListener("mousemove", function (event) {
  let bcr = this.getBoundingClientRect();
  let percentage = (event.clientX - bcr.left) / bcr.width;
  let Blackcat = document.getElementById("Blackcat");
  Blackcat.style.width = Math.round(percentage * 100.0) + "%";
});
