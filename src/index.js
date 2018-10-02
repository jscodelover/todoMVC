import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import App from './container/App';
import reducer from './store/reducer';
import './index.scss';

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(persistedReducer);
let persistor = persistStore(store);

const app = <Provider store={store}>
	<PersistGate loading={null} persistor={persistor}>
		<App />
	</PersistGate>
</Provider>;

ReactDOM.render(app, document.getElementById('root'));
