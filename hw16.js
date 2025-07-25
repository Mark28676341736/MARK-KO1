







// Напиши функцію-конструктор Account, яка створює об'єкт з властивостями login і email. В prototype функції-конструктора добав метод getInfo(), який виводить в консоль значення полів login і email об'єкта який його викликав.



// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//  login: 'Mangozedog',
//  email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//  login: 'Poly',
//  email: 'poly@mail.com',
// });

poly.getInfo(); // Login: Poly, Email: poly@mail.com

function Account({ login, email }) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function() {
  console.log(`Login: {this.login}, Email: {this.email}`);
};


console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com

//----------------------------------------------------------------------------------------------------------------

class User {
constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(`User {this.name} is {this.age} years old and has {this.followers} followers`);
  }
}


const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo(); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

// poly.getInfo(); // User Poly is 3 years old and has 17 followers
// --------------------

// const storage = new Storage([
//  'Нанітоіди',
//  'Пролонгер',
//  'Залізні жупи',
//  'Антигравітатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItem('Дроїд');
// console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
//----------------------------------
class Storage {
  constructor(items) {
    this.items = items;
  }

getItems() {
    return this.items;
  }

  addItem(item) {
this.items.push(item);
  }

removeItem(item) {
    this.items = this.items.filter(existingItem => existingItem !== item);
  }
}



const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); 
// [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); 
// [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); 
// [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]
// ====


//---------------------------------------------------------------------------------------------------



// Геттер value — повертає поточне значення поля _value
// Метод append(str) — отримує параметр str (рядок) і додає його в кінець _value
// Метод prepend(str) — отримує параметр str (рядок) і додає його на початок _value
// Метод pad(str) — отримує параметр str (рядок) і додає його на початок і в кінець _value


// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='


class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }
get value() {
    return this.value;
  }
append(str) {
    this.value += str;
  }
prepend(str) {
    this.value = str + this.value;
  }
pad(str) {
    this.value = str + this.value + str;
  }
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='

//--------------------------------------------
// Напиши клас Car із зазначеними властивостями і методами.



// class Car {
//  /*
//   * Додай статичний метод `getSpecs(car)`,
//   * який приймає об'єкт-машину як параметр і виводить
//   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
//   */

//  /*
//   * Конструктор отримує об'єкт налаштувань.
//   *
//   * Додай властивості майбутнього екземпляра класу:
//   * speed - поточна швидкість, початкова 0
//   * price - ціна автомобіля
//   * maxSpeed - максимальна швидкість
//   * isOn - заведений автомобіль, значення true або false. Спочатку false
//   * distance - загальний кілометраж, спочатку 0
//   */
//  constructor() {}

//  /*
//   * Додай геттер і сеттер для властивості price,
//   * який буде працювати з властивістю ціни автомобіля.
//   */

//  /*
//   * Додай код для того, щоб завести автомобіль
//   * Записує у властивість isOn значення true
//   */
//  turnOn() {}

//  /*
//   * Додай код для того, щоб заглушити автомобіль
//   * Записує у властивість isOn значення false,
//   * і скидає поточну швидкість в 0
//   */
//  turnOff() {}

//  /*
//   * Додає до властивості speed отримане значення,
//   * за умови, що результуюча швидкість
//   * не більше, ніж значення властивості maxSpeed
//   */
//  accelerate(value) {}

//  /*
//   * Забирає від властивості speed отримане значення,
//   * за умови, що результуюча швидкість не менше нуля
//   */
//  decelerate(value) {}

//  /*
//   * Додає в поле distance кілометраж (hours * speed),
//   * але тільки в тому випадку, якщо машина заведена!
//   */
//  drive(hours) {}
// }

// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000

//========
class Car {
  static getSpecs(car) {
    console.log(
      `maxSpeed: {car.maxSpeed}, speed: {car.speed}, isOn: {car.isOn}, distance: {car.distance}, price: {car.price}`
    );
  }

  constructor({ maxSpeed, price }) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value >= 0) {
      this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += this.speed * hours;
    }
  }
}

// Перевірка
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
