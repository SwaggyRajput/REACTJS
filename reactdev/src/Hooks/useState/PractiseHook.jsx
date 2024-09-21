import { useState } from "react"

const PractiseHook=()=>{
  const [count,setCount] = useState(0)
  console.log(count)
  const changecount=()=>{
    console.log(count)
    setCount(count+1)
   console.log(count)
  }
  return(
    <>
    <button onClick={changecount}>click</button>
    </>
  )
}
export default PractiseHook