// slider

$(document).ready(function () {
  $(".customers_review").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  });
});

// Navbar
document.getElementById("menu").onclick = function () {
  document.getElementById("aside").className = "aside active";
};

document.getElementById("aside-backdrop").onclick = function () {
  document.getElementById("aside").className = "aside";
};

// Modal

// document.getElementById("sign_in", "sign_up-nav").onclick = function () {
//   document.getElementById("modal").className = "modal active";
// };

// document.getElementById("modal-backdrop", "sign_up-backdrop").onclick = function () {
//   document.getElementById("modal").className = "modal";
// };

// document.getElementById("close").onclick = function () {
//   document.getElementById("modal").className = "modal";
// };

const div = document.getElementById("modal")

function openModalWindow() {
  div.classList.add("active")
}
function closeModalWindow() {
  div.classList.remove("active")
}

const signUp = document.getElementById("sign_up")

function openSignUpWindow() {
  signUp.classList.add("active")
}
function closeSignUpWindow() {
  signUp.classList.remove("active")
}

// Modal Sign UP 


// document.getElementById("sign_up-nav").onclick = function () {
//   document.getElementById("sign_up").className = "modal active";
// };

// document.getElementById("sign_up-backdrop").onclick = function () {
//   document.getElementById("sign_up").className = "modal";
// };

// document.getElementById("close_up").onclick = function () {
//   document.getElementById("sign_up").className = "modal";
// };

