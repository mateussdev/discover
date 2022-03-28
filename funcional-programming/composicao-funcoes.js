const people = ['Rafa', 'Diego', 'Dani', 'Rod'];
const upperCasePeopleThatStartWithD = people.filter(person => person.startsWith('D')).map(dperson => dperson.toUpperCase())

console.log(upperCasePeopleThatStartWithD)