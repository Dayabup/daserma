fetch("https://fakestoreapi.com/products/category/jewelery");

const contenedor = document.getElementById("container");
const URL = "https://fakestoreapi.com/products/category/jewelery";

//!Then = promesa de algo que sucede posteriormente, pidiendo al programa que siga funcionando en paralelo

fetch(URL)
  .then((res) => res.json())
  //vuelco los datos recibidos en la funcion siguiente
  .then((datosUsuario) => PintarDatos(datosUsuario));
//a esta funcion DtosUser le he pasado los datos de datosUsusario
//crear usuario
const crearusuario = (users) => {
  return users.map((user) => CrearCard(user)).join(" ");
};
//join permite unir los elemento de un array
//crar card para cada usuario

const CrearCard = (user) => {
  /*return `<div class="card">
        <div class="card-body">
          <h2 class="card-subtitle">${user.title}</h2>
          <h3 class="card-title">${user.price}</h3>
          <h5 class="card-subtitle mb-2 text-muted">${user.description}</h5>
          <button class="btn btn-danger ver-completo" data-id="${user.id}" >Ver Info</button>
        </div>
      </div><br>`;
};*/
  return `<section class="mt-5 d-flex justify-content-center">
   <article class="mb-3 text-center">
  <h4 class="text-center">${user.title}</h4>
  <img src="${user.image}" alt="${user.title}" class="image-js p-4"> 
  <div class="text-justify">
    <p class="">${user.description}</p>
  </div>
  <div class="text-center"><h4>
    ${user.price} Euros</h4>
  </div>
  <div class="mb-4 d-flex gap-3 justify-content-center align-items-center">
    <button class="btn btn-danger ver-completo " data-id="${user.id}" >Ver producto</button>
    <button class="btn btn-dark añadir-carrito" data-id="${user.id}" >Añadir al carrito</button>
  </div>
  </article>
  </section>`;
};

document.addEventListener("click", (ev) => {
  if (ev.target.classList.contains("ver-completo")) {
    const userId = ev.target.getAttribute("data-id");
    //con getatribute recuperamos el valor del atributo
    localStorage.setItem("idproducto", userId);
    window.location.href = "joyeriaid.html";
  }
});
//muestra la información en la pantalla
const PintarDatos = (usuarios) => {
  let usuario = crearusuario(usuarios);
  console.log(usuario);
  contenedor.innerHTML = usuario;
};

//! Creo una funcion para manejar los datos

const DatosUser = (datos) => {
  PintarDatos(datos);
};

const volver = document.getElementById("volver");
volver.innerHTML = `<button id="btnVolver" class="btn btn-primary mt-8" onclick="btnVolver()">Volver</button>`;

const btnVolver = () => {
  localStorage.removeItem("idproducto");
  window.location.href = "index.html";
};

document.addEventListener("click", (ev) => {
  console.log(ev);
  if (ev.target.classList.contains("añadir-carrito")) {
    const userId = ev.target.getAttribute("data-id");

    localStorage.setItem("usuario", userId);
    window.location.href = "carrito.html"; //redirecciono a la página de carrito.html con el id del usuario en el local storage
  }
});
