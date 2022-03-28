// clearInterval irá cancelar um setInterval registrado
const timeOut = 1000
const checking = () => console.log("checking!")

let interval = setInterval(checking, timeOut)

// irá parar na hora
// clearInterval(interval)

// irá parar depois de X miliessegundos
setTimeout(() => clearInterval(interval), 4000)