import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@500&display=swap');
  body{
   
    background-color: #E984E9;

     
     font-family: sans-serif;
     height: 100vh;
  
  
    
  }
  *{
    /**colocar imagem aqui  */
    background-image: url('');
    font-size: 14px;
    font-family:'M PLUS Rounded 1c', sans-serif;
    margin: 0;
    padding: 0;
    color: white;
    box-sizing: border-box;
  }

`

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
