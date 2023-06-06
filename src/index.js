import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import Createa4 from './Createafour';
// import ValidationExample from './Forms';
// import Colorcards from './Colorcards';
// import  LifeCycle  from './lifecycle';
// import Example from './Example';'
// import Timer from './Timer';
// import PropsModel from './PropsModel';
// import Propinputs from './Propinputs';
import Singleinput from './Singleinput';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Createa4 /> */}
    {/* <ValidationExample/> */}
    {/* <Colorcards/> */}
    {/* <ButtonType/> */}
    {/* <LifeCycle/> */}
    {/* <Example/> */}
    {/* <Timer/> */}
    {/* <PropsModel/> */}
    {/* <Propinputs/> */}
    <Singleinput/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
