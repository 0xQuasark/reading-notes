import React from 'react';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class PokemonCard extends React.Component {

  constructor(props) {
    super(props);
    // State is added here
    this.state = {
      isFavorite: false,
    }

    // This is needed for the non-fat-arrow function below
    // this.handleClick = this.handleClick.bind(this)
  }

  // This will not work properly without a binding as above
  // handleClick() {
  //   this.setState({isFavorite: !this.state.isFavorite})
  // }

  handleClick = () => {
    this.setState({isFavorite: !this.state.isFavorite})
  }

  render () {
    return (
      <Card>
        {/* <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/en/a/a6/Pok%C3%A9mon_Pikachu_art.png" /> */}
        <Card.Img variant="top" src={this.props.image_url} />
        <p>Am I a favorite? {`${this.state.isFavorite}`}</p>
        <h2> Pokemon Name</h2>
        {/* <img src="https://placehold.co/300x200"></img> */}
        <p>Pokemon Type</p>
        {/* <button onClick={() => this.setState({isFavorite: !this.state.isFavorite})}>Favorite Me!</button> */}
        <button onClick={this.handleClick}>Favorite Me!</button>
      </Card>
    );
  }
}

export default PokemonCard;