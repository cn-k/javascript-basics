function map(f, a) {
    let result = []; // Create a new Array
    let i; // Declare variable
    for (i = 0; i != a.length; i++)
        result[i] = f(a[i]);
    return result;
}
function square(x) {
    return x * x;
}
let arr = [1,2,3,4]
let res = map(square, arr)
console.log(res)