'use strict';

import React, {Component}               from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider }                     from 'react-redux';
import HomeVideo                        from './js/components/homeVideo';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeVideo />
      </Provider>
    );
  }
}