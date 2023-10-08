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

function fullScreenToggle() {
  const toggle = document.createElement("span");
  toggle.title = "Toggle full screen";
  toggle.classList.add("toggle");
  toggle.classList.add("full-screen-toggle");
  toggle.addEventListener("click", (event) => {
    if (event.target.parentElement.classList.contains("full-screen")) {
      event.target.parentElement.classList.remove("full-screen");
      document.body.classList.remove("no-scroll");
    } else {
      event.target.parentElement.classList.add("full-screen");
      document.body.classList.add("no-scroll");
    }
  });

  return toggle;
}

function artSibling(art, direction) {
  const method = `${direction}ElementSibling`;
  for (let sibling of [
    art[method]?.children[0],
    art[method],
    art.parentElement[method],
  ]) {
    while (sibling) {
      if (sibling.classList.contains("art")) {
        return sibling;
      }
      sibling = sibling[method];
    }
  }
}

function addSiblingToggle(art, direction) {
  const sibling = artSibling(art, direction);
  if (sibling) {
    const toggle = document.createElement("span");
    toggle.title = direction.charAt(0).toUpperCase() + direction.slice(1);
    toggle.classList.add(`toggle`);
    toggle.classList.add(`${direction}-toggle`);
    toggle.addEventListener("click", () => {
      art.getElementsByClassName("full-screen-toggle")[0].click();
      sibling.getElementsByClassName("full-screen-toggle")[0].click();
    });

    art.appendChild(toggle);
  }
}

const arts = document.getElementsByClassName("art");
for (const art of arts) {
  art.appendChild(fullScreenToggle());
  addSiblingToggle(art, "previous");
  addSiblingToggle(art, "next");
}
