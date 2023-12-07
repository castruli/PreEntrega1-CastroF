import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const firebaseConfig = {
  apiKey: "AIzaSyA4fqu5hhRwy3zvgZyTFO3Kr1yQn-woxuY",
  authDomain: "castrof-31666.firebaseapp.com",
  projectId: "castrof-31666",
  storageBucket: "castrof-31666.appspot.com",
  messagingSenderId: "135194083270",
  appId: "1:135194083270:web:10b75c67ab69ccadeb7cc7"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
