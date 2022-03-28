// Alterando estilos
// classList
const element = document.querySelector('h1');

// adiciona uma classe ao elemento
element.classList.add('active', 'green')

// remove a classe do elemnto
element.classList.remove('active')

// se a classe existir, irá removê-la, se não, irá adicioná-la
element.classList.toggle('active')

console.log(element.classList)