// 1- Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
console.log(typeof weight)

/* 
    3. Declare uma varável e atribua valores para cada um dos dados
        * name: String
        * age: Number ( interger )
        * stars: Number ( float )
        * isSubscribed: Boolean
*/

//let name = 'Mateus'
//let age = 19
//let stars = 9.5
//let isSubscribed = true

/*
    4. A variável student abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercíco 3.

    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.
        Atenção, substitua <name> <age> <weight> pelos valores de cada propriedade do objeto
*/

let student = {
    name: 'Mateus',
    age: 19,
    weight: 55.5,
    isSubscribed: true
}

// 4
console.log(typeof student)

// 4.2
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/
let students = []

/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o obejto criado e inserir ele no Array)
*/

students = [
    student
]
console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima
*/
console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/
const otherStudent = {
    name: 'Felipe',
    age: 10,
    weight: 40.0,
    isSubscribed: true
}

students[1] = otherStudent
console.log(students)

/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por quê? Após sua resposta. rode o código e veja se você acertou

    console.log(a)
    var a = 1
*/

console.log(a)
var a = 1