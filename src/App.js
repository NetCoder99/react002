import React, { useState } from 'react';
import './App.css';
//import Person   from './Person/person.js';
import Person2  from './Person/person2.js';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
           { name: 'Max', age: 28 },
           { name: 'Manu', age: 38 },
           { name: 'John', age: 48 }
         ],
         otherState: 'some other value'    
  });

  const switchNameHandler = () =>
  {
    setPersonsState(
     {    
       persons: [
        { name: 'Maximus', age: 28 },
        { name: 'Manual', age: 18 },
        { name: 'John', age: 57 }
     ]
   });   
  };

  return (
    <div className="App">
      <h1>Hello from React.</h1>
      <p>And here is a paragraph.</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person2 name={personsState.persons[0].name}  age={personsState.persons[0].age}></Person2>
      <Person2 name={personsState.persons[1].name}  age={personsState.persons[1].age}></Person2>
      <Person2 name={personsState.persons[2].name}  age={personsState.persons[2].age}></Person2>
    </div>
  );
}

export default App;


// state = {
//   persons: [
//     { name: 'Max', age: 28 },
//     { name: 'Manu', age: 38 },
//     { name: 'John', age: 48 }
//   ],
//   otherState: 'some other value'
// }

// switchNameHandler = () => {
//   console.log('Was clicked');
//   this.setState(
//     {    persons: [
//     { name: 'Maximus', age: 28 },
//     { name: 'Manual', age: 18 },
//     { name: 'John', age: 57 }
//     ],
//   })

