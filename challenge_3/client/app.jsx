var Form1 = (props) => (
  <div>
    <div className="form-label">First Name: </div>
    <input
      onChange={props.onInputChange}
      // onChange={console.log(event)}
      value={props.state.firstname === undefined ? '' : props.state.firstname}
      name="firstname"
      type="text"
    />
    <div className="form-label">Last Name: </div>
    <input
      onChange={props.onInputChange}
      value={props.state.lastname === undefined ? '' : props.state.lastname}
      name="lastname"
      type="text"
    />
    <div className="form-label">Email: </div>
    <input
      onChange={props.onInputChange}
      value={props.state.email === undefined ? '' : props.state.email}
      name="email"
      type="text"
    />
    <div className="form-label">Password: </div>
    <input
      onChange={props.onInputChange}
      value={props.state.password === undefined ? '' : props.state.password}
      name="password"
      type="text"
    />
  </div>
);

var Form2 = (props) => (
  <div>
    <div className="form-label">Line #1: </div>
    <input
      onChange={props.onInputChange}
      value={props.state['line-1'] === undefined ? '' : props.state['line-1']}
      name="line-1"
      type="text"
    />
    <div className="form-label">Line #2: </div>
    <input
      onChange={props.onInputChange}
      value={props.state['line-2'] === undefined ? '' : props.state['line-2']}
      name="line-2"
      type="text"
    />
    <div className="form-label">City: </div>
    <input
      onChange={props.onInputChange}
      value={props.state.city === undefined ? '' : props.state.city}
      name="city"
      type="text"
    />
    <div className="form-label">State: </div>
    <input
      onChange={props.onInputChange}
      value={props.state.state === undefined ? '' : props.state.state}
      name="state"
      type="text"
    />
    <div className="form-label">Zip Code: </div>
    <input
      onChange={props.onInputChange}
      value={props.state.zipcode === undefined ? '' : props.state.zipcode}
      name="zipcode"
      type="text"
    />
    <div className="form-label">Phone Number: </div>
    <input
      onChange={props.onInputChange}
      value={
        props.state['phone-number'] === undefined
          ? ' '
          : props.state['phone-number']
      }
      name="phone-number"
      type="text"
    />
  </div>
);

var Form3 = (props) => (
  <div>
    <div className="form-label">Card Number: </div>
    <input
      onChange={props.onInputChange}
      value={
        props.state['card-number'] === undefined
          ? ''
          : props.state['card-number']
      }
      name="card-number"
      type="text"
    />
    <div className="form-label">Expiration Date: </div>
    <input
      onChange={props.onInputChange}
      value={
        props.state['expiration-date'] === undefined
          ? ''
          : props.state['expiration-date']
      }
      name="expiration-date"
      type="text"
    />
    <div className="form-label">CVV: </div>
    <input
      onChange={props.onInputChange}
      value={props.state.cvv === undefined ? '' : props.state.cvv}
      name="cvv"
      type="text"
    />
    <div className="form-label">Billing Zip Code: </div>
    <input
      onChange={props.onInputChange}
      value={
        props.state['billing-zip-code'] === undefined
          ? ''
          : props.state['billing-zip-code']
      }
      name="billing-zip-code"
      type="text"
    />
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

    this.setHover = this.setHover.bind(this);
    this.showForms = this.showForms.bind(this);
    this.nextForm = this.nextForm.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  nextForm(event) {
    this.state.form <= 2
      ? this.setState((state) => {
          return { form: state.form + 1 };
        })
      : this.setState(() => {
          return { formsVisible: false };
        });
    event.preventDefault();
  }

  onInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(() => ({
      [name]: value,
    }));
    event.target.value = this.state[event.target.name];
    console.log(this.state);
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
          <h1>Home Page for an App Currently Not Doing Anything</h1>
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
            onMouseEnter={this.setHover}
            onMouseLeave={this.setHover}
            onClick={this.showForms}
          >
            Checkout
          </button>
        </div>
        <div style={{ display: formsDisplay }}>
          <h1>Checkout</h1>
          <form
            method="post"
            className="form"
            action="/"
            onSubmit={this.nextForm}
          >
            <Component state={this.state} onInputChange={this.onInputChange} />
            <input
              type="submit"
              // onClick={this.nextForm}
              value="Next"
              style={{
                padding: '10px 26px',
                marginTop: '22px',
                backgroundColor: this.state.hover
                  ? 'rgb(127, 123, 119)'
                  : '#fe9439eb',
                color: this.state.hover ? 'white' : 'rgb(127, 123, 119)',
                fontWeight: this.state.hover ? 'normal' : 'bold',
                borderColor: 'rgb(127, 123, 119)',
                borderWidth: 'medium',
                cursor: 'pointer',
              }}
              onMouseEnter={this.setHover}
              onMouseLeave={this.setHover}
            />
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
