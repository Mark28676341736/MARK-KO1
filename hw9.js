function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`)
  }
}



function calculateEngravingPrice(message, lettersPerWord) {
  return message.split(' ').reduce((sum) => sum + lettersPerWord, 0);
}



function findLongestWord(string) {
  let longest = words[0];
  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest
}


function formatString(string) {
  if (string.length <= 40) {
    return string;
  }
  return string.slice(0, 40) + '...'
}




function checkForSpam(message) {
  const lower = message.toLowerCase();
  return lower.includes('spam') || lower.includes('sale');
}


const numbers = [];
let input;

while ((input = prompt('введіть сюди число ')) !== null) {
  const num = Number(input);
  if (Number.isNaN(num)) {
    alert('ви ввели не число');
    continue;
  }
  numbers.push(num);
}

const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(`сума чисел  ${total}`);
