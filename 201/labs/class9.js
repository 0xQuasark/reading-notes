
'use strict';

let formElement = document.getElementById('pokemon-form');
let pokedex = [];

function Pokemon(name, type, isFoil) {
  this.name = name;
  this.type = type;
  this.isFoil = isFoil === 'true' ? true : false;
  pokedex.push(this); 
}

Pokemon.prototype.display = function() {
  let tableBody = document.getElementById('table-body');

  let row = document.createElement('tr');
  let nameCell = document.createElement('td');
  let typeCell = document.createElement('td');
  let shinyCell = document.createElement('td');

  nameCell.textContent = this.name;
  typeCell.textContent = this.type;
  shinyCell.textContent = this.isFoil;

  row.appendChild(nameCell);
  row.appendChild(typeCell);
  row.appendChild(shinyCell);
  tableBody.appendChild(row);
}


function handleSubmit(event) {
  event.preventDefault();

  let pokemonName = event.target.pokemonName.value;
  let pokemonType = event.target.pokemonType.value;
  let isFoil = event.target.isFoil.value;

  let pokemon = new Pokemon(pokemonName, pokemonType, isFoil);
  console.log(pokedex);
  pokemon.display();
}

formElement.addEventListener('submit', handleSubmit);
