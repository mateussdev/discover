// Navegando pelos elementos
const el = document.querySelector('input');

// parentNode parentElement
console.log(body.parentElement);

// childNodes children
// childNodes - pega até os espaços (text)
// children - pega só os filhos 
console.log(el.children);

// firstChild firstElementChild
// firstChild - pega até os espaços (text)
// firstElementChild - pega só os filhos
console.log(el.firstChild);

// lastChild lastElementChild
console.log(el.lastElementChild);

// nextSibiling nextElementSibiling
console.log(el.nextSibling);

// previousSibiling previousElementSibiling
console.log(el.previousElementSibling);

