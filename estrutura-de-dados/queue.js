// Passo 1: Modelando
class Queue {
    constructor(){
        this.data = []
    }

    enqueue(item){
        this.data.push(item)
        console.log(`${item} entrou na fila!`)
    }

    dequeue(){
        const item = this.data.shift()
        console.log(`${item} saiu da fila!`)
    }
}

// Passo 2: Utilizando
const fila = new Queue()

fila.enqueue('Mateus')
fila.enqueue('Felipe')
fila.enqueue('Maria')

fila.dequeue()
fila.dequeue()
fila.dequeue()

