function tratarErroELancar(error) {
    //throw new Error('Ocorreu algum erro no sistema.')
    throw true
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch (e) {
        tratarErroELancar(e)
    }
}

const obj = { nome: 'Pedro' }
imprimirNomeGritado(obj)
