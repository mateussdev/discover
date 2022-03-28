// definir
class Parafuso { // Superclasse - Abstrata
  constructor(){
    if (this.constructor === Parafuso) {
      throw new Error('Classe abstrata não pode ser instânciada');
    }
  }
  get tipo(){
    throw new Error('Método "get tipo()" precisa ser implementado');
  } 
}

class Fenda extends Parafuso{
  constructor(){ super() }

  get tipo(){
    return 'fenda'
  }
}

class Philips extends Parafuso{
  constructor(){ super() }

  get tipo(){
    return 'philips'
  }
}

class Allen extends Parafuso{}

// criar e usar
// new Parafuso() // classe abstrata não poder ser instânciada
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo, philips.tipo)
console.log(allen.tipo) // Método "get tipo()" precisa ser implementado