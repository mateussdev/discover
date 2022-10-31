const url = "http://localhost:5500/api";

function getUsers() {
  fetch(url)
    .then(response => response.json())
    .then(data => (renderApiResult.textContent = JSON.stringify(data)))
    .catch(error => console.error(error));
}

function getUser(id) {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error));
}

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

function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
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

const newUser = {
  name: "Mateus Silva",
  avatar: "https://github.com/mateussdev.png",
  city: "Ceará"
};

addUser(newUser);

const updatedUser = {
  name: "Mateus Silva",
  avatar: "https://github.com/mateussdev.png",
  city: "Tabuleiro do Norte"
};

updateUser(updatedUser, 1);

deleteUser(2);

getUsers();
getUser(1);
