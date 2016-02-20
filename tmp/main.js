import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Provider } from 'react-redux';
import Root from './Root';
import { createStore } from 'redux';
import rootReducer from './redux/rootReducer';
const store = createStore(rootReducer);
ReactDOM.render(React.createElement(Provider, {store: store}, React.createElement(Root, null)), document.querySelector('#container'));
