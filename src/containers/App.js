import React, { Component } from 'react';
import AppClasses from './App.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit.js';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 38 },
      { id: '3', name: 'John', age: 48 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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
    console.log('[App.js] render');
    let persons = null;
    if (this.state.showPersons)
    {
      persons = (
        <div>
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              removed={this.deletePersonHandler}
              changed={this.nameChangedHandler}
            />
       </div>
      );   
    }
    return (
        <div className={AppClasses.App}>
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}
          />
          {persons}
        </div>
    );
  }
}

export default App;

