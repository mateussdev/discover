/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + ' está andando...'
    }
}

const mateus = new Person('Mateus')
const felipe = new Person('Felipe')

console.log(mateus.walk())
console.log(felipe.walk())