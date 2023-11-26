import Rails from '@rails/ujs';

const disableEmptyFields = function(event) {
  Array.from(this.querySelectorAll("input, select, textarea"))
    .filter((el) => el.value === "")
    .forEach((el) => el.disabled = true)
};

Rails.delegate(document, ".filter_form", "submit", disableEmptyFields)

const next = function next(el, selector) {
  const nextEl = el.nextElementSibling;
  if (!selector || (nextEl && nextEl.matches(selector))) {
    return nextEl;
  }
  return null;
}

const setSearchType = function(event) {
  const input = next(this, "input")
  if (input) {
    input.name = `q[${this.value}]`
  }
};

Rails.delegate(document, ".filter_form_field.select_and_search select", "change", setSearchType)

const clearFilterForm = function(event) {
  event.preventDefault()

  const regex = /^(q\[|page|utf8|commit)/
  const params = new URLSearchParams(window.location.search)

  Array.from(params.keys())
    .filter(k => k.match(regex))
    .forEach(k => params.delete(k))

  window.location.search = params.toString()
}

Rails.delegate(document, ".clear_filters_btn", "click", clearFilterForm)
