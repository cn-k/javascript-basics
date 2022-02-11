function myFunc(theObject) {
    theObject.make = 'Toyota';
}

var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
var x, y;

x = mycar.make; // x gets the value "Honda"

myFunc(mycar);
y = mycar.make;
console.log(y);

const square = function (number) { return number * number }
var x = square(4)
console.log(x)