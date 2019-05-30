import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'store';
import App from 'app/App';
import * as serviceWorker from './serviceWorker';

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

serviceWorker.unregister();
