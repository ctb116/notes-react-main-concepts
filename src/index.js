// gets the "root" DOM element from index.html and passes it to createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));

const element = <h1>Hello, World</h1>;
root.render(element);

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
