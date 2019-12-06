import React, {Component} from 'react';
import Person from './Person/person.js';

class Persons extends Component {

  //static getDerivedStateFromProps(props, state) {
  //  console.log('[Persons.js] getDerivedStateFromProps');
  //  return state;
  //}

  // componentWillReceiveProps(props) {
  //   console.log('[Persons.js] componentWillReceiveProps', props );
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate', nextProps, nextState );
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate', prevProps, prevState );
    return {message : 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log('Snapshot:', Snapshot);
  }

  render() {
    console.log('[Persons.js] rendering...');
    return  this.props.persons.map ((person, index) => {
      return (
        <Person 
          click={() => this.props.clicked(index)}
          remove={() => this.props.clicked(index)}
          changed={(evt) => this.props.changed(evt, person.id)}
          name={person.name}
          age={person.age}
          key={person.id}
        />
      ); 
    });
  }
}

export default Persons;