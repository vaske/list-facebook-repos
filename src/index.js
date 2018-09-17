import React from 'react';
import ReactDOM from 'react-dom';

import App from 'components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducer from 'core/store/repository/reducers/repository';
import { rootEpic } from 'core/epics';

import 'sass/index.css';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
