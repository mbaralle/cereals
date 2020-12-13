let isMenuOpened = false;
const menuButton = this.document.getElementById("menu-button");
const mobileMenu = this.document.getElementById("menu");

function menuClick() {
  if (isMenuOpened) {
    menuButton.classList.remove("opened");
    mobileMenu.classList.remove("opened");
  } else {
    menuButton.classList.add("opened");
    mobileMenu.classList.add("opened");
  }
  isMenuOpened = !isMenuOpened;
}
