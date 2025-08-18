"use strict";

let optionEl = document.querySelector("#option");
let txt = document.querySelector("#Tag");
let styleEl = document.querySelector("#style");
let attr = document.querySelector("#attr");
let classEl = document.querySelector("#class");
let btn = document.querySelector("button");
let divEl = [...document.querySelectorAll(".item")];
let theme = document.querySelector(":root");
let mode = document.querySelector(".mode");
const tags = [
  "a",
  "abbr",
  "acronym",
  "address",
  "applet",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "basefont",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noframes",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
];
tags.map((e) => {
  optionEl.innerHTML += `<option value=${e}>${e}</option>`;
});

document.addEventListener("DOMContentLoaded", function () {
  const modeSwitch = document.querySelector(".mode-switch");
  const darkModeStored = localStorage.getItem("darkMode");

  if (darkModeStored === "true") {
    document.documentElement.classList.add("dark");
    modeSwitch.classList.add("active");
  }

  modeSwitch.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    modeSwitch.classList.toggle("active");
    localStorage.setItem("darkMode", document.documentElement.classList.contains("dark"));
  });
});
// console.log(hi)
let Tagproperty = [];
let is = true;
divEl.map((itm) => {
  itm.addEventListener("click", () => {
    let styles = styleEl.value
      .split(",")
      .map((e) => e.trim())
      .map((e) => e.split("="));
    let attu = attr.value.split("=");
    console.log(attu);
    let create = document.createElement(`${optionEl.value}`);
    create.textContent = txt.value;
    create.classList.add(classEl.value);
    create.setAttribute(attu[0], attu[1]);
    styles.forEach((style) => {
      if (style.length === 2) {
        create.style[style[0]] = style[1];
      }
    });
    create.addEventListener("click", (e) => {
      e.target.remove();
    });
    Tagproperty.push(create.outerHTML);
    if (document.querySelector("#append").checked == true) {
      itm.append(create);
    } else if (document.querySelector("#prepend").checked == true) {
      itm.prepend(create);
    } else if (document.querySelector("#before").checked == true) {
      itm.before(create);
    } else if (document.querySelector("#after").checked == true) {
      itm.after(create);
    }
    console.log(create);
    localStorage.setItem("Tag-info", JSON.stringify(Tagproperty));
  });
});
// console.log(hi)
