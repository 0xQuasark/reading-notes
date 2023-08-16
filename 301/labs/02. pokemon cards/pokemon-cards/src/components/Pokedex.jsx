import React from 'react';
import PokemonCard from './PokemonCard';
import pokemonCardValues from '../assets/data.json';


class Pokedex extends React.Component {
  
  render() {
    return (
      <section>
        <PokemonCard name="Pikachu" type="Electric" image_url="https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png" />
      </section>
    );
  }
}

export default Pokedex;