const panels = Array.from(document.querySelectorAll(".panel"));
console.log(panels);

document.addEventListener("click", (e) => {
  if (!e.target.matches(".panel")) return;
  panels.forEach((panel) => {
    panel.classList.remove("active");
    e.target.classList.add("active");
  });
});
