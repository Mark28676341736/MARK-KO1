//1

const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ['кіт', 'собака', 'миша', 'папуга', 'хомяк'];
function countItems(array, condition) {
    let count = 0;
    for (const element of array) {
        if (condition(element)) {
            count++;
        }
    }
    return count;
}
const isEven = num => num % 2 === 0;
const isLarge = num => num > 10;
const isShort = word => word.length <= 3;
console.log('Парних чисел:', countItems(numbers, isEven));
console.log('Чисел більше 10:', countItems(numbers, isLarge));
console.log('Коротких слів:', countItems(words, isShort));

//2
const calculate = (a, b, operation) => operation(a, b);
const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => {
    if (b === 0) {
        return 'на нуль ділити не можна';
    }
    return a / b;
}
// Тестування
console.log(calculate(10, 5, add));      // Повиноо показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку

//3
function repeatMessage(times, messageCreator) {
    for (let i = 0; i < times; i++) {
        console.log(messageCreator(i));
    }
}


const kindMessage = i => `ти гарний №${i + 1}`;

console.log('--- kindMessage ---');
repeatMessage(2, kindMessage);

const angrymessage = i => `в тебе не вийде №${i + 2}`;
console.log('--- angryMessage---');
repeatMessage(4, angryMessage);


