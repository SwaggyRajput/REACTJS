//-----------------------------CREATE ELEMENT--------------------

/*
const h1=React.createElement(
    'h1',{className:"subheading"},"Harsh Singh"
)
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(h1)
*/

//-----------------------------CREATE ELEMENT AS OBJECT--------------------

/*
const h1={        //Same as React.createElement as written above
    $$typeof:Symbol.for('react.element'),
    type:'h1',
    ref:null,
    props:{
        className:'subheading',
        children:"Harsh Singh"
    }
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(h1)
*/

//-----------------------------MULTIPLE CREATE ELEMENT IN ARRAY---------------------

/*
const h1=React.createElement(
    'h1',{className:"subheading"},"Harsh Singh"
)
const button=React.createElement(
    'button',{className:"btn"},"CLick Me"
)
const div=React.createElement(
    'div',
    {className:"container"},
    [h1,button]
)


const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(div)

*/

//-----------------------------CREATE ELEMENT BY JSX---------------------

/*
const h2=<h2>Harsh Singh</h2>
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(h2)

*/

//-----------------------------JSX---------------------

/*
JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.

*/

//-----------------------------BABEL---------------------

/*
Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current
and older browsers or environments. Here are the main things Babel can do for you:

Transform syntax
Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
Source code transformations (codemods)

*/

//-----------------------------EXAMPLE BY CREATE ELEMENT---------------------

/*
const form=React.createElement('form',null,[
    React.createElement('input',{type:'text'}),
    React.createElement('input',{type:'text'}),
    React.createElement('button',{type:'submit'},'Submit')
])

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(form)

*/

//-----------------------------EXAMPLE BY JSX---------------------

const form = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("input", {
  type: "text"
}), /*#__PURE__*/React.createElement("input", {
  type: "text"
}), /*#__PURE__*/React.createElement("button", {
  type: "submit"
}, "Submit"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(form);
//# sourceMappingURL=script.js.map