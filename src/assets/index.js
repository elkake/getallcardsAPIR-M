const api = "https://rickandmortyapi.com/api";

const app = document.getElementById("app");

const button = document.querySelector(".button");

const error = document.createElement("div");
error.className = "noload";
error.textContent = "NO SE PUDO CARGAR MAS";

const dataApi = async (api) => {
  try {
    const response = await fetch(api);
    if (response.status == 200) {
      const data = await response.json();
      return data;
    }
  } catch (e) {
    app.innerHTML += error;
  }
};

const getdata = async (api) => {
  let id = Math.floor(Math.random() * 800 + 1);
  const character = await dataApi(`${api}/character/${id}`);
  let node = `
    <div class="card-container">
    <div class="img-container">
      <img
        src=${character.image}
        alt=""
      />
    </div>
    <div class="dates-container">
      <p>ID: ${character.id}</p>
      <p>NOMBRE: ${character.name}</p>
      <p>ESTADO: ${character.status}</p>
      <p>ESPECIE: ${character.species}</p>
    </div>
  </div>
    `;

  app.innerHTML += node;
  registerImage(node);
};

button.onclick = () => {
  getdata(api);
};

const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const accion = () => {
  console.log("hola");
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(accion);
});

const registerImage = (imagen) => {
  //intersectionobserver
  observer.observe(imagen);
};
