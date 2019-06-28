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
