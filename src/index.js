import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(   
//   <React.StrictMode>
//     <App />
//    </React.StrictMode> ,
//     document.getElementById("root")
// )

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './styles.css';
// import TestDiv from './App.test';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> 
);
// reportWebVitals();