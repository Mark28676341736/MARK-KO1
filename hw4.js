const field1 = 'text';
const field2 = 'teext';

if (text1 && text2) {
  console.log('Обидва поля заповнені');
} else {
  console.log('Не всі поля заповнені');
}


const num1 = 3;
const num2 = 5;
const sum = num1 + num2;
console.log(sum > 10 ? 'Сума більша за 10' : 'Сума менша або дорівнює 10');

const text = 'в goiteens  ми вивчаємо JavaScipt';

if (text.includes('JavaScript')) {
  console.log('Текст містить слово JavaScript');
} else {
  console.log('Текст не містить слово JavaScript');
}

const number = 15;

if (number > 10 && number < 20) {
  console.log('Число входить в діапазон від 10 до 20');
} else {
  console.log('Число не входить в діапазон від 10 до 20');
}



const name = 'Іван';
const email = 'ivan@example.com';
const password = '123456';
if (
  name.length >= 3 &&
  email.includes('@') &&
  email.includes('.', email.indexOf('@')) &&
  password.length >= 6
) {
  console.log('Перенаправлення на іншу сторінку');
} else {
  console.log('Помилка: неправильне заповнення');
}
