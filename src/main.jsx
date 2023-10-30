import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import Header from "./components/Header";



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
   <Header />
  </React.StrictMode>,
)
