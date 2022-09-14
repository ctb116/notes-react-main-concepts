import React from 'react';
import './style.css';

export default function App() {
  //javascript expression
  const name = 'Josh';
  // can declare a name and use it in JSX using curly braces
  // This is an example of embedding expressions in JSX
  const element = <h1>Hello, {name}</h1>;

  //any javascript expression is valid including functions

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const userName = {
    firstName: 'Harp',
    lastName: 'Perz',
  };

  //embed the result of calling a JS function into an h1 html element.
  const elementOne = <h1>Hello, {formatName(userName)}</h1>;

  //what is user evaluating to when there is no arguement?
  //the boolean of undefined is false in JS
  function getGreeting(user) {
    console.log(user);
    if (user) {
      return <h1> Hello, {formatName(user)}.</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

  //can use quotes for string literals in attribues
  const elementTwo = <a href="url">link</a>;
  // or curly braces to embed a javascript expression (don't use both)
  const elementThree = <a href={userName}>link</a>;

  // since JSX is closer to JS than HTML it uses camelCase when naming attribues such as class attribute in HTML becomes className is JSX

  // if a tag is empty you may close it immediately with /> like XML
  const elementFour = <img src="url" />;

  //JSX tags may contain children
  const elementFive = (
    <div>
      <h1>Hello!</h1>
    </div>
  );

  //JSX prevents Injection Attacks, so it is safe to embed input from the user as an embedded expression. React DOM escapes any value embedded in JSX before rendering them. Everything is converted to strings before being rendered.

  //JSX represents objects
  // Babel compiles JSX down to React.createElement() calls

  const elementSix = <h1 className="greeting">Hello, world!</h1>;
  // These two are the same
  const elementSeven = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
  );

  //and React.createElement does some checks and then does this:
  const elementEight = {
    type: 'h1',
    props: {
      className: 'greeting',
      children: 'Hello, world!',
    },
  };

  // The above are called "React Elements" React describes  them as descriptions of what you want to see on the screen. In this example, we want an <h1> html element on the screen with a class attribute greeting and value of Hello world!

  //React reads these objects and uses them to construct the DOM

  //React recommends this extension for highlighting

  return (
    <div>
      {element}
      {elementOne}
      {getGreeting()}

      <p>
        JSX is an expression too meaning it is also a unit of code that resolves
        into a value. After compilation (when does this happen?) JSX expressions
        become regular JavaScriptand evaluate to JS objects. What does this
        mean.
      </p>

      <h1>JSX</h1>
      <p>
        JSX is a syntax extension to JavaScript. Syntax extension meaning that
        JSX is a new programming language based on JavaScript. Recommended by
        React folks themselves and I am using it because Epicodus is using it.
      </p>

      <code>{'const element = <h1>Hello, world!</h1>'}</code>

      <p>
        This is JSX. It is neither a string datatype and it is not the HTML
        language
      </p>

      <p>
        JSX produces React "elments" (the whole thing together above). Not the
        same as HTML elements, again JSX is not HTML
      </p>

      <p>
        Why JSX? Because React works on the philosophy that rendering logic is
        coupled with other UI logic - such as how events are handled, how the
        state changes over time and how the data is prepared for display.
        Rendering is the process of turning code into interactive pages that
        website viewers can interact with. Mainly HTML, CSS and JavaScrit. The
        process is done by a rendering engine such as....example...software used
        by the web browser to display the webpage. UI Logic for example is more
        how what happens after a button is clicked, how is a bunch of
        information displayed on the page. React is saying that those two things
        should not be seperated hence JSX. React does require JSX. Other popular
        language used with React is typescript. We don't need to learn every way
        to use React and that's okay. We are sticking with JSX because that is
        what React recommends. Example, how we have learned things so far. What
        happens after a button is clicked is handled by Javascript like
        this....but how the button is displayed is handled by HTML like
        thisss.....JSX is saying those two areas should be combined.
      </p>

      <p>
        React uses JSX to separate "concerns" into units called "components"
        that contain both rendering logic and UI logic.
      </p>

      <p>
        The file does not need to be .jsx and .js works find and is normally the
        default. Why?
      </p>

      <p>
        rules for automatic semicolon insertion
        https://stackoverflow.com/questions/2846283/what-are-the-rules-for-javascripts-automatic-semicolon-insertion-asi
      </p>

      <h1>JSX Resources</h1>
      <ul>
        <li>
          <a href="https://stackoverflow.com/questions/62208242/what-does-it-mean-that-jsx-is-a-syntax-extension-to-javascript-in-react">
            What does it mean that JSX is syntax extension?
          </a>
        </li>
        <li>
          <a href="https://reactjs.org/docs/introducing-jsx.html">
            Introducing JSX
          </a>
        </li>
      </ul>
    </div>
  );
}
