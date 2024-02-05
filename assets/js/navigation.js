// Navigation bar menuitem toggle
function togglePopupMenu(event) {
  const target = event.target.parentNode;
  const attr = target.getAttribute("aria-expanded");
  target.setAttribute("aria-expanded", attr === "true" ? "false" : "true");
  target.querySelector("svg").style.transform =
    attr !== "true" ? "scaleY(-1)" : "scaleY(1)";
}
document
  .querySelectorAll("*[aria-expanded]:not(.burgermeny)")
  .forEach((popup) => {
    popup.addEventListener("click", togglePopupMenu, false);
  });

document
  .querySelector(".burgermeny")
  .addEventListener("click", function (event) {
    const target = event.target;
    const attr = target.getAttribute("aria-expanded");
    target.setAttribute("aria-expanded", attr === "true" ? "false" : "true");

    setTimeout(() => {
      if (target.ariaExpanded === "true") {
        document.querySelector("nav > ul").style.transform = "translateX(0)";
      } else {
        document.querySelector("nav > ul").style.transform = "translateX(120%)";
      }
    }, 150);
  });
