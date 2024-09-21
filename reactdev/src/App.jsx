// import Card from "./components/Card";
// import Counter from "./Hooks/useState/Counter_without_hooks";
// import CountryList from "./Hooks/useEffect/Country_Api";
import { useContext } from "react";
// import PractiseHook from "./Hooks/useState/PractiseHook";
import { MyContext } from "./Hooks/useContext/MyContext";
// import Counter from "./Hooks/useState/Counter_with_hooks"
const App = () => {
  const contextValue = useContext(MyContext)
  console.log(contextValue)
  return (
    <>
      {/* <Card title="Mobiles" brand="vivo" price="1000" /> */}

      {/* <Card title="Mobiles" brand="vivo" price="1000" >{
        {
          model:"M21",
          manufacture:"vivo-india"
        }
      }</Card> */}

      {/* <Counter /> */}

      {/* <CountryList /> */}

      {/* <PractiseHook /> */}

      
    </>
  );
};

export default App;
