const checkbox = document.getElementById("toggleCheckbox");
const button = document.getElementById("myButton");

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    button.classList.add("text", "sparkle", "active");
    document.getElementById("myButton").addEventListener("click", function() {
      let link = document.getElementById("myLink");
      link.href = "./benchmark.html"; 
      link.click(); 
    }); 
    button.style = "cursor: pointer;"
  } else {
    button.classList.remove("text", "sparkle", "active");
    document.getElementById("myButton").addEventListener("click", function() {
      let link = document.getElementById("myLink");
      link.href = "#"; 
      link.click(); 
    });
    button.style = "cursor: auto;"
    
  }
});


