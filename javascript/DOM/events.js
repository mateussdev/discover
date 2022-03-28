// Eventos
const button = document.querySelector('button');

button.addEventListener('mouseover', print);

function print(){
    console.log('Hello, World!');
}

// outra forma
// const button = document.querySelector('button');

button.onclick = print

function print(){
    console.log('Hello, World!');
}

// argument event
const input = document.querySelector('input');

input.onkeydown = function(event){
    console.log(event.currentTarget.value)
}
