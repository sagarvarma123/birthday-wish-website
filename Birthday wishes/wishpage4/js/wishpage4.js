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

// page show

$(document).ready(function () {
  $("#container").slideDown(2000, function () {
    $("#i-love-u-box").fadeIn(3000, function () {
      $("#butterflyy2,#butterflyy3,#butterflyy4,#butterflyy22").fadeIn(2000);
    });
  });

  $("#vincii-wish-txt-box").slideDown(5000, function () {
    $("#wishpage4-click-me-btn").fadeIn(6000);
  });

  $("#wishpage4-click-me-btn").click(function () {
    location.href = "../wishpage1/wishpage1.html";
  });
});

window.onload = function () {
  document.getElementById("wishpage4-music").play();
};
