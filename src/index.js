import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './style.css';

// gets the "root" DOM element from index.html and passes it to createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));
const rootTwo = ReactDOM.createRoot(document.getElementById('boot'));

// -------------------------------------------------------

// HANDLING EVENTS
  // the same as you have done before to handling events on DOM elements but some syntax is different
  // React events are named using camelCase
  // with JSX, you pass a function as the event handler, rather than a string

  // example in HTML
  // <button onclick="activateLasers()">
  //   Phew
  // </button>

  //in JSX
  // <button onClick={activateLasers}>
  //   Activate Lasers
  // </button>


  // cannot return "false" to prevent default React behavior. must use preventDefault explicitly
  //dive more into synthetic events and how React does not work the same as native events. Mentioned on Main Concepts Handling Events

  //unlike we have used to, don't need to addEventListener to add listeners to a DOM element. Can just provide a listener when the element is rendered.



//pretend user Input
const amount = 25;

class Bank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      account: 50,
    };
    // this binding is necessary to make "this" work below in the callback. Try commenting it out and see for yourself/ In JS, class methods are not bound by default so we have to bind hte method like this
    // why bind "this"?
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  deleteRow() {
    console.log("delete");
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>        
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>

      {/* passing arguements to event handlers each of these is okay to do*/}
      {/* e represents the React event that will be passed as a second arguement after the ID. With arrow function is has to be explicityly passed but with "bind" any further arugements are automatically forwarded */}

      {/* <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
      <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}
      </div>
    );
  }
}


// you can make react components that don't bind "this" and it would like like.....
// actually react does go into how to avoid bind if you don't want to.
    // you are more than welcome to use this syntax but the lessons we continue to use bind because that is what the React tutorial is doing and that is what React documentation recommends. Just be prepared  you may see it differently in the future.
    // either use arrow notation to define methods so this is bound or do this.handleClick() when calling the method
    // or arrow notiation in the callback itself like <button onClick={() => this.handleClick()}>
      // possible problem with this is that if the callback passes a prop to a lower component, those components might do an extra re-rendering. This might have been my problem omg



class BankTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: 50,
      date: new Date()
    };
  }

  //what happens when the component is rendered to the DOM for the first time
  // from the React docs - not sure what this means:
    // While this.props is set up by React itself and this.state has a special meaning, you are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow (like a timer ID).
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

  }

  // what happens when the component is removed from the DOM
  // this and componentDidMount() are called lifecycle methods
  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <p>Amount is now {this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}


root.render(<Bank />);
rootTwo.render(<BankTwo />);


