import React, {Component} from 'react';
import Trashcan from '../../../images/trashcan1.png'
import classes from './person.css'

class Person extends Component 
{
  render()
  {
    console.log('[person.js] rendering...');
    return  (
      <div className={classes.Person}>
          <p>My name is {this.props.name} and I am {this.props.age} years old</p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name}/>
          <img onClick={this.props.remove} src={Trashcan} width='16px' height='16px' className='trashCan' alt=''></img>
      </div>
    )
  };
}

export default Person;