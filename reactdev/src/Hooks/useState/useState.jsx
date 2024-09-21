// const { useState } = require("react")
// useState is a React Hook that lets you add a state variable to your component.
// const [state, setState] = useState(initialState)
// Initial value of state variable is initialState



//-------------------Declaration---------------------------------------

/*
const [age,setAge] = useState(18)
const [array,setArray] = useState([])
const [object,setObject] = useState({})
const [fun,setFun] = useState(()=>functionfun())
//Note-->useState() is a function can take an array,string,object,or a function as argument

*/

//-------------------Parameters------------------------------------------

/*
1-->initialState: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions.
This argument is ignored after the initial render.
If you pass a function as initialState, it will be treated as an initializer function. It should be pure, should take no arguments,
and should return a value of any type. React will call your initializer function when initializing the component, and store its return value as the initial state
*/

//-------------------Returns-----------------------------------------------

/*
useState returns an array with exactly two values------->
1-->The current state. During the first render, it will match the initialState you have passed
2-->The set function that lets you update the state to a different value and trigger a re-render.
*/

//-------------------Caveats-----------------------------------------------

/*
useState is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions.
If you need that, extract a new component and move the state into it.
In Strict Mode, React will call your initializer function twice in order to help you find accidental impurities.
This is development-only behavior and does not affect production. If your initializer function is pure (as it should be), this should not affect the behavior.
The result from one of the calls will be ignored.

*/

//-------------------set-function-----------------------------------------------

/*
The set function returned by useState lets you update the state to a different value and trigger a re-render. You can pass the next state directly, or a function that calculates it from the previous state:
const[name,setName] = useState("")
setName("Harsh")
setName((previousState)=>previousState+" Singh")
*/



//-------------------Usage 1-->Adding state to a component-----------------------------------------------

/*
    Call useState at the top level of your component to declare one or more state variables
    const [age, setAge] = useState(42);
    The convention is to name state variables like [something, setSomething] using array destructuring.
    useState returns an array with exactly two items==>
    1-->The current state of this state variable, initially set to the initial state you provided.
    2-->The set function that lets you change it to any other value in response to interaction.
    To update what’s on the screen, call the set function with some next state: setName('Robin');
    React will store the next state, render your component again with the new values, and update the UI.
*/

//-------------------Usage 2->Updating state based on the previous state-----------------------------------------------

/*
Suppose the age is 42. This handler calls setAge(age + 1) three times:
function handleClick() {
    setAge(age + 1); // setAge(42 + 1)
    setAge(age + 1); // setAge(42 + 1)
    setAge(age + 1); // setAge(42 + 1)
  }
  However, after one click, age will only be 43 rather than 45! This is because calling the set function does not update the age state variable in the already running code. So each setAge(age + 1) call becomes setAge(43).

To solve this problem, you may pass an updater function to setAge instead of the next state:

function handleClick() {
  setAge(a => a + 1); // setAge(42 => 43)
  setAge(a => a + 1); // setAge(43 => 44)
  setAge(a => a + 1); // setAge(44 => 45)
}
React puts your updater functions in a queue. Then, during the next render, it will call them in the same order:
React may call your updaters twice in development to verify that they are pure.
*/

//-------------------Usage 3-->Updating objects and arrays in state-----------------------------------------------

/*
You can put objects and arrays into state. In React, state is considered read-only, so you should replace it rather than mutate your existing objects. For example, if you have a form object in state, don’t mutate it:

// 🚩 Don't mutate an object in state like this:
form.firstName = 'Taylor';
Instead, replace the whole object by creating a new one:

// ✅ Replace state with a new object
setForm({
  ...form,
  firstName: 'Taylor'
});
*/

//-------------------Usage 4-->Avoiding recreating the initial state-----------------------------------------------

/*
React saves the initial state once and ignores it on the next renders.

function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos());
}
Although the result of createInitialTodos() is only used for the initial render, you’re still calling this function on every render
This can be wasteful if it’s creating large arrays or performing expensive calculations.
To solve this, you may pass it as an initializer function to useState instead:

function TodoList() {
  const [todos, setTodos] = useState(createInitialTodos);
}
Notice that you’re passing createInitialTodos, which is the function itself, and not createInitialTodos(), which is the result of calling it.
If you pass a function to useState, React will only call it during initialization.
*/

//-------------------Usage 5-->Resetting state with a key-----------------------------------------------

/*
You’ll often encounter the key attribute when rendering lists. However, it also serves another purpose.

You can reset a component’s state by passing a different key to a component. In this example, the Reset button changes the version state variable,
which we pass as a key to the Form. When the key changes, React re-creates the Form component (and all of its children) from scratch, so its state gets reset.
*/

//-------------------Usage 6-->Storing information from previous renders-----------------------------------------------

//---------------------Notes------------------------------------------------------------------------

/*
1-->Calling the set function does not change the current state in the already executing code:

function handleClick() {
    setName('Robin');
    console.log(name); // Still "Taylor"! //Value is changed after rerendering
  }
*/