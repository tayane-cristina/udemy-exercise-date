//Capiturando uma data específica - 02/01/2001:
const data = new Date(2001, 0, 2, 00, 00, 00)
console.log(data.toString())

//Capiturando apenas o dia:
console.log("Hora", data.getHours())
console.log("Dia", data.getDate())
console.log("Dia da semana", data.getDay())
console.log("Mês", data.getMonth() + 1)
console.log("Ano", data.getFullYear())


