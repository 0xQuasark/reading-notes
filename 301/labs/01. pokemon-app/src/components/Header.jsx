import React from 'react';

class Header extends React.Component {

  // this is how we pass data to components (i.e. props)
  // We only need to use constructor and super when we want to pass data through

  constructor(props) {
    super(props);
    console.log(props);
  }

  render () {
    return (
      <header>
        <h1>My Pokemon App</h1>
        <h2>{this.props.subTitle}</h2>
      </header>
    )
  }
}

export default Header;
