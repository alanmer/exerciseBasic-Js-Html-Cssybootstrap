/* Este código agrega un detector de eventos al objeto de ventana que escucha el evento
"desplazamiento". Cuando el usuario se desplaza, el código comprueba la posición de desplazamiento
actual y, si es superior a 300 píxeles, muestra un botón de "desplazamiento hacia arriba". Cuando el
usuario hace clic en el botón "desplazarse hacia arriba", desplaza la ventana hacia la parte
superior de la página con una animación suave. */

window.addEventListener("scroll", function () {
  const scrollPosition =
    window.pageYOffset || document.documentElement.scrollTop;
  const scrollToTopButton = document.querySelector(".scroll-to-top");

  if (scrollPosition > 300) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

document
  .querySelector(".scroll-to-top")
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
