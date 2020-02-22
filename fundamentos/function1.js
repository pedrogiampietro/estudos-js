// print without return

function printSum(a, b) {
    console.log(a + b);
}

printSum(2, 3)


// return function

function sum(a, b = 0){
    return a + b
}

console.log(sum(2, 3));