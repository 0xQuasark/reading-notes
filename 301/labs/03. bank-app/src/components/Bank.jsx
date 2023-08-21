import React from 'react';
import BankCustomer from './BankCustomer';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class Bank extends React.Component {
  constructor() {
    super();
    this.state = {
      totalMoney: 1000,
      warning: false, // tells UI 
    }
  }

  toggleWarning = () => {
    this.setState({
      warning: !this.state.warning,
    })
  }
  
  
  credit = (money) => {
    if (this.state.totalMoney < money){
      this.toggleWarning();
      return null;
    } else {
      this.setState({
        totalMoney: this.state.totalMoney - money,
      })
      return money; // this
    }
  }
  
  render() {
    return (
      <section>
        <h2>Welcome to the Instructor Bank!</h2>
        <p>Current Money Pool: {this.state.totalMoney}</p>
        <div className="customer-list">
          {/* Note that the below is passing the credit function down to the BankCustomer component */}
          <BankCustomer name="Paul" credit={this.credit} />
          <BankCustomer name="Julia" credit={this.credit} />
          <BankCustomer name="Matt" credit={this.credit} />
          <BankCustomer name="Amy" credit={this.credit} />
        </div>

      <OverDraftModal warning={this.state.warning} toggleWarning={this.toggleWarning} />
      </section>
    )
  }
}

class OverDraftModal extends React.Component {
  render() {
    return(
      <Modal show={this.props.warning} onHide={this.props.toggleWarning}>
        <Modal.Header closeButton>
          <Modal.Title>OverDraft Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Not enough money!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.toggleWarning}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    );
  }
}

export default Bank;