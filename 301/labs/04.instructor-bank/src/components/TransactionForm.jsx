import React from 'react';

class Form extends React.Component {

  handleSubmit = (event) => {
    console.log("ELEMENT THAT WAS SUBMITTED :", event.target);
    event.preventDefault(); // forms want to do something and reload the page.
    console.log(event.target.type.value);
    console.log(event.target.amount.value);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Type of Transaction</label>
        <select name="type">
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
        <label>Transaction Amount</label>
        <input type="number" name="amount" />
        <button type="submit">Submit Me!</button>
      </form>
    )
  }  
}

export default Form;
