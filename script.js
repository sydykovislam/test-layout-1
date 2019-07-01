let headerSwitch = document.querySelectorAll(".hd-sw");
let headerMain = document.querySelector("header");
let header1 = document.querySelector(".header-1");
let header2 = document.querySelector(".header-2");
let header3 = document.querySelector(".header-3");
let headers = [header1, header2, header3];

let switchers = [];
headerSwitch.forEach(el => {
  switchers.push(el);
});

console.log(switchers);
switchers.forEach(function(el) {
  el.addEventListener("click", function(event) {
    headerSwitch.forEach(sw => {
      sw.className = "hd-sw";
    });

    headers.forEach(header => {
      if (header.className == event.target.id) {
        header.style.display = "block";

        let hdIndex = headers.indexOf(header) + 1;
        let hdBg = "header header-bg-" + hdIndex;
        headerMain.className = `${hdBg}`;

        let swIndex = switchers.indexOf(el);
        console.log(swIndex);
        console.log(switchers[swIndex]);
        switchers[swIndex].className = "hd-sw-active";
      } else {
        header.style.display = "none";
      }
    });
  });
});

const nav = document.querySelector(".sm-navul");
const navButton = document.querySelector(".menu-icon");
const navbar1 = document.querySelector(".bar-1");
const navbar2 = document.querySelector(".bar-2");
const navbar3 = document.querySelector(".bar-3");

let navOpened = false;

let openMenu = () => {
  if (!navOpened) {
    nav.className = "sm-navul sm-navul-opened";
    navbar1.className = "bar bar-open-1";
    navbar2.className = "bar bar-open-2";
    navbar3.className = "bar bar-open-3";
    navOpened = true;
  } else {
    nav.className = "sm-navul";
    navbar1.className = "bar bar-close-1";
    navbar2.className = "bar bar-close-2";
    navbar3.className = "bar bar-close-3";
    navOpened = false;
  }
};

navButton.addEventListener("click", openMenu);
