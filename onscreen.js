function isElementOnScreen(elem) {
  let elemRect = elem.getBoundingClientRect()
  return elemRect.bottom >= 0 && elemRect.top <= window.innerHeight && elemRect.right >= 0 && elemRect.left <= window.innerWidth
}
