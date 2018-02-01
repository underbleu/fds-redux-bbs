import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import 'semantic-ui-css/semantic.min.css';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyBD8CfLa32HnzXiItzAoYFKvmVuAhPy82Y',
  authDomain: 'fds-redux.firebaseapp.com',
  databaseURL: 'https://fds-redux.firebaseio.com',
  projectId: 'fds-redux',
  storageBucket: '',
  messagingSenderId: '321732403014',
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
