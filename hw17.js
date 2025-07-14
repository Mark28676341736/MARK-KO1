
const button = document.getElementById('myButton');
const input = document.getElementById('inputText');

input.addEventListener('input', () => {
  button.textContent = input.value;
});

const raceImage = document.getElementById('raceImage');
raceImage.src = '/js/download.jpg'; 


const link = document.getElementById('myLink');
const pic = document.getElementById('myPic');

link.href = 'http://127.0.0.1:5500/index.html';
pic.alt = 'img F1';


const list = document.getElementById('infoList');
const firstItem = list.querySelector('li');
firstItem.textContent = 'F1 — best auto sport';

