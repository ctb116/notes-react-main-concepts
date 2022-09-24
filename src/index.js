import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './style.css';

// gets the "root" DOM element from index.html and passes it to createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));
const rootTwo = ReactDOM.createRoot(document.getElementById('boot'));

// -------------------------------------------------------

// pt1 - COMPONENTS

// React is very flexiable but in the last lesson we ended talking about React's single strict rule: All React components must act like pure functions with respect to their props!!

//There was this function though that is considered unpure:

function withdraw(account, amount) {
  account.total -= amount;
}

// If this were a valid react component it would look like this:

function withdrawTwo(props) {
  props.account.total -= props.amount;
}

// but this is a totally normal thing to want to do. So what the heck?

// convert function to a class instead. this is defined as a class (an ES6 class) instead of a function
//Not going to cover everything in this right now - it is just what is needed to make a class component at the moment..or go with bare bones class

//pretend user Input
const amount = 25;

class Bank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: 50,
    };
  }

  render() {
    return (
      <div>
        <p>Amount is now {(this.state.account -= amount)}</p>
      </div>
    );
  }
}

//This is a lot, take a moment to talk about what looks familar and what makes sense vs what is new and makes no sense. We are gonna go through it step by step

//NOTES ABOUT THE CONSTRUCTOR
// we pass props in because otherwise "props" alone would be undefined. However, it is considered bad practice to pass props into a constructor. There is no reason given https://stackoverflow.com/questions/30571875/whats-the-difference-between-super-and-superprops-in-react-when-using-e Remember coding is all made up by people in small rooms.

// In our apps we are going to stick to constructor(props) and stuff because for now that is what the offical React documentation does and we don't want our resources to conflict with their resources.
// Give an example what a class component could look like

// This will likely get people mad because 25 now represents the amount and it is not clear where that number comes from

// you need super() for "this" keyword to work.
// you could make a class component without a constructor or the super() but it is not recommend. Why?
  // It is fine to not have a constructor if you don't need to intialize state and you don't need to bind methods.
  // a constructor is called before the component is unmounted



// LIFECYCLE METHODS TO CLASS COMPONENTS
// app will start to have many components. It is important to free up resources used by components when they are destroyed.

// mounting - what happens when a componented in rendered in the DOM for the first time
// unmounting - what happens when a component is removed from the DOM


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
        <p>Amount is now {(this.state.account -= amount)}</p>
      </div>
    );
  }
}

const infoPt1 = (
  <div>
    <h2></h2>
    <p>This is a React component:</p>
    <code>
      {`
        function Welcome(props) { 
          return <h1>Hello, {props.name}</h1>; 
        }
        `}
    </code>
    <p>
      This kind of React component is called a function component or a
      functional component because it is literally just a JavaScript function.
    </p>
    <p>It is a vaid React component because it:</p>
    <ol>
      <li>This function accepts a single "prop" object argument</li>
      <li>This function returns a React element</li>
    </ol>
    <p>
      <a href="https://reactjs.org/docs/react-component.html">
        Detailed component API reference
      </a>
    </p>
  </div>
);

// -------------------------------------------------------

// infoPt1 = pt1 - COMPONENTS
// infoPt2 = pt2 - PROPS
// infoPt3 = pt3 - RENDERING A COMPONENT
// infoPt4 = pt4 - COMPOSING COMPONENTS
// infoPt5 = pt5 - PROPS ARE READ ONLY

// Replace the arguement in root.render to see each section.
// Try code below and remember to pass it to root.render()

root.render(<Bank />);
rootTwo.render(<Bank />);
