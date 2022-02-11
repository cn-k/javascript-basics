var myCar = new Object();
var propertyName = 'make';
myCar[propertyName] = 'Ford';

myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;

console.log(myCar['make'])

function showProps(obj, objName) {
    var result = ``;
    for (var i in obj) {
      // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    return result;
  }
  console.log(showProps(myCar, "myCar"))