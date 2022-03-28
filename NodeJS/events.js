// pegando a função EventEmiiter que está no módulo events
const { EventEmitter } = require('events')
// criando uma nova instancia do EventEmitter
const ev = new EventEmitter()

// ev ficará ouvindo o evento saySomething e irá disparar a função callback
ev.on('saySomething', (message) => {
  console.log("rodando...", message)
})

// emitindo o evento saySomething
ev.emit('saySomething', 'Mateus')
ev.emit('saySomething', 'Felipe')


// // pegando a função inhertis que está no módulo util
// const { inherits } = require('util');
// // pegando a função EventEmiiter que está no módulo events
// const { EventEmitter } = require('events');

// // criando um construtor para personagens 
// function Character(name){
//   this.name = name
// };

// // chamando a função inherist para fazer com que o Character(construtor) herde as funcionalidades da função EventEmitter
// inherits(Character, EventEmitter);

// // criando um novo personagem(uma nova instancia)
// const chapolin = new Character('Chapolin');
// // fazendo com que o o novo personagem fique ouvindo o evento help e dispare uma função callback
// chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado!`));

// console.log('Oh! Agora quem poderá me defender?');
// // emitindo a função help
// chapolin.emit('help');