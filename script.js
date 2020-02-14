document.onmousemove = function(event) {
  let x = event.x - 50;
  let y = event.y - 50;
  console.log("x = " + x, " y = " + y);
  document.querySelector(".eye_apple_border_left").style.transform =
    "rotate(" + 57.2958 * arcctg(x, y) + "deg)";

  document.querySelector(".eye_apple_border_right").style.transform =
    "rotate(" + 57.2958 * arcctg(x - 116, y) + "deg)";

  function arcctg(x, y) {
    if (y > 0) {
      return Math.PI / 2 - Math.atan(x / y);
    } else if (x < 0) {
      return Math.PI + Math.atan(y / x);
    } else {
      return (3 * Math.PI) / 2 + Math.abs(Math.atan(x / y));
    }
  }
};
