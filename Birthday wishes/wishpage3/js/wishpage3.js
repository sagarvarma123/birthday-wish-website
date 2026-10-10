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

// ballon showing coding

$(document).ready(function () {
  $("#templete-box").slideDown(2000);
  $("#ballon-box1,#ballon-box2").slideDown(3000);
  $("#wish-text").slideDown(3500, function () {
    $("#wishpage3-click-me-btn").fadeIn(8000);
  });

  $("#wishpage3-click-me-btn").click(function () {
    location.href = "../wishpage4/wishpage4.html";
  });
});

window.onload = function () {
  document.getElementById("wishpage3-music").play();
};
