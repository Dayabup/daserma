const container = document.getElementById("container");
const URL = "https://fakestoreapi.com/products";

fetch(URL)
  .then((res) => res.json())
  .then((datosUsuario) => PintarDatos(datosUsuario));
//a esta funcion DtosUser le he pasado los datos de datosUsusario
//crear usuario
const crearusuario = (users) => {
  return users.map((user) => CrearCard(user)).join(" ");
};

const CrearCard = (user) => {
  return `<section class="container container-fluide flex-wrap gap-3 mt-5 d-flex justify-content-center">
   <article class="m-3 text-center">
  <h4 class="text-center">${user.title}</h4>
  <img src="${user.image}" alt="${user.title}" class="image-js p-4 "> 
  <div class="text-center"><h4>
    ${user.price} Euros</h4>
  </div>
  </article>
  </section>`;
};

const DatosUser = (datos) => {
  PintarDatos(datos);
};

/////////////////////////////////////////////

const btnVolver = () => {
  localStorage.removeItem("idproducto");
  window.location.href = "index.html";
};

///////////////////////////////////////////////

const cargarCarrito = () => {
  for (let i = 0; i < 10; i++) {
    container.classList.add("change-color");
    window.localStorage.setItem("Oscuro", true);
  }
};

document.addEventListener("click", cargarCarrito);

let oscuro = Boolean(window.localStorage.getItem("Oscuro"));

const comprobarOscuro = (paramOscuro) => {
  if (paramOscuro) {
    body.classList.add("change-color");
    btnClaro.textContent = "Oscuro";
  } else {
    body.classList.remove("change-color");
    btnClaro.textContent = "Claro";
  }
};
comprobarOscuro(oscuro);
