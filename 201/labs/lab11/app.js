'use strict';

const goats=[];
const image1Element = document.getElementById('image1');
const image2Element = document.getElementById('image2');
const goatContainer = document.getElementById('goat-container');

function Goat(name, src) {
  this.name = name;
  this.src = src;
  this.timeClicked = 0;
  this.timesSeen = 0;
  goats.push(this);
}

new Goat('crusin goat', 'assets/images/cruisin-goat.png');
new Goat('float your goat', 'assets/images/float-your-goat.jpg');
new Goat('goat away', 'assets/images/goat-away.jpg');
new Goat('goat logo', 'assets/images/goat-logo.png');
new Goat('goat out of hand', 'assets/images/goat-out-of-hand.jpg');
new Goat('kissing goat', 'assets/images/kissing-goat.jpg');
new Goat('sassy goat', 'assets/images/sassy-goat.jpg');
new Goat('smiling goat', 'assets/images/smiling-goat.jpg');
new Goat('sweater goat', 'assets/images/sweater-goat.jpg');


displayRandomGoats();
console.log(goats);


function displayRandomGoats() {
  let randomGoatIndex1 = Math.floor(Math.random() * goats.length);
  let randomGoatIndex2 = Math.floor(Math.random() * goats.length);
  
  while (randomGoatIndex1 === randomGoatIndex2) {
    randomGoatIndex2 = Math.floor(Math.random() * goats.length);
  }

  image1Element.src = goats[randomGoatIndex1].src;
  image1Element.alt = goats[randomGoatIndex1].name;
  image2Element.src = goats[randomGoatIndex2].src;
  image2Element.alt = goats[randomGoatIndex2].name;

  goats[randomGoatIndex1].timesSeen++;
  goats[randomGoatIndex2].timesSeen++;
  
}

function handleGoatClicks(event) {
  // console.log(event.target);
  for (let i = 0; i < goats.length; i++) {
    if (goats[i].name === event.target.alt){
      goats[i].timeClicked++;
    }
  }
  console.log(goats);
  displayRandomGoats();
}

goatContainer.addEventListener('click', handleGoatClicks);
