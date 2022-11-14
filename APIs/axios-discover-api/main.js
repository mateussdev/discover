const url = "http://localhost:5500/api";

function getUsers() {
  axios
    .get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data);
    })
    .catch(error => console.error(error));
}

function addNewUser(newUser) {
  axios
    .post(url, newUser)
    .then(response => {
      console.log(response);
    })
    .catch(error => console.error(error));
}

function getUser(id) {
  axios
    .get(`${url}/${id}`)
    .then(response => {
      const data = response.data;
      userID.textContent = data.id;
      userName.textContent = data.name;
      userCity.textContent = data.city;
      userAvatar.src = data.avatar;
    })
    .catch(error => console.error(error));
}

function updateUser(id, updatedUser) {
  axios
    .put(`${url}/${id}`, updatedUser)
    .then(response => console.log(response))
    .catch(error => console.error(error));
}

function deleteUser(id) {
  axios
    .delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error));
}

getUsers();

const newUser = {
  name: "Fulano de Tal",
  avatar: "https://picsum.photos/200/300",
  city: "Rio de Janeiro"
};
addNewUser(newUser);

getUser(5);

const updatedUser = {
  name: "Marcelo Calvo",
  avatar: "https://picsum.photos/200/300",
  city: "Ceará"
};

updateUser(5, updatedUser);

deleteUser(5);
