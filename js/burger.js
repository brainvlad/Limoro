function burgerMenu(selector) {
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
      // $("body").css("overflow", "hidden");
      // $('body').css('margin-right', '16px')
    } else {
      $(".burger-menu__overlay").fadeOut(100);
      // $("body").css("overflow", "initial");
      // $('body').css('margin-right', 'initial')
    }
  }
}

burgerMenu(".burger-menu");
