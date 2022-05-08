let currentPage = 'titlePage';
function nextCard() {
  // console.log('test');
  document
    .getElementById('firstCard')
    .addEventListener('click', flipTheCard('firstCard', 'firstCardText'));
  document
    .getElementById('secondCard')
    .addEventListener('click', flipTheCard('secondCard', 'secondCardText'));

  let deckLength = deck.cards.length;
  if (usedCards.length !== deckLength) {
    let randomCard = Math.floor(Math.random() * deckLength - 1 + 1);
    while (usedCards.includes(randomCard)) {
      randomCard = Math.floor(Math.random() * deckLength - 1 + 1);
    }
    let newCard = deck.cards[randomCard];
    setTimeout(() => {
      document.getElementById('firstCardText').innerText = newCard;
    }, 200);
    usedCards.push(randomCard);
    console.log(usedCards);
  } else {
    alert(
      "You have played all the cards!\nDon't worry, we will shuffle the deck."
    );
    usedCards = [];
  }

  if (usedCards.length !== deckLength) {
    let randomCard = Math.floor(Math.random() * deckLength - 1 + 1);
    while (usedCards.includes(randomCard)) {
      randomCard = Math.floor(Math.random() * deckLength - 1 + 1);
    }
    let newCard = deck.cards[randomCard];
    setTimeout(() => {
      document.getElementById('secondCardText').innerText = newCard;
    }, 200);
    usedCards.push(randomCard);
    console.log(usedCards);
  } else {
    alert(
      "You have played all the cards!\nDon't worry, we will shuffle the deck."
    );
    usedCards = [];
  }
}

function flipTheCard(id, idText) {
  document.getElementById(id).classList.add('newCard');
  setTimeout(() => {
    document.getElementById(idText).style.display = 'none';
  }, 200);
  setTimeout(() => {
    document.getElementById(idText).style.display = 'inline';
  }, 1000);

  setTimeout(() => {
    document.getElementById(id).classList.remove('newCard');
  }, 1500);
}

const deck = {
  cards: [
    'All your fingers be penises for the next 2 years',
    'Your penis is a finger for the next year',
    'Have uncontrollable gas for an entire month',
    'Wet yourself at work for a week',
    "Sleep with your partner's siblings once",
    "Sleep with your best friend's sibling once",
    'Have bad sex every single day for the next 365 days',
    'Only have sex once a year for the next 10 years',
    "Lick someone's eyeball once",
    "Suck someone's toes once",
    'Burp every time someone says your name for the next 6 months',
    'Watch your parents have sex once',
    'Have your parents watch you have sex once',
    'Wear the same pair of underwear for a week',
    'Have nipples for toes for the next year',
    'Have big toes for nipples for the next 2 years',
    'Have your neighbours see your genitals every morning for the next 3 months',
    'Accidentally send a sext and nude to a relative',
    "Lick the bottom of a strangers shoes (yes, that's both shoes)",
    'Be the only person who speaks out of their butt ',
    'Have no one come to your wedding',
    'Have no one come to your funeral',
    'Be deaf for the next 4 years',
    'Be blind for the next 4 years',
    'Have no genitals for the next 1 year',
    'Have all animals try to hump you on sight for the next 12 months',
    'Have all animals attack you on sight for the next 12 months',
    'Have a vagina as a third eye for the next two weeks',
    'Have penises down your spine like a Stegosaurus for the next 7 days - they are super senstive as well',
    'Eat powdered sugar with dandruff in it',
    'Pee dry sand for the next 3 months',
    'Shit a big, hard brick every year on your birthday',
    'Put a toothpick under your toenail and kick a wall as hard as you can',
    'Accidentally scream the wrong name in bed',
    'Have your partner accidentally scream the wrong name in bed',
    'Be cheated on by a partner,',
    'Cheat on a partner',
    'Have abnormally large toes with tiny feet',
    'Smell slightly like cheese permentantly',
    'Fight the person opposite you',
    'Always have a dry mouth',
    'Have to announce to everyone around you whenever you fart',
    'Be without elbows',
    'Be without knees',
    'Use eyedrops made of vinegar and lemon juice once',
    'Use toilet paper made of sandpaper for the next week',
    'Have your breath smell like fart',
    'Have your laugh sound like a fart',
    "Use a stranger's toothbrush for a week",
    "Wear a stranger's dirty underwear for a day - yes there are skid marks",
    'Be constatly itchy',
    'Be constantly sticky',
    'Have a slightly runny nose for the rest of your life',
    'Have pubic hair for teeth for the next 6 months',
    'Have teeth for pubic hair for the next year',
  ],
};
let usedCards = [];

const titlePage = document.querySelector('.titlePage');
const playPage = document.querySelector('.playPage');
const instructionsPage = document.querySelector('.instructionsPage');

function goToPlayPage() {
  currentPage = 'playPage';
  titlePage.classList.remove('moveOnToScreen');
  titlePage.classList.add('moveOffScreen');
  instructionsPage.classList.remove('moveOnToScreen');
  instructionsPage.classList.add('moveOffScreen');
  playPage.classList.add('moveOnToScreen');
}

function goToInstructionsPage() {
  currentPage = 'instructionsPage';
  titlePage.classList.remove('moveOnToScreen');
  titlePage.classList.add('moveOffScreen');
  instructionsPage.classList.add('moveOnToScreen');
}

function goToTitlePage(currentPage) {
  titlePage.classList.add('moveOnToScreen');
  if (currentPage === 'instructionsPage') {
    instructionsPage.classList.remove('moveOnToScreen');
    instructionsPage.classList.add('moveOffScreen');
  } else if (currentPage === 'playPage') {
    playPage.classList.remove('moveOnToScreen');
    playPage.classList.add('moveOffScreen');
  }
  currentPage = 'titlePage';
}
