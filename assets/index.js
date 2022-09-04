const api = "https://rickandmortyapi.com/api";

const app = document.getElementById("app");

const button = document.querySelector(".button");

// const observer = new IntersectionObserver(carga);

const error = document.createElement("div");
error.className = "noload";
error.textContent = "NO SE PUDO CARGAR MAS";

const armado = async (img, id, name, status, species) => {
  let card = document.createElement("div");
  card.className = "card-container";
  let node = `
    <div class="img-container">
      <img
        src=${img}
        alt=""
      />
    </div>
    <div class="dates-container">
      <p>ID: ${id}</p>
      <p>NOMBRE: ${name}</p>
      <p>ESTADO: ${status}</p>
      <p>ESPECIE: ${species}</p>
    </div>
  
    `;
  card.innerHTML = node;
  return card;
};

const dataApi = async () => {
  const response = await fetch(
    `${api}/character/${Math.floor(Math.random() * 800 + 1)}`
  );

  const data = await response.json();
  const newPublication = await armado(
    data.image,
    data.id,
    data.name,
    data.status,
    data.species
  );
  // observer.observe(armado);

  return newPublication;
};

button.onclick = async () => {
  const datos = await dataApi();
  app.prepend(datos);
};
