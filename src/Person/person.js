import React from 'react';

const person = () => {
    return (
        <div>
        <p>I'm a Person, not a number!
        and I am {Math.floor(Math.random() * 30)} years old.</p>
        </div>
    )
};

export default person;