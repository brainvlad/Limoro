const languageHandler = () => {
  const languageChoise = document.querySelector(".header__language");
  const languageItemList = document.querySelectorAll(".header__language-item");
  languageItemList[Symbol.iterator] = [][Symbol.iterator];
  languageChoise.addEventListener("click", (event) => {
    if (event.target.classList.contains("header__language-item")) {
      for (node of languageItemList) {
        node.classList.remove("header__language-active");
      }
      event.target.classList.add("header__language-active");
    }
  });
};

const helpHandler = () => {
  const helpChoise = document.querySelector(".help__choice");
  const helpItemList = document.querySelectorAll(".help__item");
  if (helpChoise) {
    helpItemList[Symbol.iterator] = [][Symbol.iterator];
    helpChoise.addEventListener("click", (event) => {
      if (event.target.classList.contains("help__item")) {
        for (node of helpItemList) {
          node.classList.remove("active");
        }
        event.target.classList.add("active");
      }
    });
  }
};

const burgerMenu = (selector) => {
  const menu = $(selector);
  const button = menu.find(".burger-menu__button");
  const links = menu.find(".burger-menu__link");
  const overlay = menu.find(".burger-menu__overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-menu-active");
    if (menu.hasClass("burger-menu-active")) {
      $(".burger-menu__overlay").fadeIn(200);
    } else {
      $(".burger-menu__overlay").fadeOut(100);
    }
  }
};

burgerMenu(".burger-menu");
languageHandler();
helpHandler();
