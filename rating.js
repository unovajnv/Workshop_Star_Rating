function starCount(num) {
  var num1 = parseInt(num.value);

  var txtcolor = document.querySelectorAll(".style");
  for (let i = 1; i <= num1; i++) {
    var ids = "star" + i;

    document.getElementById(ids).style.color = "#E2B811";
  }
  for (let v = num1 + 1; v <= 5; v++) {
    var moreIds = "star" + v;
    document.getElementById(moreIds).style.color = "#ddd";
  }
}
function express(rate) {
  if (rate === 1) {
    alert("🤔");
  }
  if (rate === 2) {
    alert("😢");
  }
  if (rate === 3) {
    alert("🙃");
  }
  if (rate === 4) {
    alert("😊");
  }
  if (rate === 5) {
    alert("🤩");
  }
}
function starCount1() {
  var starRating = document.getElementById("star1");
  starCount(starRating);
  express(parseInt(starRating.value));
}
function starCount2() {
  var starRating = document.getElementById("star2");
  starCount(starRating);
  express(parseInt(starRating.value));
}
function starCount3() {
  var starRating = document.getElementById("star3");
  starCount(starRating);
  express(parseInt(starRating.value));
}
function starCount4() {
  var starRating = document.getElementById("star4");
  starCount(starRating);
  express(parseInt(starRating.value));
}
function starCount5() {
  var starRating = document.getElementById("star5");
  starCount(starRating);
  express(parseInt(starRating.value));
}
