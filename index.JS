const checkbox = document.getElementById("toggleCheckbox");
// CHECHBOX PER ANDARE AVANTI
const button = document.getElementById("myButton");
checkbox.addEventListener("click", function () {
  // AGGIUNGE CLASSI AL PULSANTE PER ANDARE AVANTI
  if (checkbox.checked) {
    button.classList.add("text", "sparkle", "active");
    document.getElementById("myButton").addEventListener("click", function () {
      let link = document.getElementById("myLink");
      link.href = "./benchmark.html";
      link.click();
    });
  } else {
    button.classList.remove("text", "sparkle", "active");
  }
});
