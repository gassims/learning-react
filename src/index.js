//toolkit to start writing code quickly
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from './App';
//import reportWebVitals from './reportWebVitals';

function AppTwo() {
  return <h1>This is the Second App</h1>

}



ReactDOM.render(
  //React best practices rules
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // React.createElement(
  //   "h1",
  // {style: {color:"teal"}},
  // "DHIS2 Developer Community"
  // ),
  // React.createElement("ul",null,
  // React.createElement("li",null,"Cool"),React.createElement("li",null,"Cool"),React.createElement("li",null,"Cool")),
  //JSX incorporated:
  //<>
  <React.Fragment>
    <App />
    {/* <AppTwo /> */}
  </React.Fragment>
  // </>
  ,
  document.getElementById('root')
);

//got rid of service worker stuff