# CREATING A SERVER WITH EXPRESS

```js
const express = require("express");
const axios = require("axios");

const app = express();

app.listen("3000");
```

## middleware

```js
app.use(express.json());
```

## API no Back-End

### GET

```js
app.route("/").get((req, res) => res.send("Hello, World"));
app.route("/about").get((req, res) => res.send("Sobre o projeto"));
```

### POST

```js
app.route("/").post((req, res) => console.log(req.body));
app.route("/").post((req, res) => res.send(req.body));
```

### PUT

```js
let author = "Mateus";

app.route("/").get((req, res) => res.send(author));

app.route("/").put((req, res) => {
  author = req.body.author;
  res.send(author);
});
```

### DELETE

```js
app.route("/:identificador").delete((req, res) => {
  res.send(req.params.identificador);
});
```

## Parâmetros nas Requisições

```js
app.route("/").get((req, res) => res.send(req.query.name));

app.route("/").post((req, res) => res.send(req.body));

app.route("/:parametro").get((req, res) => res.send(req.params.parametro));
```

### BODY Params

o BODY pode ser recebido pelo POST, PUT e PATCH

```js
app.route("/").post((req, res) => {
  const { name, age } = req.body;
  res.send(`Meu nome é ${name} e eu tenhos ${age} anos.`);
});
```

### ROUTE PARAMS

```js
app.route("/").get((req, res) => res.send("Hello, World!"));
app.route("/:variavel").get((req, res) => res.send(req.params.variavel));
app.route("/identidade/:nome").get((req, res) => res.send(req.params.nome));
```

### QUERY PARAMS

```js
app.route("/").get((req, res) => res.send(req.query));

app.route("/about/user").get((req, res) => res.send(req.query.nome));
```

## API GitHub

```js
app.route("/").get((req, res) => {
  axios
    .get("https://api.github.com/users/mateussdev")
    .then(result => res.send(result.data)) // pega todas as informações públicas de um perfil no github
    // .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.log(error));
});
```

## API no Front-End com Fetch

```js
const url = "http://localhost:5500/api";

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => (renderApiResult.textContent = JSON.stringify(data)))
    .catch(error => console.error(error));
}

getUsers();
```

### GET com parametros

```js
const url = "http://localhost:5500/api";

function getUser() {
  fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error));
}

getUser();
```

### POST

```js
function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      "Content-type": "application/json;charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => (alertApi.textContent = data))
    .catch(error => console.error(error));
}

const newUser = {
  name: "Mateus Silva",
  avatar: "https://github.com/mateussdev.png",
  city: "Ceará"
};

addUser(newUser);
```

### PUT

```js
function updateUser(updatedUser) {
  fetch(`${url}/1`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => (alertApi.textContent = data))
    .catch(error => console.error(error));
}

const updatedUser = {
  name: "Mateus Silva",
  avatar: "https://github.com/mateussdev.png",
  city: "Tabuleiro do Norte"
};

updateUser(updatedUser);
```

### DELETE

```js
function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => (alertApi.textContent = data))
    .catch(error => console.error(error));
}

deleteUser(2);
```
