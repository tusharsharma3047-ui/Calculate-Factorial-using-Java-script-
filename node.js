// Factorial banana hai toh
let a = 4;
function Factorial(number){
    let arr = Array.from(Array(number+1).keys())
    let result = arr.slice(1,).reduce((a,b) => a*b)
    return result

}
console.log(Factorial(a));