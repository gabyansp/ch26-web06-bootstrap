
let url = "https://reqres.in/api/users?delay=3";
let body = JSON.parse(localStorage.getItem("body"));

// Checar si los datos almacenados en localStorage están vigentes
if (body && Date.now() - body.timestamp < 3600) {
  // Si los datos están vigentes se muestran directamente
  document.getElementById("data").innerHTML = body.content;
} else {
  // Si los datos no están vigentes se hace una nueva petición fetch
  fetch(url)
    .then((response) => response.json())
    .then((users) => mostrarInfo(users))
    .catch((error) => console.log(error));
}

const mostrarInfo = (users) => {
  console.log(users.data);
  let body = "";
  for (let user of users.data){
    body += `<tr><td>${user.id}</td><td>${user.first_name}</td><td>${user.last_name}</td><td>${user.email}</td><td><img src="${user.avatar}" ></td>  </tr>`;
  }

  // Agregar una fecha de expiración a los datos
  const timestamp = Date.now();
  const expiration = timestamp + 10000; // tiempo de expiracion
  const data = {
    content: body,
    timestamp: timestamp,
    expiration: expiration,
  };
  localStorage.setItem("body", JSON.stringify(data)); // convertir a json

  document.getElementById("data").innerHTML = body; // datos desde html
}
