// definir classe
class Pessoa{
  constructor(nome){
    this.id = ~~(Math.random() * 1000000)
    this.nome = nome
  }

  dizerNome(){
    console.log(this.nome)
  }
}

// instanciando
const Mateus = new Pessoa('Mateus Silva')

Mateus.dizerNome()