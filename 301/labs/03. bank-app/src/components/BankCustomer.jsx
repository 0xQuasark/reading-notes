import React from "react";

class BankCustomer extends React.Component {
  constructor() {
    super();
    this.state = {
      // money: props.initialAmount || 0,
      money: 0,
    }
  }

  addMoney = (money) => {
    this.setState({
      money: this.state.money + money,
    })
  }
   
  handleClick = () => {
    let amount = 200;
    // credit() from Bank.jsx 
    let value = this.props.credit(amount);
    if (value) {
      this.addMoney(amount);
    }
  }

  render () {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>Current balance: {this.state.money}</p>
        <button onClick={this.handleClick}>Give me money!</button>
      </div>
    )
  }

}

export default BankCustomer;