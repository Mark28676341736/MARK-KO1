const clients = ['Mango','Poly','Kiwi','Ajax'];
 console.log(clients.join(' '));
 console.log(clients.join(','));
 console.log(clients.join('-'));


 const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];

  const cardToRemove = 'Карточка-3';
const index = cards.indexOf(cardToRemove);
console.log(cards);

const cardToInsert = 'Карточка-6';
const insertIndex = 2; 
console.log(cards);

const oldCard = 'Карточка-4';
const newCard = '4 card updated';

const updateIndex = cards.indexOf(oldCard)
console.log(cards);