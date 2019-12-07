import React, {PureComponent} from 'react';
import Person from './Person/person.js';

class Persons extends PureComponent {

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate', nextProps, nextState );
  //   if (    nextProps.persons !== this.props.persons 
  //        || nextProps.clicked !== this.props.clicked
  //        || nextProps.changed !== this.props.changed )
  //   { return true;}
  //   else
  //   { return false;}
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate', prevProps, prevState );
    return {message : 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, Snapshot) {
    console.log('[Persons.js] componentDidUpdate');
    console.log('Snapshot:', Snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount');
  }

  render() 
  {
    console.log('[Persons.js] rendering...');
    return  this.props.persons.map ((person, index) => 
    {
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