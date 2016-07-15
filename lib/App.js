import React from 'react';
import ReactDOM from 'react-dom';
import { curry } from 'ramda';
import Timer from './Timer';
import TodoList from './TodoList';

// App :: AppState -> ReactElement
const App = (appState) =>
  (<div className="container">
    <h1>App name</h1>
    <Timer {...appState} />
    <TodoList todos={appState.todos} />
  </div>);

App.propTypes = {
  secondsElapsed: React.PropTypes.number,
  todos: React.PropTypes.array,
};

// App.render :: DOMElement -> Object -> Void
App.render = curry((node, props) => ReactDOM.render(<App {...props} />, node));

export default App;
