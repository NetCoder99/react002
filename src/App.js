import React, { Component } from 'react';

import './App.css';
import './Person/person.css';

import Person2  from './Person/person2.js';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 38 },
      { id: '3', name: 'John', age: 48 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) =>  {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

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
          {this.state.persons.map((person, index) => {
            return (
              <Person2 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}  
                />
            )    
          })
        }
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

