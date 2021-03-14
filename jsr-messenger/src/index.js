import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase'
import {Provider} from 'react-redux' 
import store from './Store'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCkOY8lHw6rhcZ8SLGMZ5GNeZCD9iPzXl0",
    authDomain: "jsr-messenger.firebaseapp.com",
    databaseURL: "https://jsr-messenger-default-rtdb.firebaseio.com",
    projectId: "jsr-messenger",
    storageBucket: "jsr-messenger.appspot.com",
    messagingSenderId: "88983133095",
    appId: "1:88983133095:web:8985462ca4435342427482",
    measurementId: "G-9KP5ETPGRS"
  };

firebase.initializeApp(firebaseConfig);

window.store=store;

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
