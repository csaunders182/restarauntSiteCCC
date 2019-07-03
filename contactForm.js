const btn = document.getElementById("submit");

btn.addEventListener("click", e => {
  e.preventDefault();
  console.log(e.target);
});
