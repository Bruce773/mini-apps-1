const React = require('react');
const ReactDOM = require('react-dom');

var FormOne = (props) => (
  <div className="form-one">
    <div className="form-label">Name: </div>
    <input type="text" />
  </div>
);

class App extends React.Component {
  render() {
    return FormOne();
  }
}

ReactDOM.render(<App />, document.getElementsByClassName('app'));

module.exports = App;
