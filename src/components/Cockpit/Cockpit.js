import React , {useEffect} from 'react';
import classes from './Cockpit.css';


const Cockpit = (props) => {

    useEffect(() => {
      console.log('[Cockpit.js] useEffect initialize');
      // setTimeout(() =>{
      //    alert('Saved data to cloud.');
      // }, 1000);
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
    var btnClickProp = props.clicked;

    let btnText='Show Persons';

    if (props.showPersons) { 
      btnText='Hide Persons'
      btnClass.push(classes.Red); 
    }
    else { 
      btnText='Show Persons'
      btnClass.push(classes.Green); 
    }

    if (props.personsLength <= 2) {
      assignedClasses.push(classes.Red);
    }
    if (props.personsLength === 1) {
      assignedClasses.push(classes.Bold);
    }

    if (props.personsLength < 1) {
      assignedClasses.push(classes.Bold);
      btnText='Reset Persons'
      btnClass.push(classes.Green); 
      btnClickProp = props.reset;
    }

    return (
        <div className={assignedClasses.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>You have {props.personsLength} persons left.</p>
            <button 
              onClick={btnClickProp}
              className={btnClass.join(' ')}>
              {btnText}
            </button>
        </div>
    );
};

export default React.memo(Cockpit);