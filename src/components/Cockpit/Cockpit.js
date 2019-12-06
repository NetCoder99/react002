import React from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

    const assignedClasses = [];
    const btnClass = [classes.BtnStyle];

    let btnText='Show Persons';

    if (props.showPersons) { 
      btnText='Hide Persons'
      btnClass.push(classes.Red); 
    }
    else { 
      btnText='Show Persons'
      btnClass.push(classes.Green); 
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.Red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.Bold);
    }

    return (
        <div className={assignedClasses.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>You have {props.persons.length} persons left.</p>
            <button 
              onClick={props.clicked}
              className={btnClass.join(' ')}>
              {btnText}
            </button>
        </div>
    );
};

export default Cockpit;