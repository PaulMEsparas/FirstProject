"use strict";
const ul = document.querySelector(".images");
const li = document.querySelectorAll(".gem");
let getName = document.querySelector("#getname");
let getDob = document.querySelector("#indate");
let btn = document.querySelector("#randomise");
let resultName = document.querySelector("#name");
let resultDob = document.querySelector("#dobframe");
let resultImg = document.querySelector("#imgframe");
const fr = document.querySelectorAll(".frame");
const frLi = document.querySelector(".imagesFrame");
let resultFrame = document.querySelector("#frameImg");
const ft = document.querySelectorAll(".font");
const fnt = document.querySelector(".fontSide");
let resultFontName = document.querySelector("#name");

li.forEach((vl) => {
  vl.addEventListener("click", function () {
    ul.querySelector(".active").classList.remove("active");
    vl.classList.add("active");
  });
});

fr.forEach((vl) => {
  vl.addEventListener("click", function () {
    frLi.querySelector(".select").classList.remove("select");
    vl.classList.add("select");
  });
});

ft.forEach((vl) => {
  vl.addEventListener("click", function () {
    fnt.querySelector(".choose").classList.remove("choose");
    vl.classList.add("choose");
  });
});

btn.addEventListener("click", () => {
  resultName.innerText = getname.value;
  resultDob.innerText = getDob.value;
  const img = ul.querySelector(".active").innerHTML;
  resultImg.innerHTML = img;

  const frame = frLi.querySelector(".select").innerHTML;
  resultFrame.innerHTML = frame;

  const font = fnt.querySelector(".choose").innerHTML;

  if (font === "Font Style 1") {
    resultFontName.style.fontFamily = "Font1";
    resultFontName.style.fontSize = "9vw";
    resultFontName.style.paddingTop = "6%";
  } else {
    resultFontName.style.fontFamily = "Font2";
    resultFontName.style.fontSize = "6vw";
    resultFontName.style.paddingTop = "2%";
  }
});
