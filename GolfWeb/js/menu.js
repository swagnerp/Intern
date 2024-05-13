var menu = document.querySelector("nav");

document.getElementById("hamburger").addEventListener("click", () => {
  menu.style.display = "flex";
  document.body.style.overflow = "hidden";
});

document.getElementById("close").addEventListener("click", () => {
  menu.style.display = "none";
  document.body.style.overflow = "auto";
});
