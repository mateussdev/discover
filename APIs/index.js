// CREATING A SERVER WITH EXPRESS
const express = require('express');
const axios = require('axios');

const app = express();

app.listen('3000');

// middleware
app.use(express.json());

// API GitHub
app.route('/').get( (req, res) => {
  axios.get('https://api.github.com/users/mateussdev')
  .then(result => res.send(result.data)) // pega todas as informações públicas de um perfil no github
  // .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
  .catch(error => console.log(error))
} );