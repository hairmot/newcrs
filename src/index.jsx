import React from 'react';
import { render } from 'react-dom';
import CustomRouter from './router.js';
import {createStore, applyMiddleware} from 'redux';
import Reducer from './Reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

let store = createStore(Reducer, applyMiddleware(thunk));

render(
	<Provider store={store}>
	<CustomRouter store={store} />
	</Provider>,
	document.querySelector("#app")
);


