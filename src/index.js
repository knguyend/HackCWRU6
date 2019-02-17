import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '@firebase/firestore';
import { FirestoreProvider } from 'react-firestore';

const firebase = window.firebase;
ReactDOM.render(<FirestoreProvider firebase={firebase}><App /></FirestoreProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
