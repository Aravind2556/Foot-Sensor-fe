import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import './css/App.css'
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import  DContext  from './components/context/Datacontext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <DContext>
 
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </DContext>
  
);


