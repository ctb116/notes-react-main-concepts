import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './style.css';

// gets the "root" DOM element from index.html and passes it to createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));
const rootTwo = ReactDOM.createRoot(document.getElementById('boot'));

// -------------------------------------------------------

// CONDITIONAL RENDERING

// Same as with JS, use operators like "if" or the conditional operator to create elements that represent the current state


function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign-in</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn) {
    return <UserGreeting/>;
  } else {
    return <GuestGreeting />;
  }
}


function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

const amount = 25;

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {      
      button = <LogoutButton onClick={this.handleLogoutClick} />;    
      } else {      
        button = <LoginButton onClick={this.handleLoginClick} />;    
      }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />        
        {button}      
      </div>
    );
  }
}

// can embed expressions in JSX by wrapping them in curly brac and this includes JS logical operators
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&        
      <h2>          
        You have {unreadMessages.length} unread messages.        
      </h2>      
      }    
    </div>
  );
}
const messages = ['React', 'Re:React', 'ReEEEEEE']

// works because JS with "true && expression" always evaluates to expression. whereas "false && expression" always evaluates to false. If it is true then React will render the element after the &&. If it is false then React will skip it.

//returning a falsy expression causes some problems because the element after && will be skipped but React will still return the falsy expression.

// LASTLY CAN ALSO USE INLINE IF-ELSE CONDITIONAL OPERATOR, example in Conditional Rendering page



// PREVENTING COMPONENT FROM RENDERING
// in some cases you might want to do this - the component will hide itself even though it was rendered by another component. Return "null" instead of its render output. or false.  Returning "null" does not affect the firing of the component's lifecycle method

function WarningBanner(props) {
  if (!props.warn) {    
    return null;  
  }
  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />        
          <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

root.render(<Page />);

rootTwo.render(<Page/>);



//this example renders a different greeting depending on the value of isLoggedIn prop
root.render(<Greeting isLoggedIn={false}/>);


