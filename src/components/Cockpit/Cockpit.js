import React , {useEffect} from 'react';
import classes from './Cockpit.css';

const Cockpit = (props) => {

    useEffect(() => {
      console.log('[Cockpit.js] useEffect initialize');
      setTimeout(() =>{
         alert('Saved data to cloud.');
      }, 1000);
      return ()=> {
        console.log('[Cockpit.js] cleanup work in useEffect.');
      }
    }, []);

    useEffect(() => {
      console.log('[Cockpit.js] useEffect2 initialize');
      return ()=> {
        console.log('[Cockpit.js] cleanup work in useEffect2.');
      }
    });

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