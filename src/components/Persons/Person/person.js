import React, {Component} from 'react';
import Trashcan from '../../../images/trashcan1.png'
import classes from './person.css'
import Aux from '../../../hoc/Aux.js';

class Person extends Component 
{
  render()
  {
    console.log('[person.js] rendering...');
    return  (
      <Aux>
          <p >My name is {this.props.name} and I am {this.props.age} years old</p>
          <p >{this.props.children}</p>
          <input type="text" 
            onChange={this.props.changed} 
            value={this.props.name}/>
          <img onClick={this.props.remove} src={Trashcan} width='16px' height='16px' className='trashCan' alt=''></img>
      </Aux>          
    )
  };
}

export default Person;