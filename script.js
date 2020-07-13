// DROPDOWN
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// BLINK
// let coop = document.getElementById("coop");
// window.setInterval(function () {
//   if ((coop.style = "text-decoration: underline;")) {
//     coop.style = "text-decoration: none;";
//   }
// }, 2000);
// window.setInterval(function () {
//   if ((coop.style = "text-decoration: none;")) {
//     coop.style = "text-decoration: underline;";
//   }
// }, 4000);
