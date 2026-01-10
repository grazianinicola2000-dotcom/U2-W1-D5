const navBar = document.getElementById("navBar");
const navBarBtn = document.querySelector("#navBar nav button");

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    navBar.classList.add("scrolledNavBar");
    navBar.classList.remove("unscrolledNavBar");
    navBarBtn.classList.add("scrolledNavBtn");
    navBarBtn.classList.remove("unscrolledNavBtn");
  } else {
    navBar.classList.remove("scrolledNavBar");
    navBar.classList.add("unscrolledNavBar");
    navBarBtn.classList.add("unscrolledNavBtn");
    navBarBtn.classList.remove("scrolledNavBtn");
  }
});
