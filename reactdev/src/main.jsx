import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { MyContext } from "./Hooks/useContext/MyContext.jsx";
// import Card from './components/Card.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContext.Provider>
      <App />
    </MyContext.Provider>
  </StrictMode>
);

//When we write <Card title="Mobile" brand="Vivo" price={1000} /> it is rendered as below-->

/*
const card={
  $$typeof:Symbol.for('react.element'),
  type:Card,
  ref:null,
  props:{
    title:"Mobile",
    brand:"Vivo",
    price:1000
    
  }
}
const root=createRoot(document.getElementById('root'))
root.render(card)

//Note-->WHen type is passed as a string then it creates a dom element and props is added as attributes 
//Note-->WHen type is passed as a function then it creates a then props is passed same as object as argument

*/
