// type ToDo = { id: number, text: string }
// type AppState = { secondsElapsed: number, todos: {ToDo} }
import { over, lensProp, inc } from 'ramda';
import App from './App';
import { Observable } from 'rxjs';

const incSecondsElapsed = over(lensProp('secondsElapsed'), inc);
const render = App.render(document.getElementById('app'));

// appState :: AppState
const appState = {
  secondsElapsed: 0,
  todos: [
    { id: 1, text: 'Matt' },
    { id: 2, text: 'Jess' },
    { id: 3, text: 'Chloe' },
    { id: 4, text: 'Oscar' },
  ],
};

Observable
  .interval(1000)                         // Observable(number)
  .scan(incSecondsElapsed, appState)      // Observable(AppState)
  .subscribe(render);
