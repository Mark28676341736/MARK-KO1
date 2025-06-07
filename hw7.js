const numbers = [1, 2, 3];
numbers[1] = 10;
console.log(numbers);

const strings = ['літкак', 'вертоліт', 'потяг'];
strings.push('авто');
console.log(strings);

const nums = [8, 3, 6];
const sum = nums.reduce((acc, val) => acc + val, 0);
console.log(sum); 

const arr = [7, 10, 18, 26, 29];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

const lines = ['компютер', 'телефон', 'ноутбук', 'юсб', 'авто'];
for (const word of lines) {
  if (word.length > 5) {
    console.log(word);
  }
}

const values = [8, 48, 84, 94, 99, 8, 135, 5, -2, 72];
const max = Math.max(...values);
console.log(max); 

const digits = [7, 62, 43, 91, 34, 31, 46, 20, 60, 15];
for (const num of digits) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

