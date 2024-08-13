const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#ffb56b",
  "#fdaf69",
  "#f89d63",
  "#f59761",
  "#ef865e",
  "#ec805d",
  "#e36e5c",
  "#df685c",
  "#d5585c",
  "#d1525c",
  "#c5415d",
  "#c03b5d",
  "#b22c5e",
  "#ac265e",
  "#9c155f",
  "#950f5f",
  "#830060",
  "#7c0060",
  "#680060",
  "#60005f",
  "#48005f",
  "#3d005e",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

// Add scroll shadow to navbar
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 0) {
    nav.classList.add("scroll-shadow");
  } else {
    nav.classList.remove("scroll-shadow");
  }
});

// Get the pop-up element
var popup = document.getElementById("popup");

// Get the button that opens the pop-up
var buttons = document.querySelectorAll(".one1");

// Get the <span> element that closes the pop-up
var closeBtn = document.querySelector(".close-btn");

// When the user clicks on a button, open the pop-up with animation
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    popup.style.display = "block";
    setTimeout(function () {
      popup.classList.add("open"); // Trigger the animation
    }, 10); // Slight delay to ensure display block is applied
  });
});

// When the user clicks on <span> (x), close the pop-up
closeBtn.addEventListener("click", function () {
  popup.classList.remove("open");
  setTimeout(function () {
    popup.style.display = "none";
  }, 500); // Wait for the animation to finish before hiding the pop-up
});

// When the user clicks anywhere outside of the pop-up, close it
window.addEventListener("click", function (event) {
  if (event.target == popup) {
    popup.classList.remove("open");
    setTimeout(function () {
      popup.style.display = "none";
    }, 500);
  }
});

document.addEventListener("scroll", function () {
  const upperScroll = document.querySelector(".upper-scroll");
  const lowerScroll = document.querySelector(".lower-scroll");

  const scrollY = window.scrollY;

  upperScroll.scrollLeft = scrollY * 2; // Adjust the multiplier as needed
  lowerScroll.scrollLeft = scrollY * 2; // Adjust the multiplier as needed
});

$(document).ready(function () {
  $(".btn").click(function () {
    $(".items").toggleClass("show");
    $("ul li").toggleClass("hide");
  });
});


;

