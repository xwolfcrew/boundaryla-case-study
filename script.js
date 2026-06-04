document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.querySelector(".nav-menu");
  const navMenuWrapper = document.querySelector(".nav-menu-wrapper");

  const menuOpen = document.getElementById("menu-container-top");
  const menuOpen2 = document.getElementById("menu-container-bottom");

  const menuClose = document.getElementById("menu-container-top-close");
  const menuClose2 = document.getElementById("menu-container-bottom-close");

  function openMenu() {
    navMenu.classList.add("active");
    navMenuWrapper.classList.add("active");
    document.body.style.overflow= "hidden";
  }

  function closeMenu() {
    navMenu.classList.remove("active");
    navMenuWrapper.classList.remove("active");
    document.body.style.overflow = "";
  }

  menuOpen.addEventListener("click", openMenu);
  menuOpen2.addEventListener("click", openMenu);
  menuClose.addEventListener("click", closeMenu);
  menuClose2.addEventListener("click", closeMenu);

  navMenu.addEventListener("click", (e) => {
    if (!navMenuWrapper.contains(e.target)) {
      closeMenu();
    }
  });
});
