import React from 'react';
const ReactDOM = require('react-dom');

var Form1 = (props) => (
  <div className="form">
    <div className="form-label">First Name: </div>
    <input name="first-name" type="text" />
    <div className="form-label">Last Name: </div>
    <input name="last-name" type="text" />
    <div className="form-label">Email: </div>
    <input name="email" type="text" />
    <div className="form-label">Password: </div>
    <input name="password" type="text" />
  </div>
);

var Form2 = (props) => (
  <div className="form">
    <div className="form-label">Line #1: </div>
    <input name="line-1" type="text" />
    <div className="form-label">Line #2: </div>
    <input name="line-2" type="text" />
    <div className="form-label">City: </div>
    <input name="city" type="text" />
    <div className="form-label">State: </div>
    <input name="state" type="text" />
    <div className="form-label">Zip Code: </div>
    <input name="zip-code" type="text" />
    <div className="form-label">Phone Number: </div>
    <input name="phone-number" type="text" />
  </div>
);

var Form3 = (props) => (
  <div className="form">
    <div className="form-label">Card Number: </div>
    <input name="card-number" type="text" />
    <div className="form-label">Experation Date: </div>
    <input name="experation-date" type="text" />
    <div className="form-label">CVV: </div>
    <input name="cvv" type="text" />
    <div className="form-label">Billing Zip Code: </div>
    <input name="billing-zip-code" type="text" />
  </div>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 1,
    };
    this.forms = {
      '1': 'Form1',
      '2': 'Form2',
      '3': 'Form3',
    };
  }

  nextForm() {
    this.state.form < 4 ? this.state.form++ : (this.state.form = 1);
  }

  render() {
    const Component = this.forms[this.state];
    return (
      <div>
        <Component />
        <button onClick={nextForm}>Next</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementsByClassName('app'));

module.exports = App;
