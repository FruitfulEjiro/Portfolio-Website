"use strict";

const images = [
    "./assets/img4.png",
  "./assets/img2.png",
  "./assets/img3.png",
  "./assets/img6.png",
];

let current = 0;

const track = document.getElementById("track");
const dots = document.getElementById("dots");
const main = document.getElementById("main");
const thumbs = document.getElementById("thumbs");

images.forEach((src, i) => {
  const slide = document.createElement("img");
  slide.src = src;
  slide.alt = "slide-" + i;
  track.appendChild(slide);

  const dot = document.createElement("button");
  dot.className = "dot";
  dot.setAttribute("aria-label", "Go to slide " + (i + 1));
  dot.addEventListener("click", () => setCurrent(i));
  dots.appendChild(dot);

  const thumb = document.createElement("img");
  thumb.src = src;
  thumb.alt = "thumbnail-" + i;
  thumb.addEventListener("click", () => setCurrent(i));
  thumbs.appendChild(thumb);
});

function render() {
  track.style.transform = "translateX(-" + current * 100 + "%)";
  main.src = images[current];

  dots
    .querySelectorAll(".dot")
    .forEach((d, i) => d.classList.toggle("active", i === current));
  thumbs
    .querySelectorAll("img")
    .forEach((t, i) => t.classList.toggle("active", i === current));
}

function setCurrent(i) {
  current = i;
  render();
}

function next() {
  setCurrent((current + 1) % images.length);
}

function prev() {
  setCurrent((current - 1 + images.length) % images.length);
}

document.getElementById("next").addEventListener("click", next);
document.getElementById("prev").addEventListener("click", prev);

// hamburger menu

const menuIcon = document.querySelector(".menuIcon");
const closeIcon = document.querySelector(".closeIcon");

menuIcon.addEventListener("click", (event) => {
  const backdrop = document.querySelector(".backdrop");
  const ul = document.querySelector("nav ul");
  backdrop.classList.toggle("open");
  ul.style.transform = "translateX(0%)";
});

closeIcon.addEventListener("click", () => {
  const backdrop = document.querySelector(".backdrop");
  const ul = document.querySelector("nav ul");
  backdrop.classList.remove("open");
  ul.style.transform = "translateX(100%)";
});

document.querySelectorAll("nav ul li").forEach((li) => {
  li.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
      const backdrop = document.querySelector(".backdrop");
      const ul = document.querySelector("nav ul");
      backdrop.classList.remove("open");
      ul.style.transform = "translateX(100%)";
    }
  });
});

render();
