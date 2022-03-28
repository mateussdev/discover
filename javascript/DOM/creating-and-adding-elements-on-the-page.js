// Criando e adicionando elementos

// createElement
const div = document.createElement('div');
div.innerText = "Olá Devs!";

// append prepend
const body = document.querySelector('body');

// append - adiciona após o ultimo elemento
body.append(div);

// prepend - adiciona antes de todos os elementos
body.prepend(div);

// Adicionando elementos

// insertBefore
// const body = document.querySelector('body');
const input = document.querySelector('input');
body.insertBefore(div, input)