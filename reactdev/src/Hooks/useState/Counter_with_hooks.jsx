import { useState } from "react";

const Counter = () => {
    const [counter,setCounter] = useState(0)
  const incrementHandle=()=>{
    setCounter(counter+1)

  }
  const decrementHandle=()=>{
    setCounter(counter-1)
  }
  {console.log(counter)}
  

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "300%",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: "-15%",
        }}
      >
        Counter App
        <div
          style={{
            fontSize: "120%",
            position: "relative",
            top: "10vh",
          }}
        >
          {counter}
          
        </div>
        <div className="buttons">
          <button
            style={{
              fontSize: "60%",
              position: "relative",
              top: "20vh",
              marginRight: "5px",
              backgroundColor: "green",
              borderRadius: "8%",
              color: "white",
            }}
            onClick={incrementHandle}
          >
            Increment
          </button>
          <button
            style={{
              fontSize: "60%",
              position: "relative",
              top: "20vh",
              marginLeft: "50px",
              backgroundColor: "red",
              borderRadius: "8%",
              color: "white",
            }}
            onClick={decrementHandle}
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
