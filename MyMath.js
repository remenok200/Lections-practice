class MyMath {
  static sum = (...numbers) =>
    numbers.reduce((total, number) => total + number);
  static subtract = (...numbers) =>
    numbers.reduce((total, number) => total - number);
}

console.log("MyMath");

const data = 12354;

exports.MyMath = MyMath;
exports.data = data;
console.log(__filename);
