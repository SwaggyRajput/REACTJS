// const { useEffect } = require("react")

// useEffect is a React Hook that lets you synchronize a component with an external system.

// useEffect(setup, dependencies?)

//-------------------Declaration---------------------------------------

// useEffect(()=>{},[])

//-------------------Parameters------------------------------------------

/*
    1-->setup::The function with your Effect’s logic. Your setup function may also optionally return a cleanup function.
    When your component is added to the DOM, React will run your setup function. After every re-render with changed dependencies,
    React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values.
    After your component is removed from the DOM, React will run your cleanup function.

    2-->optional dependencies: The list of all reactive values referenced inside of the setup code. Reactive values include props, state,
    and all the variables and functions declared directly inside your component body.
    React will compare each dependency with its previous value using the Object.is comparison.
    If you omit this argument, your Effect will re-run after every re-render of the component

*/

//-------------------Returns-----------------------------------------------

// useEffect returns undefined.

//-------------------Usage 1-->Connecting to an external system-----------------------------------------------

/*
Some components need to stay connected to the network, some browser API, or a third-party library, while they are displayed on the page. These systems aren’t controlled by React, so they are called external.

To connect your component to some external system, call useEffect at the top level of your component:

import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
  	const connection = createConnection(serverUrl, roomId);
    connection.connect();
  	return () => {
      connection.disconnect();
  	};
  }, [serverUrl, roomId]);
  // ...
}
You need to pass two arguments to useEffect:

A setup function with setup code that connects to that system.
It should return a cleanup function with cleanup code that disconnects from that system.
A list of dependencies including every value from your component used inside of those functions.
React calls your setup and cleanup functions whenever it’s necessary, which may happen multiple times:

Your setup code runs when your component is added to the page (mounts).
After every re-render of your component where the dependencies have changed:
First, your cleanup code runs with the old props and state.
Then, your setup code runs with the new props and state.
Your cleanup code runs one final time after your component is removed from the page (unmounts).

*/