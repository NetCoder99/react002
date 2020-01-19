import React, { Component } from 'react';
import AppClasses from './App.css';
import Persons from '../components/Persons/Persons.js';
import Cockpit from '../components/Cockpit/Cockpit.js';
import WithClass from '../hoc/WithClass.js';

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
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProsp, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }


  deletePersonHandler = (personIndex) =>  {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  resetPersonHandler = () =>  {
    console.log('[App.js] resetPersonHandler');
    const persons = [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 38 },
      { id: '3', name: 'John', age: 48 }
    ];
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
    console.log('[App.js] togglePersonHandler');
    const isVisible = this.state.showPersons;
    this.setState( { showPersons: !isVisible }) 
  }

  toggleCockpitVisible = () => {
    const isVisible = this.state.showCockpit;
    this.setState( { showCockpit: !isVisible }) 
  }

  render () {
    console.log('[App.js] render');

    let personsView = null;
    if (this.state.showPersons)
    {
      personsView = (
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

    let cockpit = null;
    if (this.state.showCockpit)
    {
      cockpit = (
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonHandler}
          reset={this.resetPersonHandler}
        />
      );   
    }

    return (
        <WithClass classes={AppClasses.App}>
          <button onClick={this.toggleCockpitVisible}>Toggle Cockpit</button>
          {cockpit}
          {personsView}
        </WithClass>
    );
  }
}

export default App;

