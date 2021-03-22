import React from 'react';

 var newNumber = 0;

function genNew(event){
    newNumber =  Math.floor(Math.random() * 3);
      event.preventDefault();
      console.log(newNumber);
    };

export {newNumber};
export default genNew;