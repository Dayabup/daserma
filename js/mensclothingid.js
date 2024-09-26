//variables
const contenedor = document.getElementById("container");
const URL = "https://fakestoreapi.com/products/category/men's%20clothing";
document.addEventListener("DOMContentLoaded", () => {
  const idproducto = localStorage.getItem("idproducto");
  if (idproducto) {
    //llamada a la API
    fetch(URL)
      .then((res) => res.json())
      .then((datosUsuario) => Datosropahombre(datosUsuario));
  } else {
    console.error("error al cargar la id de la API");
  }
});
const idproducto = localStorage.getItem("idproducto");
const Datosropahombre = (ropahombre) => {
  console.log(ropahombre);
  for (let i = 0; i < ropahombre.length; i++)
    if (ropahombre[i].id === parseInt(idproducto)) {
      Verropahombre(ropahombre[i]);
    }
};

const Verropahombre = (ropahombre) => {
  console.log(ropahombre);
  let verropahombre = MostrarInfo(ropahombre);
  console.log(verropahombre);
  contenedor.innerHTML = verropahombre;
};

const MostrarInfo = (usuario) => {
  return `<section class=""><button id="btnVolver" class="btn btn-primary mt-5" onclick="btnVolver()">Volver</button></article>
  <section class="mt-5 mb-5 d-flex justify-content-center flex-column">
   <article class="text-center mb-3">
  <h3 class="">${usuario.title}</h3>
  <div class="mt-5">
    <img src="${usuario.image}" alt="${usuario.id}" class="image-js2 p-4"> 
  </svg>
  </article>
  <article class="">
    <p class="">${usuario.description}</p>
  </article>
  <article class="text-center mt-4"><h4>
    ${usuario.price} Euros</h4>
    <button class="btn btn-dark añadir-carrito" data-id="${usuario.id}" >Añadir al carrito</button>
  </article>
  </section class= "mb-8">`;
};
const btnVolver = () => {
  localStorage.removeItem("idproducto");
  window.location.href = "hombre.html";
};

document.addEventListener("click", (ev) => {
  console.log(ev);
  if (ev.target.classList.contains("añadir-carrito")) {
    const userId = ev.target.getAttribute("data-id");

    localStorage.setItem("usuario", userId);
    window.location.href = "carrito.html"; //redirecciono a la página de carrito.html con el id del usuario en el local storage
  }
});
