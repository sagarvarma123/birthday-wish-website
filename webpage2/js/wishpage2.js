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

// text animation set

const text =
  "Happy Birthday, Dear Vincii! 🎂❤️ You are not just my best friend, but one of the most special people in my life. 🫶 May your life always be filled with happiness, smiles, and beautiful moments. Keep shining and keep smiling always! ✨💖";
let i = 0;

function animatetext() {
  if (i < text.length) {
    document.getElementById("wish-txt-animation").innerHTML += text.charAt(i);
    i++;
    setInterval(animatetext, 100);
  }
}

setTimeout(animatetext, 3000);

// jquery

$(document).ready(function () {
  $("#giff2").slideDown(3000, function () {
    $("#click-me-btn").fadeIn(2000);
  });

  $("#click-me-btn").click(function () {
    location.href = "../wishpage3/wishpage3.html";
  });
});
