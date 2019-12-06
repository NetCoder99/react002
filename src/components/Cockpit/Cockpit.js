import React from 'react';
import Classes from './Cockpit.css';

const Cockpit = (props) => {

    const assignedClasses = [];
    let btnClass = 'BtnStyle';

    let btnText='Show Persons';

    if (props.showPersons) { 
      btnText='Hide Persons'
    }
    else { 
      btnText='Show Persons'
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(Classes.Red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(Classes.Bold);
    }

    return (
        <div className={assignedClasses.Cockpit}>
            <h1>Hello from React.</h1>
            <p className={assignedClasses.join(' ')}>You have {props.persons.length} persons left.</p>
            <button 
              onClick={props.clicked}
              className={btnClass}>
              {btnText}
            </button>
        </div>
    );
};

export default Cockpit;