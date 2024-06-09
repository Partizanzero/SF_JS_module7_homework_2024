const person = {
  name: "Lena",
  age: 18
}

function printInfo(){
  console.log(`Name: ${this.name}, Age: ${this.age}`);
}

printInfo.call(person);
