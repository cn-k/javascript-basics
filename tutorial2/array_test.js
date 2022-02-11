const arr = [3, 5, 7];
arr.foo = 12;

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs 3, 5, 7
}

let arr2 = [42]
console.log(arr2)

let arr3 = Array(42)

let cats = []
cats[30] = ['Dusty']
console.log(cats.length) // 31

let colors = ['red', 'green', 'blue']
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i])
}
colors.forEach(c => console.log(c))

array = ['first', 'second', undefined, 'fourth']

array.forEach(a => console.log(a))

let myArray = new Array('1', '2', '3')
myArray = myArray.concat('a', 'b', 'c')


myArray.push('z')


myArray.pop()

myArray.unshift('4', '5')
//myArray.forEach(m => console.log(m))

myArray = myArray.slice(1, 4) 
myArray.forEach(m => console.log(m))

myArray.reverse()
console.log(myArray)


let myArray2 = new Array('Wind', 'Rain', 'Fire')
myArray2.sort()
console.log(myArray2)

let a1 = ['a', 'b', 'c']
//let a2 = a1.map(function(item) { return item.toUpperCase() })
let a2 = a1.map(item => item.toUpperCase())
console.log(a2) // logs ['A', 'B', 'C']

let a = [10,20,30]
let total = a.reduce((accm, currentValue) => accm + currentValue,0)
console.log(total)

const myArr = [1, 2, 3];
myArr.property = "value";
console.log(myArr.property);  // Logs "value"