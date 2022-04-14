const myDog = {
  name: 'Tyzik',
  age: 3.2,
  sex: 'man'
}

const serializedDog = JSON.stringify(myDog);
console.log(serializedDog);

const deserializedDog = JSON.parse(serializedDog);
console.log(deserializedDog);