// Manipulando conteúdo

// textContent
const element = document.querySelector('h1');
element.textContent = 'Olá Devs!';

// innerText
element.innerHTML = 'Meu Blog';

// innerHTML
element.innerHTML += '<p>Olá Devs!</p>';

// value
const otherElement = document.querySelector('input');
// pegando o valor do input
console.log(otherElement.value);
// modificando o valor do input
otherElement.value = 'Digite alguma coisa';

// Manipulando atributos
const h1 = document.querySelector('h1');
// adicionando a classe title ao elemento
h1.setAttribute('class', 'title');

// pegando o elemento através da classe que foi inserida acima
const h1Class = document.querySelector('.title')

// mostrando o elemento no console através da classe
console.log(h1Class.getAttribute('class'));

// removendo a classe
h1Class.removeAttribute('class');

// inserindo uma nova classe
h1Class.setAttribute('class', 'main-title')