import React from 'react';
import * as ReactDOM from 'react-dom';

// gets the "root" DOM element from index.html and passes it to createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));

const element = <h1>Hello, World</h1>;
root.render(element);

function tick() {
  const element = (
    <div>
      <h1>hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);
//root.render() is called every second from the setInterval() callback

// This is just for practice to mess around with rendering elements. In most react applications there is just one root.render and React apps only call root.render() once. This is done by how code is encapsulated into stateful components later.

// remember there needs to be a parent element so when createElement() is used there is only one arguement for the type value
const elementTwo = (
  <div>
    <h1>React only updates what is necessary</h1>
    <p>
      React DOM compares the elements and its children to the previous elemenet
      that was rendered and only updates what is nescessary. Can inspect element
      to on the ticking clock to see. Only the text node whose content has
      changed gets updated, meaning the div and the header containing hello
      world are not updated. This is what makes React apps fast
    </p>
    <p>
      from React "thinking how the UI should look at any given moment, rather
      than how to change it over time, eliminates a whole class of bugs
    </p>
  </div>
);

// This is the basic render of a React element from the React Main Concepts docs, before components are introduced. StackBliz starts with more boiler template than needed to learn these concepts
// https://reactjs.org/docs/rendering-elements.html

//elements are the smallest building blocks of React
// elements describe what to see on the screen

// this is a React element
// const element = <h1>Hello, world.</h1>;

// React elements are plain objects, because of the way Babel complies JSX down to React.createElement() calls to make this basically:

// const elementTwo = React.createElement('h1', 'Hello, World.');

// const elementOne = {
//   type: 'h1',
//   props: {
//     children: 'Hello, world.',
//   },
// };
// get an error when trying to render this, what is that error?

// <div>
//   {element}
//   {elementTwo}

//   <p>
//     React DOM takes care of updating the browser DOM to match React elements
//   </p>
//   <p>
//     React elements are what react components are made of. They are not the
//     same
//   </p>

//   <p>
//     React elements are immutable. To update the DOM you have to create a new
//     element and pass it to root.render()
//   </p>
// </div>
