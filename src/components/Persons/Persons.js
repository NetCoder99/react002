import React from 'react';
import Person from './Person/person.js';

const Persons = (props) => (
    props.persons.map (
        (person, index) => {
        return (
          <Person 
            click={() => props.clicked(index)}
            remove={() => props.clicked(index)}
            changed={(evt) => props.changed(evt, person.id)}
            name={person.name}
            age={person.age}
          />
        ) 
    }
    )
);

export default Persons;