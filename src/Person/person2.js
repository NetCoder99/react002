import React from 'react';
import Trashcan from '../images/trashcan1.png';

const person2 = (props) => {
    return (
        <div className="Person">
          <p onClick={props.click}>My name is {props.name} and I am {props.age} years old</p>
          <p>{props.children}</p>
          <input type="text" onChange={props.changed} value={props.name}/>
          <img onClick={props.remove} src={Trashcan} width='16px' height='16px' className='trashCan' alt=''></img>
        </div>
    )
};

export default person2;