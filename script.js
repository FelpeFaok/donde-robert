// activar menu
const toggle = document.querySelector("#toggle");
const body = document.querySelector("body");

toggle.addEventListener("click", () => {
  body.classList.toggle("menu-active");
});

// // boton texto cambio

// const cambioTextoBtn = document.querySelector("#cambioTexto");
// const toggleText = () => {
//   cambioTextoBtn.addEventListener("click", () => {
//     const parrafo = document.querySelector("#parrafo");
//     if (parrafo.innerHTML == "cerramos") {
//       parrafo.innerHTML = "hola soy el chef Robert";
//     } else {
//       parrafo.innerHTML = "cerramos";
//     }
//   });
// };

// toggleText();

// // cambio color texto

// const cambioColorBtn = document.querySelector("#cambioTexto");
// const toggleColor = () => {
//   cambioColorBtn.addEventListener("click", () => {
//     const parrafo = document.querySelector("#parrafo");
//     parrafo.style.color = "black"
//     if (parrafo.style.color == "black") {
//       parrafo.style.color = "white";
//     } else if (parrafo.style.color === "white") {
//       parrafo.style.color = "red";
//     }
//   });
// };

// toggleColor();
