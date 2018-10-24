import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import Counter from './Counter';


// Import reducers
import * as reducers from './reducers';

// Create store
const store = createStore(
  combineReducers(reducers)
)

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
