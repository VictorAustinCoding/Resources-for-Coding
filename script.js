const toggleButton = document.getElementById("toggleButton");
const linksList = document.querySelector(".linksStyle");

toggleButton.addEventListener("click", function () {
    linksList.classList.toggle("hidden");
});

const toggleButton2 = document.getElementById("toggleButton2");
const linksList2 = document.querySelector(".linksStyle2");

toggleButton2.addEventListener("click", function () {
    linksList2.classList.toggle("hidden");
});