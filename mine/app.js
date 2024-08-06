const bar = document.querySelector("#burger")
const menu = document.querySelector("#menu")
let isOpen = false

bar.addEventListener("click", function () {
  if (!isOpen) {
    menu.classList.remove("hidden")

    isOpen = true
  } else if (isOpen) {
    menu.classList.add("hidden")

    isOpen = false
  }
})
