const bankAccount = {
  ownerName: 'Ковтун Марк',
  accountNumber: '5375 4115 9047 4651',
  balance: '9525'
};

let deposit = 'додати гроші';
console.log(deposit);
console.log(deposit['addMoney']); 


delete bankAccount['balance'];
console.log(bankAccount);

const weather = {
  temperature: 22,
  humidity: '60%',
  windSpeed: '5 км/год'
};


weather.temperature = Number(prompt("введіть температуру"));

weather.Freezing = function() {
  return this.temperature < 0;
};
let result = 'температура вище 0 градусів :)';
if (weather['Freezing']()) {
  result = 'температура менше за 0 градусів :(';
}

console.log(result);
alert(result);


delete weather['humidity'];
console.log(weather);

const user = {
  name: "Марк",
  email: "mkovtun585@gmail.com",
  password: "pfagfq132",
  
  login() {
    alert(
      prompt("Email:") === this.email && prompt("Пароль:") === this.password
        ? ` ви зайшли в акаунт ${this.name}`
        : "пошта або пароль не є вірними"
    );
  }
};
user.login();

const movie = {
  title: "fight club",
  director: "James Jonathan",
  year: 2025,
  rating: 9.2,

  isHighlyRated() {
    return this.rating > 8;
  }
};


console.log("назва фільму", movie.title);
console.log("режисер", movie['director']);
console.log("рік видання", movie.year);
console.log("рейтинг", movie['rating']);
console.log("рейтинг більше ніж 8 зірочок", movie.isHighlyRated());
