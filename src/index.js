import React from 'react';
import * as ReactDOM from 'react-dom';

// gets the "root" DOM element from index.html and passes it to createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));

// this is a React element
const infoOne = (
  <div>
    <p>This is a valid React component</p>
    <code>{'function Welcome(props) { return <h1>Hello, {props}</h1>; }'}</code>
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

// this is a React component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// this is also a React component, using an ES6 class
class WelcomeTwo extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
// Welcome and WelcomeTwo are two components and considered the same from React's point of view.

// --------------------

// So far React elements have only represented DOM tags
const element = <div />;

// But elements can also represent user-defined components. Components that user's like you make.
const elementTwo = <Welcome name="Sara" />;
// When React sees an element representing a user-defined component, React will pass JSX attributes and children to this component as a single object --- this object is called "props"

//for example,
// root.render(elementTwo)
// capital case represents a component and has to do with JSX in depth

//COMPOSING COMPONENTS
// components can refer to other components in their output. This alows component abstraction.
// ex can use the welcome component many times for different names

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
//root.render(App())

//PROPS ARE READ ONLY
// a component must never modify its own props

// this is good, it is "pure" because the function does not attempt to change the inputs and always returns the same result for the same inputs
function sum(a, b) {
  return a + b;
}

// this is bad, it is "impure" because this function changes its own input
// account has now been altered.
function withdraw(account, amount) {
  account.total -= amount;
}

// This is a strict rule
// all react components must act like pure functions with respect to their props

root.render(App());
