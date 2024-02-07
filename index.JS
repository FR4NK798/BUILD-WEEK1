const checkbox = document.getElementById("toggleCheckbox");
const button = document.getElementById("myButton");
checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    button.classList.add("text", "sparkle", "active");
  } else {
    button.classList.remove("text", "sparkle", "active");
  }
});
