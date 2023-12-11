import Rails from '@rails/ujs';

const next = function next(el, selector) {
  const nextEl = el.nextElementSibling;
  if (!selector || (nextEl && nextEl.matches(selector))) {
    return nextEl;
  }
  return null;
}

const toggleMenu = function(event) {
  const parent = this.parentNode
  const menu = next(this, "[data-menu-list]")
  if (!("open" in parent.dataset)) {
    parent.dataset.open = ""
    menu.classList.remove("hidden")
    this.querySelector("[data-menu-icon]").classList.add("rotate-90")
  } else {
    delete parent.dataset.open
    menu.classList.add("hidden")
    this.querySelector("[data-menu-icon]").classList.remove("rotate-90")
  }
}

Rails.delegate(document, "#main-menu [data-menu-button]", "click", toggleMenu)
