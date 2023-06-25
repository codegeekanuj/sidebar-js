document.querySelector(".anuj").addEventListener("click", () => {
  document.getElementById("slider").classList.add("active");
  document.getElementById("slider").classList.remove("inactive");
});
document.querySelector(".cross").addEventListener("click", () => {
  document.getElementById("slider").classList.remove("active");
  document.getElementById("slider").classList.add("inactive");
});
