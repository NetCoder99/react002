import React, { Component } from 'react';

import AppClasses from './App.css';
import './Person/person.css';

import Person2  from './Person/person2.js';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry.js';

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

  nameChangedHandler = (event, id)  => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState( {  persons: persons })
  }

  togglePersonHandler = () => {
    const isVisible = this.state.showPersons;
    this.setState( { showPersons: !isVisible }) 
  }

  render () {
    const btnText = {text: "Show Names"};
    let  btnClass = [AppClasses.BtnStyle];

    let persons = null;
    if (this.state.showPersons)
    {
      persons = (
        <div>
          {this.state.persons.map (
            (person, index) => {
            return (
              <ErrorBoundry key={person.id}>
              <Person2 
                click={() => this.deletePersonHandler(index)}
                remove={() => this.deletePersonHandler(index)}
                changed={(evt) => this.nameChangedHandler(evt, person.id)}
                name={person.name}
                age={person.age}
              />
              </ErrorBoundry>
            )    
          }
        )
        }
       </div>
      );   
      btnText.text = "Hide Names";
      btnClass.push(AppClasses.Red);
    }
    else
    {
      btnClass.push(AppClasses.Green);
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(AppClasses.Red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(AppClasses.Bold);
    }

    return (
        <div className={AppClasses.App}>
          <h1>Hello from React.</h1>
          <p className={classes.join(' ')}>And here is a paragraph.</p>
          <button className={btnClass.join(' ')} onClick={this.togglePersonHandler}>{btnText.text}</button>
          {persons}
        </div>
    );
  }
}

export default App;

