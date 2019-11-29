import React from 'react';
import styled from 'styled-components';
import Trashcan from '../images/trashcan1.png';

const StyledDiv = styled.div`
      width: 60%;
      margin: 16px auto;
      border: 1px solid black;
      box-shadow: 3px 3px 3px  gray;
      padding: 6px;
      text-align: center;
      @media (min-width: 500px){ width: 450px;}
`;

const person2 = (props) => {
  return (
    <StyledDiv>
        <p>My name is {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
        <img onClick={props.remove} src={Trashcan} width='16px' height='16px' className='trashCan' alt=''></img>
    </StyledDiv>
  )
};

export default person2;