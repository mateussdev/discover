// CREATING A SERVER WITH EXPRESS
const express = require('express');
const axios = require('axios');

const app = express();

app.listen('3000');

// middleware
app.use(express.json());

// API no Front-End com Fetch
