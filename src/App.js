import React, { Component } from 'react';

import './App.css';
import './Person/person.css';

//import Person   from './Person/person.js';
import Person2  from './Person/person2.js';


class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 38 },
      { name: 'John', age: 48 }
    ],
    otherState: 'some other value'
  }


  switchNameHandler1 = (newName) => {
   console.log('switchNameHandler Was clicked');
   this.setState( {    
     persons: [
      { name: 'Maximus', age: 28 },
      { name: newName, age: 18 },
      { name: 'John', age: 57 }
     ],
   })
  };

  switchNameHandler2 = (newName) => {
    console.log('switchNameHandler2 Was clicked');
    this.setState( {    
      persons: [
       { name: 'Max', age: 28 },
       { name: 'Manu', age: 18 },
       { name: newName, age: 57 }
      ],
    })
   };


  nameChangedHandler = (event)  => {
    this.setState( {    
      persons: [
       { name: 'Max', age: 28 },
       { name: event.target.value, age: 18 },
       { name: 'Stephanie', age: 57 }
      ],
    })

  }


   render () {
    const btnStyle = {
      backgroundColor: "white",
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
    <div className="App">
      <h1>Hello from React.</h1>
      <p>And here is a paragraph.</p>
      <button 
        style={btnStyle}
        onClick={() => this.switchNameHandler1('Manny')}>Switch Name</button>
      <Person2 
          name={this.state.persons[0].name}  
          age={this.state.persons[0].age}/>
      <Person2 
          name={this.state.persons[1].name}  
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}  
          />
      <Person2 
          name={this.state.persons[2].name}  
          age={this.state.persons[2].age}
          click={this.switchNameHandler2.bind(this, 'Johnny')}
        />
    </div>
    );
  }
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

