import React from 'react';
import * as ReactDOM from 'react-dom';
import './style.css';

// gets the "root" DOM element from index.html and passes it to createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));

// -------------------------------------------------------

// pt1 - COMPONENTS

const infoPt1 = (
  <div>
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

// pt2 - PROPS

const infoPt2 = (
  <div>
    <p>A "prop" is just an object. React decided to call it a "prop"</p>
    <code>
      {`
        let prop = {};
      `}
    </code>
    <p>
      "prop" stands for "properties" It contains information passed as an
      arguement to a React component. Basically a React component is a valid
      component if it accepts an object (aka, a "prop") as an arguement.
    </p>
    <code>
      {`
        prop = {
          author: {avatarURL: "url", name: "Katie"}
          text: "string"
          date: date object
        }
      `}
    </code>
    <ul>
      <li>prop.avatarURL = "url"</li>
      <li>prop.text = "string"</li>
      <li>prop.date = date object</li>
    </ul>
  </div>
);

// pt3 - Rendering a Component

// So far React elements have only represented DOM tags
const element = <div />;

const infoPt3 = (
  <div>
    <p>So far we have only seen React elements made up of DOM tags</p>
    <code>
      {`
        // this is a React element
        const element = <h1>Hello, World!</h1>
      `}
    </code>
    <p>But React elements can also represent custom-made components.</p>
    <code>
      {`
        // this is a React element with a React component
        const element = <Welcome name="Sara" />
      `}
    </code>
    <p>
      When React sees an element representing a custom-made component, React
      will pass JSX attributes and children to this component as a single
      object. React calls this object a "prop"
    </p>
    <p>For example:</p>
    <p>This is a custom-made React component:</p>
    <code>
      {`
        function Welcome(props) {
          return <h1>Hello, {props.name}</h1>;
        }
      `}
    </code>
    <p>This is a React element that contains the component above</p>
    <code>
      {`
          const element = <Welcome name="Sara" />;
        `}
    </code>
    <p>What the props object looks like:</p>
    <code>
      {`
        props = {
          name: "Sara"
        }
      `}
    </code>
    <p>
      {' '}
      This custom-made component accepts a prop object as an arguement. What
      does props.name evaluate to? What should be rendered on the page after
      looking at the code below?
    </p>
    <code>
      {`
        function Welcome(props) {
          return <h1>Hello, {props.name}</h1>;
        }
      `}
    </code>
    <p>Lowercase represents a DOM tag. Uppercase represents a component</p>
  </div>
);

// pt4 - COMPOSING COMPONENTS

const infoPt4 = (
  <div>
    <h2>Composing Components</h2>
    <p>
      Components can refer to other components in their output. Components can
      be reused with different prop arguements. This allows component
      abstraction.
    </p>
    <code>
      {`
        function App() {
          return (
            <div>
              <Welcome name="Sara" />
              <Welcome name="Cahal" />
              <Welcome name="Edite" />
            </div>
          );
        }
      `}
    </code>
    <p>
      Try this: type the function above in index.js file. Update root.render to
      be root.render(App())
    </p>
  </div>
);

// pt5 - PROPS ARE READ ONLY

const infoPt5 = (
  <div>
    <h2>Props are Read Only</h2>
    <p>A component must never modify its own props.</p>
    <p>
      this is good, it is "pure" because the function does not attempt to change
      the inputs and always returns the same result for the same inputs
    </p>
    <code>
      {`
        function sum(a, b) {
          return a + b;
        }
      `}
    </code>
    <p>
      {' '}
      this is bad, it is "impure" because this function changes its own input.
      account has now been altered.
    </p>
    <code>
      {`
        function withdraw(account, amount) {
          account.total -= amount;
        }
      `}
    </code>
    <p>
      This is a very strict rule in React. All React components must act like
      pure functions with respect to their props.
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

root.render(infoPt5);

// this is also a React component, using an ES6 class
// Talk about this in State and Lifecyle
class WelcomeTwo extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
// Welcome and WelcomeTwo are two components and considered the same from React's point of view.
