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

// SLIDER
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const images = document.getElementsByClassName("images");

let currentImgIndex = 0;
let previousImgIndex = 0;

next.addEventListener("click", () => {
  previousImgIndex = currentImgIndex;
  currentImgIndex++;
  if (currentImgIndex >= images.length) {
    currentImgIndex = 0;
  }
  images[previousImgIndex].style.display = "none";
  images[currentImgIndex].style.display = "block";
});

prev.addEventListener("click", () => {
  previousImgIndex = currentImgIndex;
  currentImgIndex--;
  if (currentImgIndex < 0) {
    currentImgIndex = images.length - 1;
  }
  images[previousImgIndex].style.display = "none";
  images[currentImgIndex].style.display = "block";
});
