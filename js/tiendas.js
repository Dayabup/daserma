/*Geolocalizador de tiendas*/
document.getElementById("search").addEventListener("click", searchAddress);

const addresses = [
  {
    address: "Av. de Palmas Altas, 1, 41012 Sevilla",
    coordinates: { lat: 37.34236, lng: -5.98736 },
    image:
      "https://lh5.googleusercontent.com/p/AF1QipPAB5jooO2pUaoU-hbuu4N3-rlf0wgWFMl71m9G=w408-h240-k-no-pi-0-ya294.24304-ro0-fo100", // Reemplaza con la URL de tu imagen
  },
  {
    address:
      "Av. del Professor López Piñero, 16, Quatre Carreres, 46013 València, Valencia",
    coordinates: { lat: 39.4569, lng: -0.35458 },
    image:
      "https://lh5.googleusercontent.com/p/AF1QipP0B56XOBBvJVSWCJ54L3FkHaIzrbmSH5t53VNK=w408-h272-k-no", // Reemplaza con la URL de tu imagen
  },
  {
    address:
      "Avinguda de la Granvia de l’Hospitalet, 75, 08908 L'Hospitalet de Llobregat, Barcelona",
    coordinates: { lat: 41.36252, lng: 2.12952 },
    image:
      "https://lh5.googleusercontent.com/p/AF1QipOFkaEdwTHoqCZaG7B7CI8eWBU-OwpnrIrm8O4e=w426-h240-k-no", // Reemplaza con la URL de tu imagen
  },
  {
    address: "San Juan de Dios 7, Valladolid",
    coordinates: { lat: 41.654672, lng: -4.724593 },
    image:
      "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=7e5OuSxEYd2_l_KTjsxN_A&cb_client=search.gws-prod.gps&w=408&h=240&yaw=322.93445&pitch=0&thumbfov=100", // Reemplaza con la URL de tu imagen
  },
  // Agrega más direcciones y coordenadas aquí
];

function searchAddress() {
  const query = document.getElementById("address").value.toLowerCase();
  const results = addresses.filter((item) =>
    item.address.toLowerCase().includes(query)
  );

  displayResults(results);
}

function displayResults(results) {
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  if (results.length === 0) {
    resultsContainer.innerHTML =
      "<div class=`mt-4`>No tenemos tiendas aún en esta ciudad :(</div>";
    return;
  }

  results.forEach((result) => {
    const resultItem = document.createElement("div");
    resultItem.className = "result-item";

    const img = document.createElement("img");
    img.src = result.image;
    img.alt = result.address;

    const text = document.createElement("div");
    text.innerHTML = `<div class="mt-4"><strong>${result.address}</strong></p><p>Lat: ${result.coordinates.lat}, Lng: ${result.coordinates.lng}</div>`;

    resultItem.appendChild(img);
    resultItem.appendChild(text);

    resultsContainer.appendChild(resultItem);
  });
}
