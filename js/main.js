var botonMenu = document.getElementById("navham");
var listaLinks = document.getElementById("navLinks");

botonMenu.addEventListener("click", function () {
  listaLinks.classList.toggle("open");
});



var links = listaLinks.querySelectorAll("a");

links.forEach(function (link) {
  link.addEventListener("click", function () {
    listaLinks.classList.remove("open");
  });
});
