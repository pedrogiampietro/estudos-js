// ` ´

const nome = 'Pedro'
const concat = 'Olá '.concat(nome).concat('!')

console.log(concat)

const template = `
    Olá
    ${nome}`

console.log(concat, template)

const up = texto=> texto.toUpperCase()
    console.log(`Ei... ${up('cuidado!')}!`)
