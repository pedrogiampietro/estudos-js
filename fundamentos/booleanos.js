let isAtivo = false
    console.log(isAtivo)

isAtivo = true
    console.log(isAtivo)
        
isAtivo = 1
    console.log(!!isAtivo)    

console.log('Somente valores verdadeiros.')
console.log(!!3) // ! <- negação sobre negação / negação 2x
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) 

// somente falsos.

console.log('Somente valores falsos.')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(!!('' || null || 0 || '123'))