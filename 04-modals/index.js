/* Este código está creando una funcionalidad modal para una página web. Selecciona el elemento botón
con la clase "button-modal" y el elemento modal con la clase "modal" utilizando el método
`document.querySelector()` y los asigna a las constantes `openModal` y `modal` respectivamente.
También selecciona el elemento del botón de cierre con la clase "modal-cerrar" y lo asigna a la
constante `closeModal`. */
const openModal = document.querySelector(".buton-modal");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-cerrar");
openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal-abrir");
});
closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal-abrir");
});

/* Este código está creando una funcionalidad modal para una página web. Selecciona el elemento botón
con la clase "button-modal2" y el elemento modal con la clase "modal2" usando el método
`document.querySelector()` y los asigna a las constantes `openModal2` y `modal2` respectivamente.
También selecciona el elemento del botón de cierre con la clase "modal-cerrar2" y lo asigna a la
constante `closeModal2`. Luego agrega detectores de eventos a los elementos `openModal2` y
`closeModal2` para que cuando se haga clic en el botón `openModal2`, se muestre el elemento `modal2`
agregando la clase "modal-abrir2", y cuando se presione el botón `closeModal2` se hace clic, el
elemento `modal2` se oculta eliminando la clase "modal-abrir2". */
const openModal2 = document.querySelector(".buton-modal2");
const modal2 = document.querySelector(".modal2");
const closeModal2 = document.querySelector(".modal-cerrar2");
openModal2.addEventListener("click", (e) => {
  e.preventDefault();
  modal2.classList.add("modal-abrir2");
});
closeModal2.addEventListener("click", (e) => {
  e.preventDefault();
  modal2.classList.remove("modal-abrir2");
});

/* Este código está creando una funcionalidad modal para una página web. Selecciona el elemento iframe
con el ID "myIframe" y lo asigna a la constante `iframe`. También selecciona el elemento botón con
la clase "button-modal3" y el elemento modal con la clase "modal3" utilizando el método
`document.querySelector()` y los asigna a las constantes `openModal3` y `modal3` respectivamente.
Además, selecciona el elemento del botón cerrar con la clase "modal-cerrar3" y lo asigna a la
constante `closeModal3`. Luego, agrega detectores de eventos a `openModal3` y `closeModal3` para que
cuando se haga clic en `openModal3`, se muestre el elemento `modal3` agregando la clase
"modal-abrir3", y cuando se haga clic en `closeModal3`, el ` El elemento modal3` se oculta
eliminando la clase "modal-abrir3" y configurando el atributo `src` de `iframe` en una cadena vacía. */
const iframe = document.getElementById("myIframe");
const openModal3 = document.querySelector(".buton-modal3");
const modal3 = document.querySelector(".modal3");
const closeModal3 = document.querySelector(".modal-cerrar3");
openModal3.addEventListener("click", (e) => {
  e.preventDefault();
  modal3.classList.add("modal-abrir3");
});
closeModal3.addEventListener("click", (e) => {
  e.preventDefault();
  modal3.classList.remove("modal-abrir3");
  iframe.src = "";
});