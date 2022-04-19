const { MyMath } = require('./MyMath');

class Phone {
  constructor(name) {
    this.name = name;
  }
}

console.log(MyMath.sum(1, 1));
exports.Phone = Phone;