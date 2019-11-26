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
    otherState: 'some other value',
    showPersons: false
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

  togglePersonHandler = () => {
    const isVisible = this.state.showPersons;
    this.setState( { showPersons: !isVisible }) 
  }


  render () {

    let persons = null;
    if (this.state.showPersons){
      persons = (
        <div>
          <Person2 
              name={this.state.persons[1].name}  
              age={this.state.persons[1].age}
              changed={this.nameChangedHandler}/>
        </div>
      );    
    }

    return (
    <div className="App">
      <h1>Hello from React.</h1>
      <p>And here is a paragraph.</p>
      <button className="btnStyle" onClick={this.togglePersonHandler}>Show Names</button>
      {persons}
    </div>
    );
  }
}

export default App;

