document.onmousemove = function(event) {
  let x = event.x - 50;
  let y = event.y - 50;
  console.log("x = " + x, " y = " + y);
  document.querySelector(".eye_apple_border").style.transform =
    "rotate(" + 57.2958 * arcctg(x, y) + "deg)";

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
