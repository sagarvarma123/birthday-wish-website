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

// button coding

$(document).ready(function () {
  // no button coding
  $("#no-btn").click(function () {
    $("#yes").css("display", "none");
    $("#no").css("display", "block");
  });

  // yes btn code

  $("#yes-btn").click(function () {
    location.href = "../wishpage1/wishpage1.html";
  });
});
