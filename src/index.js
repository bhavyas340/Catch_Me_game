import "./styles.css";
var b = document.querySelector("#app");
// b.textContent='helo';
b.addEventListener("click", function change() {
  let i = Math.floor(Math.random() * 500) + 1;
  let j = Math.floor(Math.random() * 500) + 1;
  // console.log("here", i, j, b.style.left, b.style.top);
  b.style.left = i + "px";
  b.style.top = j + "px";
});
