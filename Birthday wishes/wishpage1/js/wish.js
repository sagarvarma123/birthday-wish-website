// net off on code

function checknet() {
  if (navigator.onLine == true) {
    document.getElementById("container").style.display = "block";
    document.getElementById("net-notice").style.display = "none";
  } else {
    document.getElementById("container").style.display = "none";
    document.getElementById("net-notice").style.display = "block";
  }
}

setInterval(checknet, 10);

// text animation code

const text =
  "Pick a penguin and discover the special message it has waiting just for you. 🐧💌";
let i = 0;

function typetext() {
  if (i < text.length) {
    document.getElementById("typing-txt").innerHTML += text.charAt(i);
    i++;
    setTimeout(typetext, 100);
  }
}

setTimeout(typetext, 200);

//click img open webpage

$(document).ready(function () {
  $("#gift1").click(function () {
    location.href = "../webpage2/wishpage2.html";
  });

  $("#gift2").click(function () {
    location.href = "../wishpage3/wishpage3.html";
  });

  $("#gift3").click(function () {
    location.href = "../wishpage4/wishpage4.html";
  });
});

window.onload = function () {
  document.getElementById("wishpage2-music").play();
};
