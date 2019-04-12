var Form1 = (props) => (
  <div>
    <div className="form-label">First Name: </div>
    <input name="firstname" type="text" />
    <div className="form-label">Last Name: </div>
    <input name="lastname" type="text" />
    <div className="form-label">Email: </div>
    <input name="email" type="text" />
    <div className="form-label">Password: </div>
    <input name="password" type="text" />
  </div>
);

var Form2 = (props) => (
  <div>
    <div className="form-label">Line #1: </div>
    <input name="line-1" type="text" />
    <div className="form-label">Line #2: </div>
    <input name="line-2" type="text" />
    <div className="form-label">City: </div>
    <input name="city" type="text" />
    <div className="form-label">State: </div>
    <input name="state" type="text" />
    <div className="form-label">Zip Code: </div>
    <input name="zipcode" type="text" />
    <div className="form-label">Phone Number: </div>
    <input name="phone-number" type="text" />
  </div>
);

var Form3 = (props) => (
  <div>
    <div className="form-label">Card Number: </div>
    <input name="card-number" type="text" />
    <div className="form-label">Expiration Date: </div>
    <input name="expiration-date" type="text" />
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
      formsVisible: false,
      hover: true,
    };
    this.forms = {
      '1': Form1,
      '2': Form2,
      '3': Form3,
    };
  }

  nextForm() {
    this.state.form <= 2
      ? this.setState((state) => {
          return { form: state.form + 1 };
        })
      : this.setState(() => {
          return { formsVisible: false };
        });
  }

  showForms() {
    this.setState(() => {
      return { formsVisible: true, form: 1 };
    });
  }

  setHover() {
    this.setState((state) => {
      return { hover: !state.hover };
    });
  }

  render() {
    var formsDisplay, homeDisplay;
    const Component = this.forms[this.state.form];
    if (this.state.formsVisible === true) {
      formsDisplay = 'block';
      homeDisplay = 'none';
    } else {
      formsDisplay = 'none';
      homeDisplay = 'block';
    }
    return (
      <div>
        <div style={{ display: homeDisplay }}>
          <button
            className="checkout-button"
            style={{
              fontSize: '25px',
              padding: '15px 32px',
              backgroundColor: this.state.hover ? '#fc8f07' : 'white',
              color: this.state.hover ? 'white' : '#fc8f07',
              borderColor: '#fc8f07',
              borderWidth: 'medium',
              cursor: 'pointer',
            }}
            onMouseEnter={this.setHover.bind(this)}
            onMouseLeave={this.setHover.bind(this)}
            onClick={this.showForms.bind(this)}
          >
            Checkout
          </button>
        </div>
        <div style={{ display: formsDisplay }}>
          <form
            method="post"
            className="form"
            action="/"
            onSubmit={this.nextForm.bind(this)}
          >
            <Component />
            <input
              type="submit"
              // onClick={this.nextForm.bind(this)}
              value="Next"
              style={{
                padding: '10px 26px',
                marginTop: '22px',
                backgroundColor: 'rgb(127, 123, 119)',
                color: 'white',
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
